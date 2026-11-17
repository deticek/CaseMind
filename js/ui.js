/* CaseMind — shared interface helpers */
(function () {
  "use strict";

  const ICON_PATHS = {
    dashboard: '<path d="M4 4h6v6H4zM14 4h6v10h-6zM4 14h6v6H4zM14 18h6v2h-6z"/>',
    folder: '<path d="M3 7h7l2 2h9v11H3z"/><path d="M3 7V5h6l2 2"/>',
    trophy: '<path d="M8 4h8v4a4 4 0 0 1-8 0V4Z"/><path d="M8 6H4v2a4 4 0 0 0 4 4M16 6h4v2a4 4 0 0 1-4 4M12 12v5M8 20h8M10 17h4"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
    clock: '<circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/>',
    pin: '<path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    chevron: '<path d="m7 10 5 5 5-5"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    x: '<path d="m6 6 12 12M18 6 6 18"/>',
    alert: '<path d="M12 3 2.5 20h19L12 3Z"/><path d="M12 9v5M12 17v.5"/>',
    lock: '<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v2"/>',
    unlock: '<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 7.5-2M12 14v2"/>',
    flask: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3"/><path d="M7 15h10"/>',
    chat: '<path d="M4 4h16v12H8l-4 4V4Z"/><path d="M8 9h8M8 12h5"/>',
    eye: '<path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/>',
    book: '<path d="M4 4h6a3 3 0 0 1 3 3v13a3 3 0 0 0-3-3H4V4ZM20 4h-4a3 3 0 0 0-3 3v13a3 3 0 0 1 3-3h4V4Z"/>',
    file: '<path d="M6 3h8l4 4v14H6V3Z"/><path d="M14 3v5h4M9 12h6M9 16h6"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2-5.5-2.9-5.5 2.9 1-6.2L3 9.6l6.2-.9L12 3Z"/>',
    crown: '<path d="m3 7 4 4 5-7 5 7 4-4-2 12H5L3 7Z"/><path d="M5 19h14"/>',
    puzzle: '<path d="M9 3h6v3a2 2 0 1 0 2 2h3v6h-3a2 2 0 1 0-2 2v3H9v-3a2 2 0 1 0-2-2H4V9h3a2 2 0 1 0 2-2V3Z"/>',
    shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-5"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/><circle cx="12" cy="12" r="3"/>',
    send: '<path d="m3 11 18-8-8 18-2-8-8-2Z"/><path d="m11 13 5-5"/>',
    trash: '<path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1v.1H9v-.1a1.7 1.7 0 0 0-1.4-1.7 1.7 1.7 0 0 0-1.9.3l-.1.1-2.8-2.8.1-.1A1.7 1.7 0 0 0 3.2 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H1.4v-4h.1A1.7 1.7 0 0 0 3.2 8.6a1.7 1.7 0 0 0-.3-1.9l-.1-.1 2.8-2.8.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 8.6 3a1.7 1.7 0 0 0 .4-1.1V1.8h4v.1A1.7 1.7 0 0 0 15 3.6a1.7 1.7 0 0 0 1.9-.3l.1-.1 2.8 2.8-.1.1a1.7 1.7 0 0 0-.3 1.9c.2.4.5.7 1 .9.3.2.7.3 1.1.3h.1v4h-.1A1.7 1.7 0 0 0 19.4 15Z"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.8 3.1-6.5 7-6.5s7 2.7 7 6.5"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14c2.3.5 4 2.6 4 5.5"/>',
    scale: '<path d="M12 3v18M6 21h12M4 7h16M4 7l-2 5a3 3 0 0 0 6 0L6 7M18 7l-2 5a3 3 0 0 0 6 0l-2-5"/>',
    gavel: '<path d="m4 20 9-9M14 4l6 6M13 11l4-4M11 7l6 6M3 21h8"/>',
    download: '<path d="M12 3v12M7 10l5 5 5-5M4 21h16"/>',
    refresh: '<path d="M20 11a8 8 0 1 0-2.3 6.7M20 4v7h-7"/>',
    play: '<path d="m8 5 11 7-11 7V5Z"/>',
    edit: '<path d="M4 20h4l11-11-4-4L4 16v4ZM13 5l4 4"/>',
    clip: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M9 10h6M9 14h6M9 18h3"/>',
    fingerprint: '<path d="M12 4a8 8 0 0 1 8 8M4 12a8 8 0 0 1 4-6.9M7 12a5 5 0 0 1 10 0c0 4-1 6-2 8M10 12a2 2 0 0 1 4 0c0 3-.5 5-2 7M5 16c1 2 2 3 3 4"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
    bolt: '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v6H4V6h6"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7v.5"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>'
  };

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeAttr(value) {
    return escapeHtml(value).replace(/`/g, "&#96;");
  }

  function icon(name, className) {
    const paths = ICON_PATHS[name] || ICON_PATHS.info;
    return `<svg viewBox="0 0 24 24" class="${escapeAttr(className || "")}" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
  }

  function initials(name) {
    const parts = String(name || "?").replace(/[.,]/g, "").split(/\s+/)
      .filter((w) => w && !/^(dr|mr|mrs|ms|prof|sir|lady|lord)$/i.test(w));
    if (!parts.length) return "?";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  function pct(part, total) {
    if (!total) return 0;
    return Math.max(0, Math.min(100, Math.round((part / total) * 100)));
  }

  function debounce(fn, wait) {
    let timer = null;
    return function debounced() {
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(null, args), wait);
    };
  }

  function formatDateTime(value) {
    if (!value) return "—";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "—";
    return date.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  }

  /* ---------- toasts ---------- */

  let toastCount = 0;

  function toast(message, options) {
    const opts = typeof options === "string" ? { type: options } : (options || {});
    const root = document.getElementById("toast-root");
    if (!root) return;
    const type = opts.type || "success";
    const el = document.createElement("div");
    el.className = "toast" + (type === "success" ? "" : ` ${type}`);
    el.dataset.toastId = String(++toastCount);
    const iconName = type === "achievement" ? "trophy" : type === "error" ? "alert" : type === "info" ? "info" : "check";
    el.innerHTML = `${icon(iconName)}<div>${opts.title ? `<strong>${escapeHtml(opts.title)}</strong>` : ""}${escapeHtml(message)}</div>`;
    root.appendChild(el);
    const timeout = opts.duration || (type === "achievement" ? 5600 : 3600);
    setTimeout(() => {
      el.classList.add("out");
      setTimeout(() => el.remove(), 320);
    }, timeout);
  }

  /* ---------- modal ---------- */

  let modalState = null;

  function closeModal() {
    if (!modalState) return;
    const { backdrop, previousFocus, onClose } = modalState;
    modalState = null;
    backdrop.remove();
    document.body.style.overflow = "";
    if (previousFocus && typeof previousFocus.focus === "function") {
      try { previousFocus.focus(); } catch (err) { /* ignore */ }
    }
    if (typeof onClose === "function") onClose();
  }

  function openModal(options) {
    const opts = options || {};
    const root = document.getElementById("modal-root");
    if (!root) return null;
    closeModal();

    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop";
    const sizeClass = opts.size ? ` ${opts.size}` : "";
    const header = opts.title
      ? `<header class="modal-header">
          <div>
            ${opts.kicker ? `<div class="modal-kicker">${escapeHtml(opts.kicker)}</div>` : ""}
            <h2>${escapeHtml(opts.title)}</h2>
            ${opts.subtitle ? `<p>${escapeHtml(opts.subtitle)}</p>` : ""}
          </div>
          <button class="icon-btn small modal-close" type="button" data-ui-close aria-label="Close dialog">${icon("close")}</button>
        </header>`
      : "";
    const steps = opts.steps ? `<div class="accusation-steps">${opts.steps}</div>` : "";
    const footer = opts.footer ? `<div class="modal-footer">${opts.footer}</div>` : "";

    backdrop.innerHTML = `<div class="modal${sizeClass}" role="dialog" aria-modal="true" aria-label="${escapeAttr(opts.title || "Dialog")}">
      ${header}
      ${steps}
      <div class="modal-body${opts.flush ? " flush" : ""}">${opts.body || ""}</div>
      ${footer}
    </div>`;

    root.appendChild(backdrop);
    document.body.style.overflow = "hidden";
    modalState = {
      backdrop,
      previousFocus: document.activeElement,
      onClose: opts.onClose || null
    };

    backdrop.addEventListener("click", (event) => {
      if (event.target === backdrop && opts.dismissible !== false) closeModal();
    });
    backdrop.querySelectorAll("[data-ui-close]").forEach((btn) => {
      btn.addEventListener("click", closeModal);
    });

    const modalEl = backdrop.querySelector(".modal");
    if (typeof opts.onMount === "function") opts.onMount(modalEl, closeModal);

    const focusTarget = modalEl.querySelector("[autofocus], .modal-close, button, input, select, textarea");
    if (focusTarget) {
      try { focusTarget.focus({ preventScroll: true }); } catch (err) { /* ignore */ }
    }
    return { element: modalEl, backdrop, close: closeModal };
  }

  function confirmDialog(options) {
    const opts = options || {};
    return new Promise((resolve) => {
      let settled = false;
      const finish = (value) => {
        if (settled) return;
        settled = true;
        resolve(value);
      };
      openModal({
        size: "narrow",
        kicker: opts.kicker || "CONFIRM ACTION",
        title: opts.title || "Are you sure?",
        body: `<p>${escapeHtml(opts.message || "")}</p>`,
        footer: `<button class="btn btn-ghost btn-sm" type="button" data-confirm-no>${escapeHtml(opts.cancelLabel || "Cancel")}</button>
                 <button class="btn ${opts.danger ? "btn-danger" : "btn-primary"} btn-sm" type="button" data-confirm-yes>${escapeHtml(opts.confirmLabel || "Confirm")}</button>`,
        onMount: (modal, close) => {
          modal.querySelector("[data-confirm-yes]").addEventListener("click", () => { finish(true); close(); });
          modal.querySelector("[data-confirm-no]").addEventListener("click", () => { finish(false); close(); });
        },
        onClose: () => finish(false)
      });
    });
  }

  /* ---------- misc ---------- */

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function download(filename, content, type) {
    const blob = new Blob([content], { type: type || "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  window.CaseMind = window.CaseMind || {};
  window.CaseMind.UI = {
    icon,
    escapeHtml,
    escapeAttr,
    initials,
    pct,
    debounce,
    formatDateTime,
    toast,
    openModal,
    closeModal,
    confirm: confirmDialog,
    setText,
    download
  };
})();
