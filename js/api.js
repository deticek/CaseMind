/* CaseMind — optional public API integrations */
(function () {
  "use strict";

  const BOOK_CACHE_KEY = "casemind.books.v1";
  const BOOK_CACHE_MS = 6 * 60 * 60 * 1000;

  const FALLBACK_BOOKS = [
    {
      title: "The Hound of the Baskervilles",
      author: "Arthur Conan Doyle",
      url: "https://www.gutenberg.org/ebooks/2852",
      source: "archive"
    },
    {
      title: "The Moonstone",
      author: "Wilkie Collins",
      url: "https://www.gutenberg.org/ebooks/155",
      source: "archive"
    },
    {
      title: "The Mysterious Affair at Styles",
      author: "Agatha Christie",
      url: "https://www.gutenberg.org/ebooks/863",
      source: "archive"
    },
    {
      title: "The Innocence of Father Brown",
      author: "G. K. Chesterton",
      url: "https://www.gutenberg.org/ebooks/204",
      source: "archive"
    }
  ];

  function readCachedBooks() {
    try {
      const raw = sessionStorage.getItem(BOOK_CACHE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.books) || !parsed.at) return null;
      if (Date.now() - parsed.at > BOOK_CACHE_MS) return null;
      return parsed;
    } catch (err) {
      return null;
    }
  }

  function cacheBooks(books, online) {
    try {
      sessionStorage.setItem(BOOK_CACHE_KEY, JSON.stringify({ at: Date.now(), online, books }));
    } catch (err) { /* cache is optional */ }
  }

  function normalizeBook(item) {
    const formats = item.formats || {};
    return {
      title: item.title || "Untitled",
      author: (item.authors && item.authors[0] && item.authors[0].name) || "Unknown author",
      url: formats["text/html"] || formats["text/html; charset=utf-8"] || (item.id ? `https://www.gutenberg.org/ebooks/${item.id}` : "https://www.gutenberg.org/"),
      source: "online"
    };
  }

  async function getBooks(options) {
    const opts = options || {};
    if (opts.force !== true) {
      const cached = readCachedBooks();
      if (cached) return { books: cached.books, online: cached.online, cached: true };
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 9000);
    try {
      const response = await fetch("https://gutendex.com/books/?search=detective%20fiction&languages=en&sort=popular", {
        signal: controller.signal,
        headers: { Accept: "application/json" }
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      const books = (Array.isArray(data.results) ? data.results : [])
        .slice(0, 5)
        .map(normalizeBook)
        .filter((b) => b && b.title);
      if (!books.length) throw new Error("Empty catalogue response");
      cacheBooks(books, true);
      return { books, online: true, cached: false };
    } catch (err) {
      cacheBooks(FALLBACK_BOOKS, false);
      return { books: FALLBACK_BOOKS.slice(), online: false, cached: false, error: err && err.name === "AbortError" ? "timeout" : "unavailable" };
    } finally {
      clearTimeout(timeout);
    }
  }

  /* OpenAI-compatible chat endpoint. Works keyless with Pollinations and with
     any user-supplied compatible endpoint (OpenAI, Groq, local gateways, …). */
  async function chat(options) {
    const opts = options || {};
    const endpoint = String(opts.endpoint || "").trim();
    if (!endpoint) throw new Error("No live endpoint configured.");

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), opts.timeout || 35000);
    const headers = { "Content-Type": "application/json", Accept: "application/json" };
    if (opts.key) headers.Authorization = `Bearer ${String(opts.key).trim()}`;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers,
        signal: controller.signal,
        body: JSON.stringify({
          model: opts.model || "openai-fast",
          messages: Array.isArray(opts.messages) ? opts.messages : [],
          temperature: typeof opts.temperature === "number" ? opts.temperature : 0.55,
          max_tokens: opts.maxTokens || 500,
          stream: false
        })
      });
      if (!response.ok) {
        let detail = "";
        try {
          const text = await response.text();
          detail = text ? ` ${text.slice(0, 160)}` : "";
        } catch (err) { /* ignore */ }
        throw new Error(`Live endpoint returned HTTP ${response.status}.${detail}`);
      }
      const data = await response.json();
      const choice = data && Array.isArray(data.choices) ? data.choices[0] : null;
      const content = choice && choice.message && typeof choice.message.content === "string"
        ? choice.message.content.trim()
        : "";
      if (!content) throw new Error("The live endpoint returned an empty response.");
      return content;
    } catch (err) {
      if (err && err.name === "AbortError") throw new Error("The live endpoint timed out.");
      throw err;
    } finally {
      clearTimeout(timeout);
    }
  }

  async function testConnection(settings) {
    const s = settings || {};
    const reply = await chat({
      endpoint: s.liveEndpoint,
      key: s.liveKey || "",
      model: s.liveModel,
      messages: [
        { role: "system", content: "You are a connection test. Reply with exactly: MORGAN ONLINE." },
        { role: "user", content: "Connection test." }
      ],
      temperature: 0,
      maxTokens: 20,
      timeout: 20000
    });
    return reply;
  }

  window.CaseMind = window.CaseMind || {};
  window.CaseMind.API = {
    getBooks,
    chat,
    testConnection,
    FALLBACK_BOOKS
  };
})();
