/* CaseMind - offline case archive fallback. Generated from the JSON case files. */
window.CASEMIND_FALLBACK = {
  "generatedAt": "2026-11-17",
  "cases": {
    "midnight-museum.json": {
      "id": "midnight-museum",
      "slug": "midnight-at-the-museum",
      "title": "Midnight at the Museum",
      "subtitle": "A priceless astrolabe vanished from a locked gallery. The cameras saw nothing.",
      "difficulty": "easy",
      "estimatedMinutes": 6,
      "location": "Ashford Museum of Antiquities, London",
      "date": "Saturday, 14 March 2026",
      "timeWindow": "23:40 — 00:40",
      "description": "The Meridian Astrolabe — a twelfth-century navigation instrument valued at £2.4 million — is missing from its display case. There is no broken glass, no forced door, and the night guard swears nobody entered the gallery. The museum closes for a full audit on Monday. You have one night to find the truth.",
      "briefing": "At 00:40 the night guard discovered the Meridian Astrolabe was no longer on its velvet mount. The gallery was locked, the alarm was armed, and the display case showed no sign of force. Three staff members were in the building during the closing shift, and a prominent collector had visited earlier that evening. Follow the access logs, test the alibis, and recover the object before the museum's insurers arrive.",
      "cover": {
        "accent": "#C9A36A",
        "secondary": "#7A5D32",
        "motif": "museum"
      },
      "scene": {
        "summary": "The Meridian Gallery is a long, hushed room of glass cases and sandstone columns. The empty display case stands at its far end beneath a single warm spotlight. The velvet mount is undisturbed, but a faint rectangular impression remains where the astrolabe rested.",
        "details": [
          "The display case is intact. Its electronic lock was opened with a valid curator override, not forced.",
          "A service elevator at the rear of the gallery connects to the loading bay. Its gate was left ajar.",
          "The main security camera covering the gallery went offline at 23:58. The fault was logged as 'maintenance'.",
          "A narrow trail of graphite dust leads from the case toward the service elevator.",
          "The visitor ledger shows only one external appointment yesterday: collector Theo Marsh, 22:00–22:35."
        ],
        "initialObservations": [
          "No forced entry",
          "Camera blackout at 23:58",
          "Service elevator left ajar"
        ]
      },
      "victim": {
        "name": "The Meridian Astrolabe",
        "label": "Stolen artefact",
        "age": "c. 1180",
        "occupation": "Celestial navigation instrument",
        "status": "Missing, presumed stolen",
        "background": "A brass astrolabe attributed to the Andalusian craftsman Ibn al-Saffar. The museum bought it at auction eight months ago for £2.4 million. A provenance audit was scheduled for Monday morning.",
        "forensic": "The velvet display mount retains a faint weight impression. The case seal was opened electronically at 00:12 using curator credentials. No fingerprints were recovered from the lock panel."
      },
      "suspects": [
        {
          "id": "elena-voss",
          "name": "Dr. Elena Voss",
          "role": "Curator of Antiquities",
          "age": 47,
          "occupation": "Museum curator",
          "summary": "Brilliant, exacting, and fiercely protective of her department. Voss negotiated the astrolabe's purchase and has been under pressure over its disputed provenance.",
          "background": "Fifteen years at the Ashford Museum. She controls the gallery override codes and signed off on the astrolabe acquisition. Colleagues describe her as composed, but the upcoming audit has visibly rattled her.",
          "motive": "The Monday audit could expose irregularities in the astrolabe's ownership history and her role in the purchase.",
          "alibi": "Left the museum at 23:10, took a taxi home, and was asleep before midnight.",
          "relationship": "Direct supervisor of Mina Cho and the museum's liaison with collectors such as Theo Marsh.",
          "pressure": "Museum director wants answers before the insurers arrive.",
          "questions": [
            {
              "id": "q1",
              "text": "Walk me through your evening, Doctor.",
              "answer": "I left at ten past eleven. The guard saw me out. I took a cab straight home and was in bed before a quarter to twelve. I have not set foot in that gallery since."
            },
            {
              "id": "q2",
              "text": "Can anyone confirm you were home at midnight?",
              "answer": "My neighbour may have seen my kitchen light, but I live alone. I don't keep a diary of my sleeping habits, Detective. I was exhausted."
            },
            {
              "id": "q3",
              "text": "Your credentials disabled the gallery camera at 00:04 and opened the display case at 00:12.",
              "answer": "That's impossible. I gave Mina my secondary key card weeks ago because she kept complaining about the conservation-room locks. Anyone could have copied it. I never shared my PIN."
            },
            {
              "id": "q4",
              "text": "A red silk thread was caught in the service elevator. Do you own a red scarf?",
              "answer": "I don't wear red. Too theatrical for a museum. You should be asking who had access to the service corridor, not inspecting my wardrobe."
            }
          ]
        },
        {
          "id": "elias-ward",
          "name": "Elias Ward",
          "role": "Night Security Guard",
          "age": 34,
          "occupation": "Security officer",
          "summary": "A former warehouse guard with a spotless record and a stack of unpaid bills. He was at the front desk when the case was opened.",
          "background": "Ward has worked nights at the museum for two years. He knows every camera blind spot. He was passed over for a supervisory role last month and has been unusually quiet since.",
          "motive": "Financial pressure and resentment over a denied promotion.",
          "alibi": "At the front security desk from 23:30 to 00:40. The guard log and a desk camera support this.",
          "relationship": "Reported to the museum operations manager, not to Voss.",
          "pressure": "His gambling debts are known to several colleagues.",
          "questions": [
            {
              "id": "q1",
              "text": "Where were you when the case was opened?",
              "answer": "At the front desk. I do a gallery round at half past eleven, then I stay put unless an alarm sounds. I logged the empty case at twenty to one."
            },
            {
              "id": "q2",
              "text": "You know every camera blind spot. Was this an inside job?",
              "answer": "Could be. The service lift camera has been temperamental for months. I filed two maintenance requests. If someone knew the building, they could move through the east corridor without being seen."
            },
            {
              "id": "q3",
              "text": "Did Dr. Voss ask you to cover for her?",
              "answer": "No. She left at ten past eleven like always. Didn't seem upset. She did ask me to log the camera outage as routine if it happened again. Said the audit was making everyone jumpy."
            },
            {
              "id": "q4",
              "text": "Did you enter the Meridian Gallery after midnight?",
              "answer": "Only when I found the empty case. Check the desk camera. I didn't leave that chair until I saw the display light flicker on the monitor."
            }
          ]
        },
        {
          "id": "mina-cho",
          "name": "Mina Cho",
          "role": "Conservator",
          "age": 29,
          "occupation": "Artefact conservator",
          "summary": "A gifted conservator who has publicly questioned the astrolabe's attribution. She was working late in the conservation lab.",
          "background": "Cho joined the museum three years ago. She believes the astrolabe may be a later reproduction and clashed with Voss after her report was buried. She has access to the display case tools.",
          "motive": "Professional frustration. If the astrolabe were discredited, her report would be vindicated.",
          "alibi": "In the conservation lab from 23:00 until 00:30, working on a bronze bowl. A time-lapse camera shows her at the bench.",
          "relationship": "Reports to Voss; their disagreement over the astrolabe is well known.",
          "pressure": "Her research budget has been cut and her report removed from the audit file.",
          "questions": [
            {
              "id": "q1",
              "text": "Why were you still here after midnight?",
              "answer": "The bronze bowl needed a humidity cycle. I signed in for overtime. I was at my bench until half past twelve, then I went home."
            },
            {
              "id": "q2",
              "text": "Did Dr. Voss give you her secondary key card?",
              "answer": "She gave me access to the conservation room, not the gallery. I have my own card. And before you ask, no, I did not copy hers."
            },
            {
              "id": "q3",
              "text": "You believe the astrolabe is a forgery. Did that make you angry enough to steal it?",
              "answer": "I wanted the truth on the record, not the object in my bag. I told Voss I would take the report to the board. She said I was embarrassing the museum. That was our argument."
            },
            {
              "id": "q4",
              "text": "Did you see or hear anything unusual?",
              "answer": "The service lift chimed around quarter past midnight. It is loud through the wall. Then at about half past, I heard a taxi horn from the loading bay."
            }
          ]
        },
        {
          "id": "theo-marsh",
          "name": "Theo Marsh",
          "role": "Private Collector",
          "age": 58,
          "occupation": "Antiquities collector",
          "summary": "Wealthy, charming, and used to getting what he wants. He viewed the astrolabe hours before it disappeared and offered to buy it privately.",
          "background": "Marsh has courted the museum for years, donating selectively and buying aggressively. He was seen leaving through the public entrance at 22:35. His collection includes several objects with murky provenance.",
          "motive": "Possession of the astrolabe and resentment at being refused a private sale.",
          "alibi": "Left the museum at 22:35 and attended a dinner at the Wren Club until 00:30. Several witnesses.",
          "relationship": "Negotiated with Voss over a private sale.",
          "pressure": "His club dinner is easily confirmed, making him a weak physical suspect.",
          "questions": [
            {
              "id": "q1",
              "text": "Why did you visit the museum last night?",
              "answer": "I wanted to see the astrolabe one last time. Voss refused my offer. She was almost insulting about it. Still, I left at half past ten — your guard can confirm."
            },
            {
              "id": "q2",
              "text": "Where were you at midnight?",
              "answer": "At the Wren Club, eating a very dull pheasant. Half the club can confirm it. You can call them; I'll wait."
            },
            {
              "id": "q3",
              "text": "Would you pay for stolen antiquities?",
              "answer": "I pay for provenance, Detective. Though between us, the astrolabe's provenance was never as clean as Voss claimed. She knew it. I suspect the audit was going to make her very uncomfortable."
            },
            {
              "id": "q4",
              "text": "What did you notice during your visit?",
              "answer": "Voss was nervous. Kept checking her phone. And there was a red scarf on the back of her office chair. She never used to wear colour."
            }
          ]
        }
      ],
      "witnesses": [
        {
          "id": "priya-nair",
          "name": "Priya Nair",
          "role": "Evening cleaner",
          "statement": "I was emptying bins in the east corridor a little after midnight when a woman came out of the service lift. She wore a long dark coat and a red scarf. She carried a flat black case and walked quickly toward the loading bay. I assumed it was Dr. Voss — she sometimes works late.",
          "reliability": "High",
          "summary": "Saw a woman in a red scarf with a flat case near the service lift at 00:15.",
          "notes": "Nair has no connection to any suspect and was interviewed before the theft was announced."
        },
        {
          "id": "samuel-okafor",
          "name": "Samuel Okafor",
          "role": "Taxi driver",
          "statement": "I picked up a fare at the museum service entrance at 00:27. The booking was under E. Voss. She was wearing a dark coat and a red scarf. She asked me to take her to Chiswick and put a flat black case in the boot herself. She tipped generously and told me to keep the route quiet.",
          "reliability": "High",
          "summary": "Collected Dr. Voss at 00:27 with a flat black case.",
          "notes": "Trip record and payment receipt were recovered from the taxi company."
        },
        {
          "id": "thomas-reed",
          "name": "Thomas Reed",
          "role": "Museum director",
          "statement": "The provenance audit was my decision. Elena insisted the astrolabe was authentic, but the paperwork had holes. I told her we would disclose everything Monday. She said she would fix it before then. I assumed she meant the documentation.",
          "reliability": "Medium",
          "summary": "Voss faced a Monday provenance audit and promised to 'fix it'.",
          "notes": "Reed arrived after the theft and has no access to the gallery override system."
        }
      ],
      "evidence": [
        {
          "id": "e-case-lock",
          "name": "Display Case Access Log",
          "category": "Digital",
          "summary": "The case was opened at 00:12 with Voss's curator override, using both key card and PIN.",
          "description": "The electronic lock stores credential ID, timestamp, and override method. It records a valid curator-level override at 00:12:44. The PIN entered was Voss's personal six-digit code, not a borrowed card alone.",
          "location": "Meridian Gallery, display case console",
          "analysis": "The case was not forced. Whoever opened it used a credential that required Voss's card and her private PIN.",
          "tags": [
            "access",
            "timeline",
            "override"
          ],
          "relatedSuspects": [
            "elena-voss",
            "mina-cho"
          ],
          "foundAt": "00:40"
        },
        {
          "id": "e-fiber",
          "name": "Red Silk Fibre",
          "category": "Forensic",
          "summary": "A strand of oxblood-red silk caught in the service elevator gate.",
          "description": "Forensics recovered a 4 cm strand of fine silk, dyed oxblood red, from the inner edge of the service elevator gate. The fibre is recent and matches the type used in high-end scarves. A second strand was found on a coat hook in Voss's office.",
          "location": "Service elevator, east corridor",
          "analysis": "The fibre links the service route to a red scarf. The cleaner's description and the taxi driver's statement independently place a red scarf on the person leaving with the case.",
          "tags": [
            "physical",
            "transfer",
            "service-route"
          ],
          "relatedSuspects": [
            "elena-voss"
          ],
          "foundAt": "01:05"
        },
        {
          "id": "e-taxi",
          "name": "Taxi Booking Record",
          "category": "Documentary",
          "summary": "A taxi collected 'E. Voss' from the service entrance at 00:27, not 23:10.",
          "description": "The taxi company's dispatch record shows a booking made at 23:56 from the museum's landline under the name E. Voss. The driver picked up a passenger at the service entrance at 00:27. A card payment of £34.80 is time-stamped 00:26:12.",
          "location": "Taxi company dispatch system",
          "analysis": "This directly contradicts Voss's claim that she left at 23:10 and was home before midnight. She was still at the museum when the case was opened.",
          "tags": [
            "timeline",
            "alibi",
            "documentary"
          ],
          "relatedSuspects": [
            "elena-voss"
          ],
          "foundAt": "08:15"
        },
        {
          "id": "e-camera",
          "name": "Camera Maintenance Login",
          "category": "Digital",
          "summary": "The gallery cameras were disabled at 00:04 using Voss's admin account from the gallery control terminal.",
          "description": "An authentication log shows Voss's museum account logging into the camera maintenance portal at 00:04:18. The gallery feed was set to 'maintenance blackout' for 26 minutes. An attempt to delete the log failed.",
          "location": "Museum security server",
          "analysis": "The blackout was deliberate and timed eight minutes before the case was opened. The login came from the gallery's own terminal, not Voss's office.",
          "tags": [
            "digital",
            "access",
            "cover-up"
          ],
          "relatedSuspects": [
            "elena-voss",
            "elias-ward"
          ],
          "foundAt": "08:40"
        },
        {
          "id": "e-email",
          "name": "Unsigned Insurance Draft",
          "category": "Digital",
          "summary": "A draft insurance claim for £2.4 million was created on Voss's account at 22:50.",
          "description": "The museum's mail server contains an unsent draft to Meridian Underwriters headed 'Meridian loss — preliminary notification'. It cites theft by persons unknown and requests urgent settlement. The draft was created at 22:50, almost two hours before the theft was discovered.",
          "location": "Museum mail server, Voss account",
          "analysis": "This is strong evidence of premeditation. It also supplies a financial motive: the £2.4 million payout would cover the acquisition loss and complicate the provenance audit.",
          "tags": [
            "motive",
            "digital",
            "premeditation"
          ],
          "relatedSuspects": [
            "elena-voss"
          ],
          "foundAt": "09:10"
        },
        {
          "id": "e-guard-log",
          "name": "Guard's Desk Log",
          "category": "Documentary",
          "summary": "Elias Ward remained at the front desk from 23:30 to 00:40, according to log and camera.",
          "description": "The paper log records Ward's gallery round at 23:30 and his discovery of the empty case at 00:40. The desk camera shows him seated or standing at the desk throughout the intervening period. The front desk is 90 metres from the service lift.",
          "location": "Security office",
          "analysis": "Ward had opportunity to know the building, but not to open the case or use the service lift unseen. His alibi is solid.",
          "tags": [
            "alibi",
            "timeline",
            "security"
          ],
          "relatedSuspects": [
            "elias-ward"
          ],
          "foundAt": "01:20"
        },
        {
          "id": "e-replica",
          "name": "Plaster Cast Fragment",
          "category": "Physical",
          "summary": "A fresh plaster cast of the astrolabe's base was found in Voss's office bin.",
          "description": "The cast matches the astrolabe's base dimensions and the display mount's impression. Traces of the display seal adhesive are embedded in the plaster. The cast was made within the last three days.",
          "location": "Voss's office waste bin",
          "analysis": "Someone made a weighted study of the astrolabe's footprint, consistent with preparing a substitute or testing how the empty mount would look.",
          "tags": [
            "physical",
            "premeditation",
            "staging"
          ],
          "relatedSuspects": [
            "elena-voss"
          ],
          "foundAt": "09:35"
        }
      ],
      "timeline": [
        {
          "id": "t1",
          "time": "22:35",
          "title": "Theo Marsh leaves the museum",
          "detail": "Marsh exits through the public entrance after a tense private viewing.",
          "source": "Front desk log",
          "verified": true,
          "disputed": false,
          "actors": [
            "theo-marsh"
          ]
        },
        {
          "id": "t2",
          "time": "22:50",
          "title": "Insurance draft created",
          "detail": "An unsent £2.4 million claim is drafted on Voss's museum account.",
          "source": "Mail server log",
          "verified": true,
          "disputed": false,
          "actors": [
            "elena-voss"
          ]
        },
        {
          "id": "t3",
          "time": "23:10",
          "title": "Voss says she leaves",
          "detail": "Voss claims she took a taxi home and was asleep before midnight.",
          "source": "Suspect statement",
          "verified": false,
          "disputed": true,
          "actors": [
            "elena-voss"
          ]
        },
        {
          "id": "t4",
          "time": "23:30",
          "title": "Guard's gallery round",
          "detail": "Elias Ward confirms the astrolabe is still on display.",
          "source": "Guard's desk log",
          "verified": true,
          "disputed": false,
          "actors": [
            "elias-ward"
          ]
        },
        {
          "id": "t5",
          "time": "23:58",
          "title": "Cameras go dark",
          "detail": "The Meridian Gallery feed is disabled as a 'maintenance blackout'.",
          "source": "Security server",
          "verified": true,
          "disputed": false,
          "actors": [
            "elena-voss"
          ]
        },
        {
          "id": "t6",
          "time": "00:12",
          "title": "Display case opened",
          "detail": "A valid curator override with Voss's PIN opens the case.",
          "source": "Case lock log",
          "verified": true,
          "disputed": false,
          "actors": [
            "elena-voss"
          ]
        },
        {
          "id": "t7",
          "time": "00:15",
          "title": "Woman with red scarf",
          "detail": "Cleaner sees a woman carrying a flat black case near the service lift.",
          "source": "Witness: Priya Nair",
          "verified": true,
          "disputed": false,
          "actors": [
            "elena-voss"
          ]
        },
        {
          "id": "t8",
          "time": "00:27",
          "title": "Taxi pickup",
          "detail": "A taxi collects 'E. Voss' from the service entrance with a flat black case.",
          "source": "Taxi dispatch and driver",
          "verified": true,
          "disputed": false,
          "actors": [
            "elena-voss"
          ]
        },
        {
          "id": "t9",
          "time": "00:40",
          "title": "Empty case discovered",
          "detail": "Ward finds the astrolabe gone and raises the alarm.",
          "source": "Guard's desk log",
          "verified": true,
          "disputed": false,
          "actors": [
            "elias-ward"
          ]
        }
      ],
      "contradictions": [
        {
          "id": "c-voss-taxi",
          "title": "Home before midnight?",
          "detail": "Voss says she left at 23:10 and was home by 23:45. The taxi dispatch record shows her pickup at 00:27 — 77 minutes later, from the service entrance, carrying a flat case.",
          "suspectId": "elena-voss",
          "evidenceIds": [
            "e-taxi"
          ],
          "questions": [
            "elena-voss:q1"
          ],
          "hint": "Compare Voss's account of leaving with the taxi company's exact pickup time."
        },
        {
          "id": "c-voss-access",
          "title": "The private PIN",
          "detail": "Voss claims her key card was borrowed and that she never shared her PIN. The case log shows a curator override using both her card and her personal PIN, eight minutes after her admin account disabled the gallery cameras.",
          "suspectId": "elena-voss",
          "evidenceIds": [
            "e-case-lock",
            "e-camera"
          ],
          "questions": [
            "elena-voss:q3"
          ],
          "hint": "A key card can be copied. A six-digit PIN is harder to explain."
        },
        {
          "id": "c-voss-scarf",
          "title": "The red scarf",
          "detail": "Voss says she does not wear red. A cleaner and a taxi driver both describe her in a red scarf, and a matching silk fibre was caught in the service elevator. Theo Marsh also saw the scarf in her office.",
          "suspectId": "elena-voss",
          "evidenceIds": [
            "e-fiber"
          ],
          "questions": [
            "elena-voss:q4"
          ],
          "hint": "The fibre needs a source. Compare the cleaner's description and Marsh's observation."
        }
      ],
      "motiveOptions": [
        {
          "id": "insurance",
          "text": "Insurance fraud — conceal the failed provenance audit by claiming the astrolabe was stolen."
        },
        {
          "id": "jealousy",
          "text": "Professional jealousy — frame Mina Cho after their public disagreement."
        },
        {
          "id": "collector",
          "text": "A private sale to Theo Marsh for a sum far above the museum's valuation."
        },
        {
          "id": "debt",
          "text": "Gambling debts — sell the astrolabe through a private dealer."
        }
      ],
      "methodOptions": [
        {
          "id": "override",
          "text": "Used curator credentials to blind the cameras and open the case, then left through the service lift to a waiting taxi."
        },
        {
          "id": "forced",
          "text": "Forced the display case with a conservation tool and walked out through the public entrance."
        },
        {
          "id": "guard",
          "text": "Persuaded the night guard to unlock the case and cover the camera during his rounds."
        },
        {
          "id": "skylight",
          "text": "Entered through the skylight, lowered the astrolabe on a rope, and left before the cameras reset."
        }
      ],
      "hints": [
        "Start with the access logs. The display case was opened without force, so the question is whose credential opened it.",
        "A physical trace was caught in the service elevator. Compare it with what witnesses saw on the person using that route.",
        "Check the timing of the taxi. Voss's statement about leaving at 23:10 does not survive the dispatch record."
      ],
      "solution": {
        "culpritId": "elena-voss",
        "motiveId": "insurance",
        "methodId": "override",
        "evidenceIds": [
          "e-case-lock",
          "e-fiber",
          "e-taxi"
        ],
        "headline": "The curator stole her own exhibit to bury a provenance scandal.",
        "summary": "Dr. Elena Voss staged the theft of the Meridian Astrolabe to collect £2.4 million in insurance and deflect the Monday provenance audit. She used her curator override to blind the cameras and open the case, then left through the service lift with the astrolabe in a flat black case.",
        "explanation": [
          "Voss's museum account disabled the gallery cameras at 00:04. Eight minutes later, the display case was opened using a curator override that required both her key card and her personal PIN — not a borrowed card alone.",
          "Priya Nair saw a woman in a red scarf carrying a flat black case near the service lift at 00:15. A matching red silk fibre was caught in the lift gate, and Voss's claim that she does not wear red collapses against both the cleaner's and the taxi driver's statements.",
          "The decisive contradiction is the taxi record. Voss said she left at 23:10 and was home before midnight. The dispatch record shows a pickup under her name at 00:27 from the service entrance, with a flat case placed in the boot.",
          "The unsent insurance draft at 22:50 and the fresh plaster cast in her bin show preparation. The theft was not opportunistic: it was a staged loss built to survive the audit."
        ],
        "timelineReconstruction": [
          {
            "time": "22:50",
            "event": "Voss drafts the insurance claim, preparing to report a theft that has not happened."
          },
          {
            "time": "00:04",
            "event": "Voss disables the gallery cameras from the gallery terminal."
          },
          {
            "time": "00:12",
            "event": "She opens the display case with her curator override and removes the astrolabe."
          },
          {
            "time": "00:27",
            "event": "She leaves by the service lift and enters a waiting taxi with the astrolabe."
          }
        ],
        "redHerring": "Elias Ward had debts and knew the camera blind spots, but the desk camera places him at the front desk throughout the theft. Mina Cho had a professional grievance, but her conservation-lab time-lapse confirms her alibi. Theo Marsh's dinner alibi is equally solid."
      }
    },
    "last-passenger.json": {
      "id": "last-passenger",
      "slug": "the-last-passenger",
      "title": "The Last Passenger",
      "subtitle": "At 01:05, compartment 9 was empty. The train had not stopped at a station all night.",
      "difficulty": "easy",
      "estimatedMinutes": 6,
      "location": "Aurora Nightliner, Calden — Vossberg",
      "date": "Sunday, 15 March 2026",
      "timeWindow": "23:40 — 01:15",
      "description": "Investigative journalist Lila Hart boarded the overnight train with a notebook and a warning. Somewhere between Calden and Vossberg, she vanished. Her coat, phone and recorder were still in compartment 9. The train made no scheduled stops. Someone on board knows how she left — and why.",
      "briefing": "Lila Hart was travelling to Vossberg to meet a source. At 01:05 another passenger found her compartment empty and her belongings untouched. The train was searched from engine to mail van with no sign of her. The conductor reports a quiet journey. The event recorder tells a different story.",
      "cover": {
        "accent": "#6C8EA4",
        "secondary": "#314C5C",
        "motif": "train"
      },
      "scene": {
        "summary": "Compartment 9 is immaculate: a folded blanket, a coat on its hook, a phone charging on the table. A teacup sits in the cup holder, half empty. The corridor carpet bears a fresh drag mark leading toward the rear service door.",
        "details": [
          "Lila's phone is unlocked and still logged into her cloud notes. Her bag is present but her notebook has been torn open.",
          "A teacup on the table contains traces of a sedative. The cup was delivered to the compartment around 23:50.",
          "The corridor camera was blocked between 00:35 and 00:52 by a cleaning trolley.",
          "A drag mark runs from compartment 9 to the rear service vestibule.",
          "The mail van's lock was opened with a conductor's master key at 00:42."
        ],
        "initialObservations": [
          "No struggle inside the compartment",
          "Sedative in the tea",
          "Mail van unlocked during an unscheduled stop"
        ]
      },
      "victim": {
        "name": "Lila Hart",
        "label": "Missing person",
        "age": 31,
        "occupation": "Investigative journalist",
        "status": "Missing — presumed abducted",
        "background": "Hart was investigating irregularities in regional rail contracts. She had told her editor she had a source on board. She was last seen accepting a pot of tea shortly before midnight.",
        "forensic": "A bruise pattern on the compartment door frame is consistent with a shoulder impact. Fibres from her green coat were found on the mail van ramp. The teacup tested positive for midazolam. No blood was recovered."
      },
      "suspects": [
        {
          "id": "rowan-pike",
          "name": "Rowan Pike",
          "role": "Conductor",
          "age": 38,
          "occupation": "Senior train conductor",
          "summary": "A twelve-year railway veteran with a master key, a calm manner, and an explanation for everything. He was on duty throughout the night.",
          "background": "Pike manages the sleeper car and the mail van. He has access to every service door and keeps the master key on a chain. Lila's notebook contains three pages on rail ticket anomalies, and one name appears repeatedly: Pike.",
          "motive": "Lila had evidence that Pike was skimming ticket revenue and facilitating freight smuggling. She planned to publish within days.",
          "alibi": "In the crew car from 00:10 to 01:00, completing ticket reconciliation.",
          "relationship": "Delivered the tea tray to compartment 9 and held the only master key on board.",
          "pressure": "Rail inspectors are waiting in Vossberg.",
          "questions": [
            {
              "id": "q1",
              "text": "Where were you between midnight and one?",
              "answer": "In the crew car. Ticket reconciliation takes an hour when the scanner is slow. I signed off at one, then started the morning checks."
            },
            {
              "id": "q2",
              "text": "The train stopped for eight minutes at a signal. What did you do?",
              "answer": "Nothing. I announced a brief signal delay. These things happen. I stayed in the crew car and drank coffee. Eight minutes is not long enough to lose a passenger."
            },
            {
              "id": "q3",
              "text": "The mail van was opened with your master key at 00:42.",
              "answer": "The master key opens every service lock. I lend it to the sleeper attendant when we take on linen. Elise had it for most of the evening. Anyone could have used it."
            },
            {
              "id": "q4",
              "text": "Lila's notebook names you in a ticket-fraud investigation.",
              "answer": "She was confused. I've been accused before by passengers who don't understand the fare system. If she has proof, show me. A notebook is not evidence."
            }
          ]
        },
        {
          "id": "nadia-bell",
          "name": "Nadia Bell",
          "role": "Travel writer",
          "age": 34,
          "occupation": "Freelance journalist",
          "summary": "A polished travel writer with a sharp tongue. She and Lila argued loudly in the bar car shortly before Lila disappeared.",
          "background": "Bell and Hart had once been friends and collaborators. Their falling-out followed a disputed byline. Bell was travelling to the same conference in Vossberg.",
          "motive": "Professional rivalry and a long-running dispute over credit for a major story.",
          "alibi": "In compartment 8 from 23:55 onward. She says she heard a door and a muffled thud around 00:45.",
          "relationship": "Rival journalist and former friend of the victim.",
          "pressure": "The argument makes her an obvious suspect.",
          "questions": [
            {
              "id": "q1",
              "text": "Tell me about your argument with Lila.",
              "answer": "She accused me of stealing a source. I told her she was paranoid. We raised our voices; we did not attack each other. She left the bar at twenty to midnight."
            },
            {
              "id": "q2",
              "text": "What did you hear after midnight?",
              "answer": "A trolley rattled past, then a door. Around quarter to one I heard a thud from the corridor, like something heavy being dropped. I looked out and saw a man in a conductor's uniform near the rear door."
            },
            {
              "id": "q3",
              "text": "Did you see the conductor's face?",
              "answer": "Only his back, but it was Pike. I'd recognise that uniform and the way he walks. He was dragging a linen cart. I assumed he was working."
            },
            {
              "id": "q4",
              "text": "Did Lila tell you she was afraid?",
              "answer": "She said, 'If anything happens to me, the ledger is in my bag.' I thought it was melodrama. I wish I had taken it seriously."
            }
          ]
        },
        {
          "id": "viktor-hale",
          "name": "Viktor Hale",
          "role": "Passenger, compartment 11",
          "age": 46,
          "occupation": "Private investigator",
          "summary": "A broad-shouldered man travelling alone with a locked briefcase. He was evasive about why he was on the train.",
          "background": "Hale is a licensed investigator hired by Lila's editor to accompany her. He was meant to remain discreet. His briefcase contains audio equipment and a signed contract.",
          "motive": "None established. His history includes a dismissed assault charge from a previous case.",
          "alibi": "In the dining car until 00:20, then compartment 11. The waiter confirms the dining-car time.",
          "relationship": "Hired protection, though Lila did not tell the conductor.",
          "pressure": "His concealed role makes him look suspicious to investigators.",
          "questions": [
            {
              "id": "q1",
              "text": "Why are you on this train, Mr. Hale?",
              "answer": "I was asked to keep an eye on Ms. Hart by her editor. She didn't want the conductor knowing. I was supposed to be invisible. I failed at that."
            },
            {
              "id": "q2",
              "text": "Did you see Lila after midnight?",
              "answer": "No. I was in the dining car until twenty past midnight, then went to my compartment. I heard the train stop and the mail van door slide open, but I assumed it was routine."
            },
            {
              "id": "q3",
              "text": "Why is your briefcase locked?",
              "answer": "Because it contains a recorder and confidential client material. I'll open it for you, but it won't help find her. The last recording is from the bar argument, not from after midnight."
            },
            {
              "id": "q4",
              "text": "Who had reason to harm her?",
              "answer": "She was chasing a ticket-fraud story. The conductor was in her notes. She also said there was a second man, someone who handled freight at the stops. I never got a name."
            }
          ]
        },
        {
          "id": "elise-moreau",
          "name": "Elise Moreau",
          "role": "Sleeper attendant",
          "age": 27,
          "occupation": "Train attendant",
          "summary": "New to the route and visibly nervous during questioning. She prepared Lila's tea and handled the linen trolley.",
          "background": "Moreau joined the Aurora crew six weeks ago. Pike trained her and controls her shift assignments. She owes him money for rent, a fact she admits reluctantly.",
          "motive": "Financial reliance on Pike gives her a reason to protect him, but no clear reason to hurt Lila.",
          "alibi": "In the galley until 00:30, then in the crew car. Pike says she had the master key.",
          "relationship": "Trained and supervised by Pike; prepared the victim's tea.",
          "pressure": "She is afraid of losing her job and possibly being blamed.",
          "questions": [
            {
              "id": "q1",
              "text": "Who prepared Lila's tea?",
              "answer": "I made the pot. She asked for chamomile with honey. Pike carried it to her because I was handling a linen delivery from the postal clerk."
            },
            {
              "id": "q2",
              "text": "Did Pike have the master key at midnight?",
              "answer": "Yes. I returned it to him at eleven. He keeps it on a chain. I only had it briefly for the linen cart."
            },
            {
              "id": "q3",
              "text": "What did you hear during the signal stop?",
              "answer": "The mail van door. Then a cart being rolled. I thought it was the postal clerk unloading, but no clerk boarded at the signal. When the train started again, Pike came back looking pale."
            },
            {
              "id": "q4",
              "text": "Are you afraid of Rowan Pike?",
              "answer": "He's been good to me. He lent me money. But he keeps a ledger of favours. If he asks for something, you say yes. I didn't know what he was doing last night. I swear."
            }
          ]
        }
      ],
      "witnesses": [
        {
          "id": "marta-reyes",
          "name": "Marta Reyes",
          "role": "Dining-car waiter",
          "statement": "Ms. Hart ordered tea at 23:48. Mr. Pike was in the service corridor when I passed at 23:52. He told me the sleeper attendant would take the tray. I saw Pike carrying the tray himself a few minutes later. He looked annoyed that I noticed.",
          "reliability": "High",
          "summary": "Pike personally carried Lila's tea despite saying the attendant handled it.",
          "notes": "Reyes has worked the route for nine years and knows the crew rotation."
        },
        {
          "id": "oskar-lind",
          "name": "Oskar Lind",
          "role": "Vossberg station dispatcher",
          "statement": "A private courier van was waiting at the freight platform at 05:08. The driver signed for two mail containers using a conductor's authorisation code. One container was heavier than its manifest claimed and was marked 'priority medical samples'. I found it odd, but the paperwork was in order.",
          "reliability": "High",
          "summary": "A private courier collected a suspicious 'medical sample' container at Vossberg.",
          "notes": "The courier company's records later showed a fake pickup order."
        },
        {
          "id": "ines-kovac",
          "name": "Ines Kovac",
          "role": "Signal control operator",
          "statement": "The Aurora was held at signal B-14 from 00:43 to 00:51 due to a freight movement. It was a routine hold. The conductor acknowledged the delay by radio and said there was no emergency.",
          "reliability": "High",
          "summary": "The unscheduled stop lasted eight minutes, not the two minutes Pike reported.",
          "notes": "The radio exchange was recorded."
        }
      ],
      "evidence": [
        {
          "id": "e-teacup",
          "name": "Sedative in the Teacup",
          "category": "Forensic",
          "summary": "Lila's tea contained midazolam, a fast-acting sedative that would cause confusion and drowsiness.",
          "description": "The teacup from compartment 9 contained chamomile tea, honey, and a significant dose of midazolam. The drug is prescription-only. No empty vial was found. A second cup on Pike's tray had no sedative.",
          "location": "Compartment 9, table",
          "analysis": "Lila was almost certainly incapacitated before she left the compartment. Midazolam can cause compliant drowsiness within fifteen minutes.",
          "tags": [
            "forensic",
            "sedative",
            "tea"
          ],
          "relatedSuspects": [
            "rowan-pike",
            "elise-moreau"
          ],
          "foundAt": "01:25"
        },
        {
          "id": "e-keylog",
          "name": "Mail Van Lock Log",
          "category": "Digital",
          "summary": "The mail van was unlocked at 00:42 with Pike's conductor master key.",
          "description": "The electronic lock records key serial K-17 at 00:42:09, held open for three minutes, and relocking at 00:45:20. Key K-17 is assigned to Rowan Pike and remains on his person. Elise Moreau returned the spare key at 23:00.",
          "location": "Mail van, rear of train",
          "analysis": "The van was opened during the signal stop. Pike's key was used. The door log confirms a three-minute window in which something could be loaded.",
          "tags": [
            "access",
            "timeline",
            "mail-van"
          ],
          "relatedSuspects": [
            "rowan-pike"
          ],
          "foundAt": "02:10"
        },
        {
          "id": "e-button",
          "name": "Brass Uniform Button",
          "category": "Physical",
          "summary": "A brass conductor's button found in the mail van matches a missing button on Pike's jacket.",
          "description": "A brass button embossed with the Aurora Nightliner crest was recovered from the mail van ramp. Pike's uniform jacket is missing its third button. The thread residue matches the jacket exactly.",
          "location": "Mail van loading ramp",
          "analysis": "Pike physically entered the mail van during the critical window. The missing button undercuts his claim that he never left the crew car.",
          "tags": [
            "physical",
            "transfer",
            "mail-van"
          ],
          "relatedSuspects": [
            "rowan-pike"
          ],
          "foundAt": "02:25"
        },
        {
          "id": "e-notebook",
          "name": "Lila's Torn Notebook Page",
          "category": "Documentary",
          "summary": "A page on rail ticket skimming names Pike and describes a 'freight side business'.",
          "description": "The surviving pages of Lila's notebook outline £18,400 in unaccounted ticket revenue over three months. A margin note reads: 'Pike — mail van ledger — 12 Mar — ask about the 00:40 stop.' The page after it was torn out.",
          "location": "Compartment 9, victim's bag",
          "analysis": "This establishes Lila's motive to confront Pike and gives him a concrete reason to silence her.",
          "tags": [
            "motive",
            "documentary",
            "investigation"
          ],
          "relatedSuspects": [
            "rowan-pike"
          ],
          "foundAt": "01:30"
        },
        {
          "id": "e-signal",
          "name": "Signal Stop Recorder",
          "category": "Digital",
          "summary": "The train was stationary for eight minutes at signal B-14, from 00:43 to 00:51.",
          "description": "The event recorder shows a full stop at 00:43:12 and departure at 00:51:07. Pike told investigators the delay was two minutes. The radio log records him acknowledging a freight movement and stating, 'No assistance required.'",
          "location": "Locomotive event recorder",
          "analysis": "Pike had eight minutes to move an incapacitated passenger. His underestimate of the stop's length is significant.",
          "tags": [
            "timeline",
            "opportunity",
            "signal"
          ],
          "relatedSuspects": [
            "rowan-pike"
          ],
          "foundAt": "03:00"
        },
        {
          "id": "e-camera",
          "name": "Obstructed Corridor Camera",
          "category": "Digital",
          "summary": "The corridor camera was deliberately blocked by a linen trolley between 00:35 and 00:52.",
          "description": "The camera feed shows a linen trolley being parked directly beneath the lens at 00:35. Only sleeper crew have keys to that trolley. The obstruction was removed at 00:52, after the train resumed moving.",
          "location": "Sleeper corridor camera",
          "analysis": "The obstruction covers the exact period of the stop and the mail van opening. It was not accidental: the trolley brake was deliberately set.",
          "tags": [
            "digital",
            "cover-up",
            "timeline"
          ],
          "relatedSuspects": [
            "rowan-pike",
            "elise-moreau"
          ],
          "foundAt": "01:50"
        },
        {
          "id": "e-courier",
          "name": "Courier Pickup Manifest",
          "category": "Documentary",
          "summary": "A private courier collected a heavy 'medical sample' container at Vossberg under Pike's authorisation.",
          "description": "The manifest lists two containers from the mail van, one marked 'priority medical samples'. The authorisation code belongs to Pike. The courier company has no record of the job; the pickup order used a disposable phone number.",
          "location": "Vossberg freight platform",
          "analysis": "Someone arranged for Lila to leave the train in the mail van and be collected by a private van. Pike's code authorises the release.",
          "tags": [
            "documentary",
            "transport",
            "accomplice"
          ],
          "relatedSuspects": [
            "rowan-pike"
          ],
          "foundAt": "05:40"
        }
      ],
      "timeline": [
        {
          "id": "t1",
          "time": "21:40",
          "title": "Aurora Nightliner departs Calden",
          "detail": "Lila Hart boards with a notebook and a locked briefcase; Viktor Hale boards separately.",
          "source": "Ticket manifest",
          "verified": true,
          "disputed": false,
          "actors": [
            "lila-hart",
            "viktor-hale"
          ]
        },
        {
          "id": "t2",
          "time": "23:40",
          "title": "Argument in the bar car",
          "detail": "Lila and Nadia Bell argue loudly about a disputed source.",
          "source": "Witnesses and bar receipt",
          "verified": true,
          "disputed": false,
          "actors": [
            "nadia-bell"
          ]
        },
        {
          "id": "t3",
          "time": "23:48",
          "title": "Tea ordered",
          "detail": "Lila orders chamomile tea to compartment 9.",
          "source": "Dining-car log",
          "verified": true,
          "disputed": false,
          "actors": [
            "rowan-pike",
            "elise-moreau"
          ]
        },
        {
          "id": "t4",
          "time": "00:35",
          "title": "Corridor camera blocked",
          "detail": "A linen trolley is parked beneath the camera.",
          "source": "CCTV",
          "verified": true,
          "disputed": false,
          "actors": [
            "rowan-pike"
          ]
        },
        {
          "id": "t5",
          "time": "00:42",
          "title": "Mail van opened",
          "detail": "Pike's master key unlocks the mail van.",
          "source": "Electronic lock log",
          "verified": true,
          "disputed": false,
          "actors": [
            "rowan-pike"
          ]
        },
        {
          "id": "t6",
          "time": "00:43",
          "title": "Unscheduled signal stop",
          "detail": "The train halts at signal B-14 for eight minutes.",
          "source": "Event recorder",
          "verified": true,
          "disputed": false,
          "actors": [
            "rowan-pike"
          ]
        },
        {
          "id": "t7",
          "time": "00:45",
          "title": "Nadia sees a conductor",
          "detail": "Nadia Bell sees a conductor dragging a linen cart toward the rear door.",
          "source": "Witness: Nadia Bell",
          "verified": true,
          "disputed": false,
          "actors": [
            "rowan-pike",
            "nadia-bell"
          ]
        },
        {
          "id": "t8",
          "time": "01:05",
          "title": "Compartment 9 found empty",
          "detail": "Nadia alerts the crew. Lila's belongings remain but Lila is gone.",
          "source": "Crew report",
          "verified": true,
          "disputed": false,
          "actors": [
            "nadia-bell"
          ]
        },
        {
          "id": "t9",
          "time": "05:08",
          "title": "Courier collects container",
          "detail": "A private van takes a heavy 'medical sample' container from Vossberg.",
          "source": "Freight platform log",
          "verified": true,
          "disputed": false,
          "actors": [
            "rowan-pike"
          ]
        }
      ],
      "contradictions": [
        {
          "id": "c-pike-corridor",
          "title": "The crew-car alibi",
          "detail": "Pike says he stayed in the crew car from 00:10 to 01:00. Nadia Bell saw him in the rear corridor at 00:45, and his master key opened the mail van at 00:42.",
          "suspectId": "rowan-pike",
          "evidenceIds": [
            "e-keylog",
            "e-camera"
          ],
          "questions": [
            "rowan-pike:q1",
            "nadia-bell:q2"
          ],
          "hint": "Put the conductor's claimed location beside the mail van lock time and Nadia's sighting."
        },
        {
          "id": "c-pike-stop",
          "title": "Two minutes or eight?",
          "detail": "Pike described a brief two-minute signal delay. The event recorder shows eight minutes — long enough to move an unconscious woman into the mail van.",
          "suspectId": "rowan-pike",
          "evidenceIds": [
            "e-signal"
          ],
          "questions": [
            "rowan-pike:q2"
          ],
          "hint": "Compare Pike's version of the stop with the locomotive's own clock."
        },
        {
          "id": "c-pike-key",
          "title": "The borrowed key",
          "detail": "Pike claims Elise had the master key and anyone could have used it. The lock log records his serial K-17, which he keeps on his person; Elise returned the spare at 23:00.",
          "suspectId": "rowan-pike",
          "evidenceIds": [
            "e-keylog"
          ],
          "questions": [
            "rowan-pike:q3",
            "elise-moreau:q2"
          ],
          "hint": "Ask the attendant when she returned the key, then check which key serial opened the mail van."
        }
      ],
      "motiveOptions": [
        {
          "id": "silence",
          "text": "Silence a journalist who had uncovered his ticket fraud and freight smuggling."
        },
        {
          "id": "rivalry",
          "text": "Help Nadia Bell eliminate a professional rival."
        },
        {
          "id": "inheritance",
          "text": "Claim an inheritance that Lila's investigation would have blocked."
        },
        {
          "id": "robbery",
          "text": "Steal the cash Lila was carrying for a confidential source."
        }
      ],
      "methodOptions": [
        {
          "id": "mailvan",
          "text": "Sedated her with tea, moved her through the service corridor into the mail van during the signal stop, and had an accomplice collect her at Vossberg."
        },
        {
          "id": "push",
          "text": "Pushed her from the moving train during the signal stop and returned to the crew car."
        },
        {
          "id": "compartment",
          "text": "Locked her in a hidden compartment beneath the sleeper car and waited for the search to end."
        },
        {
          "id": "station",
          "text": "Persuaded her to leave the train at an unscheduled stop and drive to Vossberg."
        }
      ],
      "hints": [
        "The tea is a starting point. A sedative explains why there was no struggle in compartment 9.",
        "The train's event recorder and the mail van lock share a timeline. Check when the van opened relative to the unscheduled stop.",
        "Look for a physical trace in the mail van that connects the person who opened it to the inside of the van."
      ],
      "solution": {
        "culpritId": "rowan-pike",
        "motiveId": "silence",
        "methodId": "mailvan",
        "evidenceIds": [
          "e-keylog",
          "e-button",
          "e-teacup"
        ],
        "headline": "The conductor used his own train as a hiding place.",
        "summary": "Rowan Pike sedated Lila Hart with her evening tea, moved her into the mail van during an unscheduled signal stop, and arranged for a fake courier to collect her at Vossberg. He acted to stop her publishing evidence of his ticket fraud and freight smuggling.",
        "explanation": [
          "Lila's tea contained a significant dose of midazolam. No struggle occurred in compartment 9, consistent with a passenger who had been made drowsy and compliant before being moved.",
          "Pike claims he spent the critical hour in the crew car. The mail van lock log records his master key at 00:42, and Nadia Bell saw him moving a linen cart toward the rear door at 00:45. His uniform button was later found on the van ramp.",
          "The train stopped for eight minutes at signal B-14, not the two minutes Pike reported. That window was used to move Lila into the mail van. A private courier then collected a heavy 'medical sample' container at Vossberg under Pike's authorisation code.",
          "The motive is documented in Lila's notebook: missing ticket revenue, a mail-van ledger, and Pike's name. The torn page suggests he searched her bag for the evidence before the search of the train began."
        ],
        "timelineReconstruction": [
          {
            "time": "23:48",
            "event": "Lila orders tea. Pike personally carries the tray and adds the sedative."
          },
          {
            "time": "00:35",
            "event": "The corridor camera is blocked with a linen trolley."
          },
          {
            "time": "00:43",
            "event": "During the eight-minute signal stop, Pike moves Lila into the mail van."
          },
          {
            "time": "05:08",
            "event": "A fake courier collects the container containing Lila at Vossberg."
          }
        ],
        "redHerring": "Nadia Bell's argument with Lila gave her a visible motive, and Viktor Hale's concealed role looked suspicious. Both have documented alibis during the critical window. The physical evidence points to the one person with the master key, the master schedule, and the opportunity to use the mail van."
      }
    },
    "death-manor.json": {
      "id": "death-manor",
      "slug": "death-at-the-manor",
      "title": "Death at the Manor",
      "subtitle": "Lord Ashcroft raised a toast to his family. Forty minutes later, he was dead.",
      "difficulty": "medium",
      "estimatedMinutes": 7,
      "location": "Wrenfield Manor, Oxfordshire",
      "date": "Saturday, 21 March 2026",
      "timeWindow": "21:45 — 23:00",
      "description": "After a tense family dinner, Lord Edmund Ashcroft retired to his study with a glass of brandy. He was found dead less than an hour later. The doctor calls it heart failure. The brandy glass says otherwise. Four people stand to gain from his death — and one of them wrote the death certificate.",
      "briefing": "Lord Ashcroft, 68, collapsed in his study at approximately 22:40 and was pronounced dead by his personal physician, Dr. Julian Croft. The family is grieving, the will is disputed, and the doctor is unusually eager to sign the certificate. The house is snowed in until morning. No one has left.",
      "cover": {
        "accent": "#A56B4F",
        "secondary": "#5B3428",
        "motif": "manor"
      },
      "scene": {
        "summary": "The study is warm, wood-panelled, and thick with the smell of peat smoke. Lord Ashcroft lies beside his leather chair, one hand on the rug. A crystal brandy glass sits on the side table, half empty. The fire has burned low.",
        "details": [
          "The victim's face is flushed; there is nausea staining his shirt cuff and a faint pulse had been absent for some time before help arrived.",
          "A crystal brandy decanter stands on the sideboard. The glass on the table has a bitter, medicinal after-odour.",
          "The victim's heart medication bottle is on the desk. The capsules inside do not match the label.",
          "A physician's bag sits in the hall outside the study. Its clasp is open.",
          "The garden door was unlocked, despite the snow."
        ],
        "initialObservations": [
          "Symptoms suggest poisoning",
          "Medical bag outside the study",
          "Snow disturbed beneath the garden door"
        ]
      },
      "victim": {
        "name": "Lord Edmund Ashcroft",
        "label": "Victim",
        "age": 68,
        "occupation": "Landowner and financier",
        "status": "Deceased — 22:47",
        "background": "Edmund inherited Wrenfield Manor at thirty and built a fortune in agricultural land. He was exacting with money, estranged from part of his family, and increasingly suspicious that someone had been forging his signature.",
        "forensic": "Cause of death is digitalis toxicity. The concentration in the brandy glass is high enough to stop a healthy heart. The victim's own heart medication is present in the study, but the capsules have been replaced with a stronger dose."
      },
      "suspects": [
        {
          "id": "julian-croft",
          "name": "Dr. Julian Croft",
          "role": "Family physician",
          "age": 52,
          "occupation": "General practitioner",
          "summary": "The Ashcroft family doctor for twenty years. Calm, well spoken, and the first person to pronounce the death. He also stands to lose everything if Edmund's land audit goes ahead.",
          "background": "Croft has a private practice and a gambling problem known only to his bank. Edmund recently discovered that several land-transfer documents bore his forged signature. The transfers benefited a shell company linked to Croft.",
          "motive": "Silence Edmund before the forged land transfers could be reported to the authorities.",
          "alibi": "Says he left the manor at 22:05 after checking on Edmund and drove home.",
          "relationship": "Family physician and secret business associate of the victim.",
          "pressure": "He signed the death certificate before the police arrived.",
          "questions": [
            {
              "id": "q1",
              "text": "When did you last see Lord Ashcroft alive?",
              "answer": "At about ten o'clock. I looked in on him in the study, said goodnight, and left through the front hall. He was in good spirits. A little flushed from the wine, nothing more."
            },
            {
              "id": "q2",
              "text": "What time did you leave the manor?",
              "answer": "Just after ten. Perhaps five past. I drove straight home. The roads were already icing over, so I took my time."
            },
            {
              "id": "q3",
              "text": "Why is your medical bag open outside the study?",
              "answer": "I treated him when I found him. I opened the bag in the hall, then went to call the ambulance. I never took it into the study. There was nothing in it that could have harmed him."
            },
            {
              "id": "q4",
              "text": "Lord Ashcroft's desk contains letters about forged land transfers signed with your name.",
              "answer": "He was confused. He accused the wrong people. I handled some of his business, yes, but with his consent. A signature is easy to dispute once a man is dead."
            }
          ]
        },
        {
          "id": "vivienne-ashcroft",
          "name": "Lady Vivienne Ashcroft",
          "role": "Widow",
          "age": 45,
          "occupation": "Arts patron",
          "summary": "Elegant and remote, Vivienne married Edmund eight years ago. Their marriage had cooled, but she remained the principal beneficiary of his estate.",
          "background": "Vivienne brought social connections and a failing gallery into the marriage. Edmund controlled the money. She was in the drawing room during the relevant hour, though no one watched her continuously.",
          "motive": "Inheritance and freedom from a controlling marriage.",
          "alibi": "In the drawing room with Clara from 22:00 until the body was found, except for a brief visit to the washroom.",
          "relationship": "Wife of the victim; beneficiary of his will.",
          "pressure": "The will leaves her the manor, but only if the estate passes probate intact.",
          "questions": [
            {
              "id": "q1",
              "text": "Where were you when your husband died?",
              "answer": "In the drawing room, pretending to read. Clara was with me. I went to the washroom for perhaps five minutes. I heard nothing from the study."
            },
            {
              "id": "q2",
              "text": "Who benefits from his death?",
              "answer": "I do, financially. And Clara receives a trust. The estate is complicated. But I did not kill him for a house I already live in."
            },
            {
              "id": "q3",
              "text": "Did you know about the forged land transfers?",
              "answer": "Edmund mentioned them at dinner. He said he would 'deal with the doctor' after dessert. Julian went pale. I thought Edmund meant a lawsuit, not a death."
            },
            {
              "id": "q4",
              "text": "What was in the brandy?",
              "answer": "I don't know. Thomas poured it. Edmund always drank the same thing after dinner. He said it settled his heart."
            }
          ]
        },
        {
          "id": "clara-ashcroft",
          "name": "Clara Ashcroft",
          "role": "Niece",
          "age": 26,
          "occupation": "Architecture student",
          "summary": "Edmund's outspoken niece and the only family member who openly argued with him. She was named in a trust but had recently been cut out of the main estate.",
          "background": "Clara grew up at Wrenfield after her parents died. Edmund treated her like a daughter until she refused an arranged marriage to a business partner's son. Their relationship deteriorated.",
          "motive": "Revenge for being disinherited, or financial desperation.",
          "alibi": "In the drawing room with Vivienne from 22:00, though she admits she stepped onto the terrace for air near 22:20.",
          "relationship": "Niece and former heir; recently removed from the will.",
          "pressure": "She was heard shouting at Edmund during dinner.",
          "questions": [
            {
              "id": "q1",
              "text": "Tell me about the argument at dinner.",
              "answer": "He called me ungrateful. I called him a tyrant. That was the extent of it. I went to my room before he went to the study, then joined Vivienne in the drawing room."
            },
            {
              "id": "q2",
              "text": "You stepped outside. Where did you go?",
              "answer": "Onto the terrace. I wanted cold air, not a murder weapon. I saw the doctor's car still in the drive. I thought he had already left. It was there until nearly quarter to eleven."
            },
            {
              "id": "q3",
              "text": "Were you written out of the will?",
              "answer": "Yes. He told me at dinner. I was furious, but I have my own plans. I don't need Wrenfield. I certainly don't need it enough to poison him."
            },
            {
              "id": "q4",
              "text": "Did you see Dr. Croft after dinner?",
              "answer": "I saw a man in the east corridor around quarter past ten. Dark coat, bag in hand. I assumed it was Croft. He told us later that he'd left at ten."
            }
          ]
        },
        {
          "id": "ada-finch",
          "name": "Ada Finch",
          "role": "Housekeeper",
          "age": 61,
          "occupation": "Housekeeper",
          "summary": "She has run Wrenfield for thirty years. Fiercely loyal to Edmund, she knew every secret in the house — including who was drinking too much and who owed money.",
          "background": "Ada's late husband worked on the estate. She has access to every room and knows the household routines. Her son has significant medical debts, which Edmund recently refused to help with.",
          "motive": "Resentment over Edmund refusing to help her son, plus access to the study.",
          "alibi": "In the kitchen from 21:45 until she heard Lady Vivienne scream at 22:55.",
          "relationship": "Long-serving housekeeper and keeper of household secrets.",
          "pressure": "Her son's debts have been discussed in the village.",
          "questions": [
            {
              "id": "q1",
              "text": "Who had access to the study last night?",
              "answer": "Lord Ashcroft, the family, and Dr. Croft. The garden door was locked before dinner; I checked it myself. I only went up when I heard the scream."
            },
            {
              "id": "q2",
              "text": "Where were you between ten and eleven?",
              "answer": "In the kitchen with Poppy, the housemaid. We were polishing the silver. She stayed until half past ten, then took the service stairs. I remained below."
            },
            {
              "id": "q3",
              "text": "Did Lord Ashcroft confide in you about the doctor?",
              "answer": "He asked me to bring the account books to his study at eight. He said the doctor had been 'borrowing' his signature. He was going to change his will and call the police in the morning."
            },
            {
              "id": "q4",
              "text": "What did you notice when you found the body?",
              "answer": "The doctor was already there, kneeling beside him. He told me to stay back. His bag was open in the hall, and I saw a small glass vial rolling near the skirting board. I pointed it out; he picked it up before I could."
            }
          ]
        }
      ],
      "witnesses": [
        {
          "id": "thomas-reed",
          "name": "Thomas Reed",
          "role": "Butler",
          "statement": "I poured Lord Ashcroft's brandy at 21:52 and left him in the study. Dr. Croft came down the main stairs at ten o'clock and told me he was leaving. At 22:15 I saw him in the east corridor, still carrying his bag. He said he had forgotten his gloves. His car did not leave the gate until 22:38.",
          "reliability": "High",
          "summary": "Croft was still in the house at 22:15 and left the gate at 22:38, not 22:05.",
          "notes": "Reed has no motive and gave a statement before the cause of death was known."
        },
        {
          "id": "poppy-lane",
          "name": "Poppy Lane",
          "role": "Housemaid",
          "statement": "I was carrying clean linens to the east corridor at about ten past ten. I saw Dr. Croft standing outside the study with his bag open. He shut it quickly and asked me to fetch a glass of water. When I came back, the study door was closed and he was gone.",
          "reliability": "Medium",
          "summary": "Croft was at the study door with his bag open around 22:10.",
          "notes": "Poppy is young and nervous, but her timing matches the butler's account."
        },
        {
          "id": "victor-hale",
          "name": "Victor Hale",
          "role": "Groundskeeper",
          "statement": "The garden door was locked when I checked it at six. By ten there was a narrow path of boot prints through the fresh snow leading to the side gate, away from the house. The prints were made by town shoes, not work boots. The snow filled them in by morning.",
          "reliability": "Medium",
          "summary": "Someone in town shoes left through the garden door during the evening.",
          "notes": "No prints led back toward the house; the ground fogged over before a cast could be taken."
        }
      ],
      "evidence": [
        {
          "id": "e-brandy",
          "name": "Brandy Glass Residue",
          "category": "Forensic",
          "summary": "The brandy contains a lethal concentration of digitoxin, a digitalis heart drug.",
          "description": "The crystal glass contains brandy, digitalis compounds, and a bitter compound used to mask the taste. The dose is approximately ten times a therapeutic level. The decanter is clean, meaning the poison was placed in the glass or poured after the decanter was filled.",
          "location": "Study side table",
          "analysis": "The poison was delivered in the glass, not the shared decanter. It likely took effect within thirty to forty-five minutes, placing the dose between 21:50 and 22:10.",
          "tags": [
            "forensic",
            "poison",
            "timeline"
          ],
          "relatedSuspects": [
            "julian-croft",
            "ada-finch"
          ],
          "foundAt": "23:20"
        },
        {
          "id": "e-bag",
          "name": "Physician's Bag",
          "category": "Physical",
          "summary": "An empty digitoxin vial is hidden in a side pocket of Croft's medical bag.",
          "description": "A brown glass vial labelled Digitoxin Injection lies in an inner pocket of Dr. Croft's bag. The vial is empty, and its batch number matches a box collected from the Wrenfield pharmacy two days ago. The bag's clasp was wiped clean, but the vial bears a partial print.",
          "location": "Hall outside study",
          "analysis": "Croft's bag contained the poison. His claim that he never opened the bag in the study is false; Poppy Lane saw it open at the study door.",
          "tags": [
            "physical",
            "vial",
            "medical"
          ],
          "relatedSuspects": [
            "julian-croft"
          ],
          "foundAt": "23:30"
        },
        {
          "id": "e-gate",
          "name": "Gate Log",
          "category": "Digital",
          "summary": "Croft's car left the manor at 22:38, thirty-three minutes after he claims to have departed.",
          "description": "The electronic gate log records Dr. Croft's car exiting at 22:38:17. The butler saw him in the east corridor at 22:15. Clara saw the car still in the drive near 22:20. Croft says he left at 22:05.",
          "location": "Wrenfield Manor gate",
          "analysis": "Croft remained in or around the house until at least 22:38, after the poison would have begun acting. His alibi is demonstrably false.",
          "tags": [
            "timeline",
            "alibi",
            "digital"
          ],
          "relatedSuspects": [
            "julian-croft"
          ],
          "foundAt": "07:10"
        },
        {
          "id": "e-ledger",
          "name": "Land Transfer Ledger",
          "category": "Documentary",
          "summary": "Forged land transfers paid money to a shell company linked to Croft.",
          "description": "Edmund's desk ledger records four transfers of land to Caxton Holdings, backed by deeds bearing his forged signature. A handwritten note says: 'J.C. — explain after dinner or police Monday.' Caxton's registered agent is Julian Croft's brother-in-law.",
          "location": "Study desk",
          "analysis": "This establishes a specific motive: Edmund was about to expose Croft, who had been stealing land through forged signatures.",
          "tags": [
            "motive",
            "documentary",
            "forgery"
          ],
          "relatedSuspects": [
            "julian-croft"
          ],
          "foundAt": "23:10"
        },
        {
          "id": "e-pills",
          "name": "Swapped Heart Medication",
          "category": "Forensic",
          "summary": "The capsules in Edmund's heart medication are a dangerous, stronger dose than the label states.",
          "description": "The bottle on the desk is labelled Digoxin 0.1 mg, but the capsules inside contain 0.25 mg. The pharmacy seal was resealed. Croft is the prescribing physician and collected a box of 0.25 mg capsules two days ago.",
          "location": "Study desk",
          "analysis": "The swap created a plausible explanation for a heart event while also providing a source of digitalis. It required medical knowledge and access to prescription stock.",
          "tags": [
            "forensic",
            "medical",
            "premeditation"
          ],
          "relatedSuspects": [
            "julian-croft"
          ],
          "foundAt": "23:15"
        },
        {
          "id": "e-pharmacy",
          "name": "Pharmacy Collection Record",
          "category": "Documentary",
          "summary": "Croft collected digitoxin two days before the death, without a corresponding patient prescription.",
          "description": "The village pharmacy log shows Dr. Croft collecting a box of digitoxin ampoules on 19 March, signed for as 'practice stock'. No patient at his practice is prescribed injectable digitoxin. The batch matches the empty vial.",
          "location": "Wrenfield Pharmacy",
          "analysis": "This links Croft to the poison and undermines any claim that the fatal dose was accidental or came from Edmund's own medication.",
          "tags": [
            "documentary",
            "source",
            "medical"
          ],
          "relatedSuspects": [
            "julian-croft"
          ],
          "foundAt": "08:50"
        },
        {
          "id": "e-snow",
          "name": "Garden Boot Prints",
          "category": "Scene",
          "summary": "Town-shoe prints lead from the study's garden door to the side gate.",
          "description": "A narrow trail of prints passes through fresh snow from the garden door to a side gate. The tread matches a leather town shoe, roughly size 44, with a repaired heel. No prints return to the house.",
          "location": "East garden",
          "analysis": "The killer may have left through the garden to avoid the main hall. The repaired-heel pattern can be compared with the suspects' shoes.",
          "tags": [
            "scene",
            "exit",
            "physical"
          ],
          "relatedSuspects": [
            "julian-croft"
          ],
          "foundAt": "07:30"
        }
      ],
      "timeline": [
        {
          "id": "t1",
          "time": "19:30",
          "title": "Family dinner begins",
          "detail": "Edmund confronts Croft about forged land transfers at the table.",
          "source": "Witness statements",
          "verified": true,
          "disputed": false,
          "actors": [
            "julian-croft",
            "vivienne-ashcroft",
            "clara-ashcroft"
          ]
        },
        {
          "id": "t2",
          "time": "21:50",
          "title": "Brandy poured",
          "detail": "Thomas Reed pours brandy for Edmund and leaves him in the study.",
          "source": "Butler's statement",
          "verified": true,
          "disputed": false,
          "actors": [
            "edmund-ashcroft"
          ]
        },
        {
          "id": "t3",
          "time": "22:05",
          "title": "Croft says he leaves",
          "detail": "Croft claims he said goodnight and drove home.",
          "source": "Suspect statement",
          "verified": false,
          "disputed": true,
          "actors": [
            "julian-croft"
          ]
        },
        {
          "id": "t4",
          "time": "22:10",
          "title": "Doctor at the study door",
          "detail": "Poppy Lane sees Croft with his medical bag open outside the study.",
          "source": "Witness: Poppy Lane",
          "verified": true,
          "disputed": false,
          "actors": [
            "julian-croft"
          ]
        },
        {
          "id": "t5",
          "time": "22:15",
          "title": "Butler sees Croft",
          "detail": "Reed sees Croft in the east corridor with his bag, claiming he forgot his gloves.",
          "source": "Witness: Thomas Reed",
          "verified": true,
          "disputed": false,
          "actors": [
            "julian-croft"
          ]
        },
        {
          "id": "t6",
          "time": "22:38",
          "title": "Croft's car exits",
          "detail": "The gate log records his car leaving the manor.",
          "source": "Gate system",
          "verified": true,
          "disputed": false,
          "actors": [
            "julian-croft"
          ]
        },
        {
          "id": "t7",
          "time": "22:47",
          "title": "Edmund collapses",
          "detail": "The victim is heard falling in the study.",
          "source": "Household timeline",
          "verified": true,
          "disputed": false,
          "actors": [
            "edmund-ashcroft"
          ]
        },
        {
          "id": "t8",
          "time": "22:55",
          "title": "Body found",
          "detail": "Lady Vivienne finds Edmund and calls for help.",
          "source": "Witness statements",
          "verified": true,
          "disputed": false,
          "actors": [
            "vivienne-ashcroft"
          ]
        }
      ],
      "contradictions": [
        {
          "id": "c-croft-time",
          "title": "Still in the house",
          "detail": "Croft says he left at 22:05. Poppy saw him at the study door at 22:10, the butler saw him at 22:15, and his car did not pass the gate until 22:38.",
          "suspectId": "julian-croft",
          "evidenceIds": [
            "e-gate"
          ],
          "questions": [
            "julian-croft:q2"
          ],
          "hint": "Three independent timestamps place Croft in the house far longer than he admits."
        },
        {
          "id": "c-croft-bag",
          "title": "The open medical bag",
          "detail": "Croft says he never opened his bag in the study. Poppy Lane saw it open at the study door, and an empty digitoxin vial was later found in its side pocket.",
          "suspectId": "julian-croft",
          "evidenceIds": [
            "e-bag"
          ],
          "questions": [
            "julian-croft:q3"
          ],
          "hint": "The poison and the lie about the bag belong together."
        },
        {
          "id": "c-croft-motive",
          "title": "A signature worth killing for",
          "detail": "Croft dismisses the forged land transfers as confusion. The ledger names his brother-in-law's shell company and contains Edmund's note to confront Dr. Croft after dinner.",
          "suspectId": "julian-croft",
          "evidenceIds": [
            "e-ledger",
            "e-pharmacy"
          ],
          "questions": [
            "julian-croft:q4"
          ],
          "hint": "Read Edmund's last note in the ledger, then compare it with Croft's account of their business relationship."
        }
      ],
      "motiveOptions": [
        {
          "id": "forgery",
          "text": "Silence Lord Ashcroft before he exposed Croft's forged land transfers and financial fraud."
        },
        {
          "id": "inheritance",
          "text": "Inherit Wrenfield Manor through a secret clause in the will."
        },
        {
          "id": "affair",
          "text": "Punish Edmund for discovering an affair with Lady Vivienne."
        },
        {
          "id": "mercy",
          "text": "End the suffering of a terminally ill patient at his request."
        }
      ],
      "methodOptions": [
        {
          "id": "digitoxin",
          "text": "Added concentrated digitoxin to the after-dinner brandy, then signed the death certificate to control the narrative."
        },
        {
          "id": "capsules",
          "text": "Replaced the heart medication with a lethal dose and waited for Edmund to take his evening pills."
        },
        {
          "id": "arsenic",
          "text": "Put arsenic in the dinner soup, using the brandy to mask the taste."
        },
        {
          "id": "fall",
          "text": "Struck him during an argument and staged a fall beside the study chair."
        }
      ],
      "hints": [
        "The poison is in the brandy, but the timing narrows the field. Work out when the glass could have been dosed.",
        "The family physician's alibi is a story about leaving. The gate log is a machine that does not care about stories.",
        "An empty vial can be as incriminating as a full one. Ask who had a reason to carry digitoxin into the manor."
      ],
      "solution": {
        "culpritId": "julian-croft",
        "motiveId": "forgery",
        "methodId": "digitoxin",
        "evidenceIds": [
          "e-brandy",
          "e-bag",
          "e-gate"
        ],
        "headline": "The doctor prescribed a fatal dose to bury a forged fortune.",
        "summary": "Dr. Julian Croft poisoned Lord Edmund Ashcroft with digitoxin after Edmund discovered that Croft had forged his signature on land transfers. Croft then signed the death certificate and invented an early departure that the gate log disproves.",
        "explanation": [
          "Edmund's brandy contained a lethal concentration of digitoxin. The clean decanter shows the poison was placed in the glass, and the onset timing places the dose around 22:00–22:10, while Croft was still in the house.",
          "Croft claimed he left at 22:05, never opened his medical bag, and found Edmund already dying. Poppy Lane saw the bag open at the study door at 22:10, the butler saw Croft at 22:15, and the gate log records his car leaving at 22:38.",
          "An empty digitoxin vial was hidden in Croft's bag. Its batch matches a box he collected two days earlier, with no corresponding patient prescription. Croft also swapped Edmund's heart medication for a stronger dose, constructing a medical explanation in advance.",
          "The motive is in the study ledger: forged land transfers, a shell company tied to Croft's brother-in-law, and Edmund's note to confront him after dinner. Croft killed to prevent the audit that would have destroyed him."
        ],
        "timelineReconstruction": [
          {
            "time": "19:30",
            "event": "Edmund confronts Croft about the forged land transfers at dinner."
          },
          {
            "time": "21:52",
            "event": "Edmund takes a brandy to the study."
          },
          {
            "time": "22:05",
            "event": "Croft visits the study under the pretext of saying goodnight and doses the brandy."
          },
          {
            "time": "22:38",
            "event": "Croft finally leaves through the gate, after the poison has taken hold."
          }
        ],
        "redHerring": "Vivienne and Clara both had inheritance motives and were not continuously supervised. Ada Finch had access to the study and a grudge about her son's debts. None of them had access to digitoxin, and none of them lied about a medical bag that contained the poison."
      }
    },
    "blackout.json": {
      "id": "blackout",
      "slug": "the-blackout",
      "title": "The Blackout",
      "subtitle": "Fourteen minutes of darkness. One missing diamond. A perfect alibi built from broken lights.",
      "difficulty": "easy",
      "estimatedMinutes": 6,
      "location": "Meridian Jewelry Exchange, Birmingham",
      "date": "Friday, 20 March 2026",
      "timeWindow": "21:00 — 21:40",
      "description": "At 21:12 the Meridian Jewelry Exchange lost power. When the lights returned, the Heart of the Vale — a 14-carat blue diamond — was gone. The street outside stayed lit. The emergency exit was open. The security engineer says it was a grid surge. The evidence says it was a plan.",
      "briefing": "The Exchange was closing for the weekend when the lights failed. Three staff and one external engineer were inside. The display case was opened with a service override, not smashed. The alarm never sounded. You have until the morning security handover to identify who turned the blackout into a doorway.",
      "cover": {
        "accent": "#5AC8D8",
        "secondary": "#246B76",
        "motif": "blackout"
      },
      "scene": {
        "summary": "The showroom is dark except for emergency strips. The Heart of the Vale case stands open, its glass unbroken, the velvet pad dented where the stone once sat. A faint smell of hot copper hangs near the basement stairs.",
        "details": [
          "The display case lock was opened with an electronic service override. There is no impact damage.",
          "The blackout affected only the Exchange and its basement; neighbouring buildings and streetlights remained on.",
          "The rear emergency exit opened at 21:17 and closed at 21:18. Its alarm was in engineer test mode.",
          "Graphite dust from the server-room floor is tracked toward the rear exit.",
          "A maintenance login at 21:08 was used to place the alarm system in test mode."
        ],
        "initialObservations": [
          "Localised power failure",
          "Alarm bypassed before blackout",
          "Display case opened without force"
        ]
      },
      "victim": {
        "name": "The Heart of the Vale",
        "label": "Stolen diamond",
        "age": "Certified 2019",
        "occupation": "14.2-carat blue diamond",
        "status": "Missing, presumed stolen",
        "background": "A fancy vivid blue diamond insured for £3.1 million. It was on a private viewing display for a buyer arriving Monday. Only six people knew the stone was still in the building over the weekend.",
        "forensic": "The display case lock recorded a valid service override at 21:15. The velvet pad bears a fresh compression mark. No fingerprints were recovered. A single graphite smudge was found on the case frame."
      },
      "suspects": [
        {
          "id": "niko-rask",
          "name": "Niko Rask",
          "role": "Security systems engineer",
          "age": 33,
          "occupation": "Freelance systems engineer",
          "summary": "He installed the Exchange's alarm and display-lock system. He was on site for a routine service call when the power failed, and he knows every override in the building.",
          "background": "Rask has worked for the Exchange for four years. He has a gambling habit and recently missed two loan payments. He was alone in the server room during the blackout.",
          "motive": "A large gambling debt and pressure from a private lender.",
          "alibi": "In the server room from 21:00 until 21:26, restoring power.",
          "relationship": "External contractor with system-level access and knowledge of the display case.",
          "pressure": "His phone has received repeated payment demands.",
          "questions": [
            {
              "id": "q1",
              "text": "What were you doing when the lights went out?",
              "answer": "Resetting the monitoring server. The power dropped at 21:12. I used the emergency console to diagnose it. I stayed in the server room until I restored the main feed at 21:26."
            },
            {
              "id": "q2",
              "text": "Why did only this building lose power?",
              "answer": "Old building, single feed, sensitive load. It happens. The breaker probably tripped from a surge. I found it reset when I checked the panel afterward."
            },
            {
              "id": "q3",
              "text": "The rear exit opened with your override card at 21:17.",
              "answer": "That's not possible. My card was in the server room with me. The readers can glitch when the power is unstable. I didn't leave the room."
            },
            {
              "id": "q4",
              "text": "You installed the display case lock. Can it be opened without a key?",
              "answer": "There is a service override, but it requires the physical maintenance key and the panel code. I don't carry the key. Celia keeps it in her office safe."
            }
          ]
        },
        {
          "id": "celia-ward",
          "name": "Celia Ward",
          "role": "Store manager",
          "age": 41,
          "occupation": "Jewelry exchange manager",
          "summary": "Composed and meticulous, Celia controls the keys, the safe, and the weekend schedule. She was on the phone with the insurer when the lights failed.",
          "background": "Ward has managed the Exchange for six years. She was the one who insisted the Heart of the Vale remain on site until Monday. She has no known debts, but her contract includes a generous loss bonus.",
          "motive": "Financial gain through the loss bonus, or resentment after being passed over for a regional role.",
          "alibi": "In her office on a recorded call with the insurer from 21:05 to 21:24.",
          "relationship": "Manager and keyholder; Niko's primary contact at the Exchange.",
          "pressure": "She is responsible for the diamond and its insurance file.",
          "questions": [
            {
              "id": "q1",
              "text": "Where were you during the blackout?",
              "answer": "In my office, on hold with the insurer. The call log will show it. I had a battery lamp and a very long wait. I did not leave the office until the lights came back."
            },
            {
              "id": "q2",
              "text": "Who has access to the display case key?",
              "answer": "I do. It lives in the safe in my office. Niko has a service key for maintenance, but it is supposed to be sealed in a tamper bag. I checked the safe after the theft; the key was still there."
            },
            {
              "id": "q3",
              "text": "Why was the alarm in test mode?",
              "answer": "Niko was on site for a service call. He asked me to authorise a brief test after closing. I signed the work order. I did not authorise him to open the case."
            },
            {
              "id": "q4",
              "text": "Did you notice anything strange before the lights went out?",
              "answer": "The server-room door was propped open. That was unusual; Niko always keeps it shut for cooling. I saw him walking toward the basement stairs around nine, carrying his tool case."
            }
          ]
        },
        {
          "id": "anton-vale",
          "name": "Anton Vale",
          "role": "Owner's son",
          "age": 27,
          "occupation": "Company director",
          "summary": "The owner's son, charming and impatient. He was supposed to deliver the diamond to a buyer on Monday, but the sale depended on his father's approval.",
          "background": "Anton works in the family business and arranged the private viewing. He has a reputation for risky investments and recently borrowed against his inheritance. His father controls the company's cash.",
          "motive": "Sell the diamond privately to cover a failed investment, or claim insurance while hiding a sale.",
          "alibi": "Across the street at the Vintner's Bar from 20:55 to 21:30. The bartender and a card receipt confirm it.",
          "relationship": "Son of the owner and organiser of the private viewing.",
          "pressure": "His father was preparing to remove him from the board.",
          "questions": [
            {
              "id": "q1",
              "text": "Why were you across the street?",
              "answer": "I wasn't needed for the close. I was having a drink and waiting for a call from my father. The bar staff know me. I was there when the lights went out; half the street turned to look."
            },
            {
              "id": "q2",
              "text": "Who knew the diamond was on site?",
              "answer": "Me, my father, Celia, the insurer, and the security contractor. Niko installed the case. He knew the viewing was Monday. He also knew the building would be quiet on Friday night."
            },
            {
              "id": "q3",
              "text": "Did the sale depend on your father's approval?",
              "answer": "Yes. He was dragging his feet. If the stone vanished, the insurance would pay, but that wouldn't help my debts. I needed the sale, not a police investigation."
            },
            {
              "id": "q4",
              "text": "Did you see anything from the bar?",
              "answer": "I saw the Exchange go dark. A minute later, a man in a dark maintenance jacket came out the rear service door, walked to a grey van, and drove off without lights. I assumed it was Niko."
            }
          ]
        },
        {
          "id": "grace-lin",
          "name": "Grace Lin",
          "role": "Sales associate",
          "age": 24,
          "occupation": "Sales associate",
          "summary": "The newest employee, efficient and observant. She was locking the front display when the power failed and saw a figure near the rear exit.",
          "background": "Lin joined the Exchange four months ago. She is studying gemology and hopes to become a buyer. She has no access to the safe or the service overrides.",
          "motive": "None established, though she knew the diamond's value and disliked being left out of the private viewing.",
          "alibi": "In the showroom with the security guard from 21:05 until the lights returned.",
          "relationship": "Junior employee; no keyholder authority.",
          "pressure": "She is worried about being blamed for a theft she witnessed.",
          "questions": [
            {
              "id": "q1",
              "text": "What did you see during the blackout?",
              "answer": "Emergency lights only. I saw a man move from the server-room corridor toward the rear exit. He wore a maintenance jacket and carried a slim black case. I couldn't see his face, but he moved like he knew the floor."
            },
            {
              "id": "q2",
              "text": "Where was Celia Ward?",
              "answer": "In her office. I heard her on the phone. She sounded annoyed and kept saying 'I'm still holding'. She didn't come out until the lights came back."
            },
            {
              "id": "q3",
              "text": "Did you see the display case open?",
              "answer": "Not until the power returned. It was open and the diamond was gone. I didn't hear glass break. It was like someone had simply lifted the stone out."
            },
            {
              "id": "q4",
              "text": "What do you know about Niko Rask?",
              "answer": "He's been here a few times. He's friendly but nervous lately. Last week he asked me whether the weekend viewing had been confirmed and whether Celia would be alone on Friday. I thought he was making conversation."
            }
          ]
        }
      ],
      "witnesses": [
        {
          "id": "martin-cole",
          "name": "Martin Cole",
          "role": "Security guard",
          "statement": "I was locking the front doors when the power failed. My torch worked, but the alarm panel showed 'engineer test'. I went to the rear exit and found it closed, but the push bar was warm. I did not see anyone. The lights came back at 21:26.",
          "reliability": "High",
          "summary": "The alarm was already in engineer test mode when the blackout began.",
          "notes": "Cole has worked at the Exchange for eleven months and had no access to service overrides."
        },
        {
          "id": "rosa-mendel",
          "name": "Rosa Mendel",
          "role": "Bartender, Vintner's Bar",
          "statement": "Anton Vale was at the bar from before nine until about half past. He kept checking his phone. When the lights across the street went out, he stood up and watched through the window. He didn't leave.",
          "reliability": "High",
          "summary": "Anton Vale remained in the bar throughout the blackout.",
          "notes": "A card receipt and two staff members corroborate the alibi."
        },
        {
          "id": "utility-record",
          "name": "City Grid Control",
          "role": "Utility statement",
          "statement": "No outage was recorded on the street feed during the relevant period. The Exchange is on a private sub-panel. Any loss of power inside the building originated from that panel.",
          "reliability": "High",
          "summary": "The blackout was internal, not a grid failure.",
          "notes": "The sub-panel serves only the Exchange and its basement."
        }
      ],
      "evidence": [
        {
          "id": "e-jumper",
          "name": "Copper Breaker Jumper",
          "category": "Physical",
          "summary": "A copper wire was found bridging the Exchange's main breaker, forcing a deliberate shutdown.",
          "description": "A short length of copper wire connects the main breaker's trip coil to the panel ground. It is a crude but effective timer: when the server load peaks, the breaker trips and the local feed dies. The wire was installed by someone with panel access and electrical knowledge.",
          "location": "Basement electrical panel",
          "analysis": "The blackout was engineered. The jumper is not a utility fault and would not occur naturally. It also explains why the street stayed lit.",
          "tags": [
            "physical",
            "sabotage",
            "power"
          ],
          "relatedSuspects": [
            "niko-rask"
          ],
          "foundAt": "21:50"
        },
        {
          "id": "e-login",
          "name": "Maintenance Console Login",
          "category": "Digital",
          "summary": "An engineer-level login at 21:08 placed the alarm in test mode and disabled exit alarms.",
          "description": "The security console records an engineer login at 21:08:31 using Niko Rask's credentials. The session enabled test mode on the rear exit and silenced door alarms. The console shows no logout; the session ended when power was cut.",
          "location": "Security server room",
          "analysis": "The alarm was deliberately disabled before the blackout. Only one engineer account was active in the building.",
          "tags": [
            "digital",
            "access",
            "alarm"
          ],
          "relatedSuspects": [
            "niko-rask"
          ],
          "foundAt": "22:10"
        },
        {
          "id": "e-exit",
          "name": "Rear Exit Access Record",
          "category": "Digital",
          "summary": "The rear exit opened with Niko's override card at 21:17 and closed one minute later.",
          "description": "The door controller recorded Rask's card at 21:17:04 and a closure at 21:18:02. The card was not reported lost. The exit leads to the service lane where a grey van was seen leaving without headlights.",
          "location": "Rear exit controller",
          "analysis": "Rask left the building during the blackout, despite claiming he never moved from the server room. The minute-long opening is consistent with carrying a small item to a vehicle.",
          "tags": [
            "timeline",
            "access",
            "exit"
          ],
          "relatedSuspects": [
            "niko-rask"
          ],
          "foundAt": "22:15"
        },
        {
          "id": "e-servicekey",
          "name": "Service Key Audit",
          "category": "Documentary",
          "summary": "Niko retained an unsealed service key for the display case, contrary to policy.",
          "description": "The maintenance log shows two service keys were issued to Rask when the case was installed. Only one was returned. The tamper bag for the second key is empty. The service override records at 21:15 match the missing key's serial.",
          "location": "Maintenance records",
          "analysis": "Rask had the means to open the case without force. His statement that he does not carry the key is false.",
          "tags": [
            "documentary",
            "access",
            "case"
          ],
          "relatedSuspects": [
            "niko-rask"
          ],
          "foundAt": "22:30"
        },
        {
          "id": "e-phone",
          "name": "Cell Site Record",
          "category": "Digital",
          "summary": "Niko's phone connected to a tower near the rear service lane at 21:18.",
          "description": "Cell site data places Rask's phone within 40 metres of the Exchange's rear service lane at 21:18, not in the basement server room. The phone also received three messages from a lender that evening.",
          "location": "Mobile carrier record",
          "analysis": "The location data independently places Rask outside the server room during the exit window. His phone was moving toward the lane.",
          "tags": [
            "digital",
            "location",
            "alibi"
          ],
          "relatedSuspects": [
            "niko-rask"
          ],
          "foundAt": "08:20"
        },
        {
          "id": "e-debt",
          "name": "Loan Demand Messages",
          "category": "Digital",
          "summary": "Niko received escalating payment demands and a threat to visit his workplace.",
          "description": "Three messages from an unregistered lender demand £18,000 by Friday. The final message reads: 'We know where you work. We can make a scene.' The messages were sent to Rask's phone and found in a backup.",
          "location": "Backup of Rask's phone",
          "analysis": "This establishes immediate financial pressure and a motive to steal a highly liquid asset.",
          "tags": [
            "motive",
            "digital",
            "debt"
          ],
          "relatedSuspects": [
            "niko-rask"
          ],
          "foundAt": "09:00"
        },
        {
          "id": "e-guard",
          "name": "Guard's Torch Log",
          "category": "Documentary",
          "summary": "The guard's patrol log places him at the front doors during the blackout.",
          "description": "Martin Cole's patrol log and radio check-ins show him at the front entrance from 21:10 to 21:25. He had no access to the service panel, the display case, or the engineer console. His body camera confirms the time.",
          "location": "Security office",
          "analysis": "The guard's movements are documented and inconsistent with the theft. His role is investigative, not culpable.",
          "tags": [
            "alibi",
            "security",
            "timeline"
          ],
          "relatedSuspects": [],
          "foundAt": "21:45"
        }
      ],
      "timeline": [
        {
          "id": "t1",
          "time": "20:50",
          "title": "Store closes",
          "detail": "The last customer leaves. The Heart of the Vale is returned to its case.",
          "source": "Floor log",
          "verified": true,
          "disputed": false,
          "actors": [
            "celia-ward",
            "grace-lin"
          ]
        },
        {
          "id": "t2",
          "time": "21:05",
          "title": "Niko enters server room",
          "detail": "Rask begins a service session while the store is closing.",
          "source": "Server log",
          "verified": true,
          "disputed": false,
          "actors": [
            "niko-rask"
          ]
        },
        {
          "id": "t3",
          "time": "21:08",
          "title": "Alarm test mode enabled",
          "detail": "An engineer login silences the rear exit alarms.",
          "source": "Security console",
          "verified": true,
          "disputed": false,
          "actors": [
            "niko-rask"
          ]
        },
        {
          "id": "t4",
          "time": "21:12",
          "title": "Power fails",
          "detail": "Only the Exchange loses power. Emergency lights activate.",
          "source": "Utility and panel records",
          "verified": true,
          "disputed": false,
          "actors": []
        },
        {
          "id": "t5",
          "time": "21:15",
          "title": "Display case opened",
          "detail": "The case records a service override; the diamond is removed.",
          "source": "Case lock log",
          "verified": true,
          "disputed": false,
          "actors": [
            "niko-rask"
          ]
        },
        {
          "id": "t6",
          "time": "21:17",
          "title": "Rear exit opens",
          "detail": "Rask's override card opens the rear door for one minute.",
          "source": "Exit controller",
          "verified": true,
          "disputed": false,
          "actors": [
            "niko-rask"
          ]
        },
        {
          "id": "t7",
          "time": "21:26",
          "title": "Power restored",
          "detail": "Rask claims to have reset the main feed; the lights return.",
          "source": "Server log",
          "verified": true,
          "disputed": false,
          "actors": [
            "niko-rask"
          ]
        },
        {
          "id": "t8",
          "time": "21:30",
          "title": "Empty case found",
          "detail": "Grace Lin sees the open case and raises the alarm.",
          "source": "Witness: Grace Lin",
          "verified": true,
          "disputed": false,
          "actors": [
            "grace-lin"
          ]
        }
      ],
      "contradictions": [
        {
          "id": "c-niko-room",
          "title": "Never left the server room?",
          "detail": "Rask says he stayed in the server room. His override card opened the rear exit at 21:17, and his phone connected to a tower near the service lane at 21:18.",
          "suspectId": "niko-rask",
          "evidenceIds": [
            "e-exit",
            "e-phone"
          ],
          "questions": [
            "niko-rask:q3"
          ],
          "hint": "Two independent systems put Rask outside the room during the theft window."
        },
        {
          "id": "c-niko-surge",
          "title": "A surge with a copper tail",
          "detail": "Rask blames a utility surge. The utility recorded no outage, and a copper jumper was found bridging the building's main breaker.",
          "suspectId": "niko-rask",
          "evidenceIds": [
            "e-jumper"
          ],
          "questions": [
            "niko-rask:q2"
          ],
          "hint": "The power company and the electrical panel tell different stories."
        },
        {
          "id": "c-niko-key",
          "title": "The missing service key",
          "detail": "Rask says he does not carry the display-case key. Maintenance records show two keys were issued to him and only one was returned; the missing key's serial matches the 21:15 override.",
          "suspectId": "niko-rask",
          "evidenceIds": [
            "e-servicekey"
          ],
          "questions": [
            "niko-rask:q4"
          ],
          "hint": "Check the maintenance inventory against Rask's account of the key."
        }
      ],
      "motiveOptions": [
        {
          "id": "debts",
          "text": "Steal the diamond to pay off gambling debts and stop a lender's threats."
        },
        {
          "id": "bonus",
          "text": "Help the store manager claim a generous loss bonus."
        },
        {
          "id": "inheritance",
          "text": "Fund a family inheritance dispute by selling the stone privately."
        },
        {
          "id": "revenge",
          "text": "Sabotage the Exchange after being denied a permanent contract."
        }
      ],
      "methodOptions": [
        {
          "id": "engineered",
          "text": "Engineered a local blackout with a breaker jumper, used his retained service key and override card, and exited through the rear service door."
        },
        {
          "id": "grid",
          "text": "Waited for a genuine grid failure, smashed the display case in the dark, and hid until the lights returned."
        },
        {
          "id": "manager",
          "text": "Used the manager's safe key while she was on the phone, then left through the front door."
        },
        {
          "id": "drone",
          "text": "Used a drone to lift the diamond through the ventilation shaft during the blackout."
        }
      ],
      "hints": [
        "A blackout that affects one building is not a grid failure. Look at the electrical panel, not the sky.",
        "The alarm did not sound for a reason. Trace the engineer login and the door controller records.",
        "The service key inventory is short one key. Find out who kept it."
      ],
      "solution": {
        "culpritId": "niko-rask",
        "motiveId": "debts",
        "methodId": "engineered",
        "evidenceIds": [
          "e-jumper",
          "e-exit",
          "e-servicekey"
        ],
        "headline": "The security expert built his own darkness.",
        "summary": "Niko Rask rigged the Exchange's breaker with a copper jumper, disabled the alarms from the engineer console, opened the display case with a retained service key, and left through the rear exit with the Heart of the Vale. He needed the money to settle gambling debts.",
        "explanation": [
          "The blackout was local and deliberate. A copper jumper on the main breaker forced the Exchange's private feed to trip. The utility confirmed no street outage, and the jumper required electrical knowledge and panel access.",
          "Rask disabled the rear exit alarm with his engineer login at 21:08. At 21:17 his override card opened the rear door for one minute, and cell data placed his phone near the service lane at 21:18. He was not in the server room.",
          "The display case was opened with a service override. Maintenance records show Rask retained one of two service keys and left its tamper bag empty. The override serial matches the missing key.",
          "The motive is financial pressure: messages from a lender demanded £18,000 and threatened to visit his workplace. The Heart of the Vale was small, highly valuable, and easy to carry out through a door he controlled."
        ],
        "timelineReconstruction": [
          {
            "time": "21:08",
            "event": "Rask logs into the console and disables the rear exit alarms."
          },
          {
            "time": "21:12",
            "event": "The copper jumper trips the main breaker, plunging the Exchange into darkness."
          },
          {
            "time": "21:15",
            "event": "Rask opens the display case with his retained service key and takes the diamond."
          },
          {
            "time": "21:17",
            "event": "He exits through the rear door with a slim case and leaves in a grey van."
          }
        ],
        "redHerring": "Celia Ward controlled the safe key and had a loss-bonus clause, but her recorded insurer call covers the blackout. Anton Vale had financial problems, but he remained in the bar across the street. Grace Lin saw the figure but had no keyholder access. Only Rask had the technical knowledge, the service key, and the access log."
      }
    },
    "missing-formula.json": {
      "id": "missing-formula",
      "slug": "the-missing-formula",
      "title": "The Missing Formula",
      "subtitle": "The researcher is in a coma. His life's work is in a stolen freezer vial.",
      "difficulty": "medium",
      "estimatedMinutes": 7,
      "location": "Helix Biotech, Cambridge Science Park",
      "date": "Sunday, 22 March 2026",
      "timeWindow": "01:20 — 02:40",
      "description": "Dr. Aaron Feld was found unconscious in his lab at 02:35. The only sample of Solenoid-7 — a drought-resistant grain formula worth millions — is gone. His access badge was in his locker. Someone used a copy. The weekend skeleton crew gives you four possible witnesses and one very narrow window.",
      "briefing": "Helix Biotech operates a locked-down research floor. At 02:35 a security patrol found Dr. Feld bleeding beside a reagent bench and the cryo-freezer open. The intruder used Feld's credentials, but Feld was not carrying his badge. The sample was taken from a locked rack, and the attacker left through the loading dock.",
      "cover": {
        "accent": "#72B58A",
        "secondary": "#2F5E44",
        "motif": "lab"
      },
      "scene": {
        "summary": "The lab is cold and immaculate apart from the broken reagent bottle beside the bench. The cryo-freezer door hangs open, mist curling around the empty sample rack. A smear of blood leads toward the loading dock but stops at the threshold.",
        "details": [
          "Dr. Feld is alive but unconscious with a blunt head injury. He was found at 02:35.",
          "His access badge is in his gym locker, not on his person.",
          "The lab door was opened with Feld's credentials at 02:14, but the badge reader recorded a cloned token signature.",
          "The cryo-freezer rack for Solenoid-7 was opened at 02:16 using Feld's secondary code.",
          "A reagent bottle bearing Feld's blood was wiped clean of fingerprints.",
          "A maintenance corridor camera captured a figure in a lab coat leaving at 02:24; the figure is approximately 171 cm tall."
        ],
        "initialObservations": [
          "Victim alive but critical",
          "Cloned access credential",
          "Cryo sample removed"
        ]
      },
      "victim": {
        "name": "Dr. Aaron Feld",
        "label": "Victim",
        "age": 44,
        "occupation": "Lead biochemist",
        "status": "Critical — induced coma",
        "background": "Feld spent six years developing Solenoid-7, a drought-resistant grain formula. He was weeks from publishing. His work was the flagship project of Helix Biotech and the subject of a pending corporate partnership.",
        "forensic": "Blunt-force trauma to the back of the head from a heavy glass reagent bottle. The angle suggests a right-handed blow from close range. No defensive wounds, meaning he was likely struck from behind. Blood alcohol was zero."
      },
      "suspects": [
        {
          "id": "simone-arden",
          "name": "Dr. Simone Arden",
          "role": "Senior research partner",
          "age": 39,
          "occupation": "Biochemist",
          "summary": "Feld's co-lead on Solenoid-7. Ambitious, polished, and publicly frustrated that Feld received top billing. She has the technical skill to clone a badge and the commercial contacts to sell the formula.",
          "background": "Arden has worked with Feld for four years. She negotiated with Vantara Agro on Helix's behalf, then watched the partnership collapse. She recently applied for a directorship at Vantara and was seen arguing with Feld on Friday.",
          "motive": "Sell Solenoid-7 to Vantara Agro, secure a directorship, and claim the breakthrough as her own.",
          "alibi": "Says she left the lab at 01:20 after finishing a cell assay and went home.",
          "relationship": "Co-lead researcher and professional rival.",
          "pressure": "Her application to Vantara depends on delivering a commercially viable asset.",
          "questions": [
            {
              "id": "q1",
              "text": "When did you leave the lab last night?",
              "answer": "Just after twenty past one. I finished the assay, saved the results, and drove home. I was in bed by two. I only heard about Aaron when HR called me this morning."
            },
            {
              "id": "q2",
              "text": "Why did you argue with Dr. Feld on Friday?",
              "answer": "Credit. I did half the work and he put his name first on the paper. I was angry, not violent. If I wanted to hurt him, I could have ruined his publication."
            },
            {
              "id": "q3",
              "text": "Your laptop connected to a badge-writing tool at 01:40.",
              "answer": "That tool is shared lab equipment. Anyone could have used my laptop; I left it charging in my office. The network log is not proof that I was sitting in front of it."
            },
            {
              "id": "q4",
              "text": "Vantara Agro received an offer for Solenoid-7 from your personal email.",
              "answer": "I sent a general inquiry about a different project weeks ago. You are twisting an email. I never offered Aaron's formula."
            }
          ]
        },
        {
          "id": "bo-lin",
          "name": "Bo Lin",
          "role": "Lab technician",
          "age": 28,
          "occupation": "Research technician",
          "summary": "Quiet and meticulous, Bo maintains the sample freezers and the badge-booking system. He was the only other person scheduled on the weekend rota.",
          "background": "Lin joined Helix two years ago and manages the cryo storage. He was denied a promotion last month. He has full freezer access but no authority to clone credentials.",
          "motive": "Resentment over a denied promotion, and knowledge of the sample's value.",
          "alibi": "In the cold-storage room from 01:30 to 02:20, then in the break room. A time-lapse camera shows the storage aisle but not every corner.",
          "relationship": "Technician who maintained the sample and its freezer.",
          "pressure": "He is the obvious person to blame if records are all anyone checks.",
          "questions": [
            {
              "id": "q1",
              "text": "Where were you during the theft?",
              "answer": "Cold storage, checking humidity in the tissue bank. Then the break room. I didn't go into the main lab. I only saw Aaron's car arrive around quarter to two."
            },
            {
              "id": "q2",
              "text": "Who can open the Solenoid rack?",
              "answer": "Aaron, Simone, and me. It needs a secondary code tied to the badge. Aaron's code is separate. I didn't use it. I don't even know it."
            },
            {
              "id": "q3",
              "text": "Did you clone Dr. Feld's badge?",
              "answer": "No. I don't have the writer. Simone borrowed it for a vendor demo last month and never returned it to the equipment cage. It's been in her office drawer since."
            },
            {
              "id": "q4",
              "text": "Did you see anyone else in the lab?",
              "answer": "A figure in a lab coat went past the cold-storage window at about half past one, heading toward the main lab. I thought it was Aaron, but the height was wrong. Aaron is tall. This person wasn't."
            }
          ]
        },
        {
          "id": "mara-voss",
          "name": "Mara Voss",
          "role": "Security lead",
          "age": 36,
          "occupation": "Security supervisor",
          "summary": "A former military police officer who controls every camera and door log at Helix. She found Feld and called the ambulance, but her patrol timing has gaps.",
          "background": "Voss has run Helix security for three years. She is under pressure after a previous breach. She was on a solo patrol during the critical window and has access to credential audit tools.",
          "motive": "Financial trouble and the opportunity to sell access, though there is no direct link to the formula.",
          "alibi": "On patrol through the west wing from 01:45 to 02:25. Her radio check-ins are logged, but there are no cameras in two stairwells.",
          "relationship": "Security supervisor with master door access.",
          "pressure": "A previous break-in damaged her reputation; another failure could end her career.",
          "questions": [
            {
              "id": "q1",
              "text": "Why did it take until 02:35 to find Dr. Feld?",
              "answer": "My patrol covers the west wing first. I checked the main lab at half past two and found him on the floor. I called it in immediately. The delay was the patrol route, not negligence."
            },
            {
              "id": "q2",
              "text": "Did you clone Feld's badge?",
              "answer": "I can audit credentials, not clone them. The reader shows a duplicate token signature. That requires physical access to his badge or the enrollment tool."
            },
            {
              "id": "q3",
              "text": "Who has access to the equipment cage?",
              "answer": "Researchers and security. The badge writer was signed out to Simone a month ago. I filed a reminder for its return. It never came back."
            },
            {
              "id": "q4",
              "text": "Did you see Simone Arden leave?",
              "answer": "I saw her in the west corridor at 01:58 when I passed her. She said she was checking a freezer alarm. I thought she'd already gone home. She was wearing her lab coat and carrying her shoulder bag."
            }
          ]
        }
      ],
      "witnesses": [
        {
          "id": "yara-osei",
          "name": "Yara Osei",
          "role": "Night cleaner",
          "statement": "I was cleaning the lobby around two o'clock when a woman in a lab coat came through the loading-dock corridor. She carried a silver case. I said good morning; she didn't answer. She went out the dock door. I didn't see her face clearly, but she was shorter than Dr. Feld.",
          "reliability": "High",
          "summary": "A shorter woman in a lab coat left through the loading dock with a silver case around 02:25.",
          "notes": "Osei has no access to the lab and has worked at Helix for five years."
        },
        {
          "id": "tomas-reid",
          "name": "Tomas Reid",
          "role": "Security patrol officer",
          "statement": "Dr. Feld's car entered the car park at 01:45. He signed in at the lobby reader. Ms. Arden's badge entered the lab corridor at 01:58 and exited through the loading dock at 02:31. I was at the front gate until 02:20; I didn't see her leave.",
          "reliability": "High",
          "summary": "Feld arrived at 01:45; Arden's badge entered the lab at 01:58 and exited the loading dock at 02:31.",
          "notes": "Reid's gate log is independent of the lab server."
        },
        {
          "id": "vantara-mail",
          "name": "Vantara Agro procurement",
          "role": "Corporate statement",
          "statement": "We received an unsolicited email from Dr. Simone Arden on Friday offering 'exclusive access to a drought-resistant grain platform' and a sample for validation. We did not respond. The email came from her personal address.",
          "reliability": "High",
          "summary": "Arden offered a sample of the formula to Vantara before the theft.",
          "notes": "The email is preserved in Vantara's compliance archive."
        }
      ],
      "evidence": [
        {
          "id": "e-badge",
          "name": "Cloned Badge Token",
          "category": "Digital",
          "summary": "Feld's badge was used at 02:14, but the signal was a cloned token and his real badge was in his locker.",
          "description": "The lab reader recorded Feld's credential at 02:14:09, but the token signature lacks the rolling cryptographic element present on genuine badges. A duplicate token was created from Feld's badge data. His physical badge was found in his gym locker, untouched.",
          "location": "Main lab door reader",
          "analysis": "Someone cloned Feld's credential. The clone writer was checked out to Simone Arden and never returned.",
          "tags": [
            "digital",
            "access",
            "clone"
          ],
          "relatedSuspects": [
            "simone-arden",
            "bo-lin"
          ],
          "foundAt": "03:10"
        },
        {
          "id": "e-access",
          "name": "Arden's Access Trail",
          "category": "Digital",
          "summary": "Simone Arden's badge entered the lab corridor at 01:58 and exited the loading dock at 02:31.",
          "description": "Door controllers show Arden entering the research corridor at 01:58:22, entering the main lab at 02:03:47, and exiting through the loading dock at 02:31:11. The loading dock camera shows a woman in a lab coat carrying a silver case.",
          "location": "Building access system",
          "analysis": "Arden was in the building during the theft, almost an hour after she claimed to have gone home. Her exit coincides with the cleaner's sighting.",
          "tags": [
            "timeline",
            "access",
            "alibi"
          ],
          "relatedSuspects": [
            "simone-arden"
          ],
          "foundAt": "03:20"
        },
        {
          "id": "e-freezer",
          "name": "Cryo-Freezer Log",
          "category": "Digital",
          "summary": "The Solenoid-7 rack opened at 02:16 using Feld's secondary code and removed one vial.",
          "description": "The freezer records a secondary-code unlock at 02:16:44, the rack door opening, and a single vial removal at 02:17:02. The code belongs to Feld. The sample's backup was never created; the stolen vial is the only viable culture.",
          "location": "Cryo-freezer, main lab",
          "analysis": "The thief knew the exact rack and Feld's secondary code. This was not a random break-in.",
          "tags": [
            "digital",
            "sample",
            "timeline"
          ],
          "relatedSuspects": [
            "simone-arden",
            "bo-lin"
          ],
          "foundAt": "03:25"
        },
        {
          "id": "e-laptop",
          "name": "Badge-Writer Connection",
          "category": "Digital",
          "summary": "The cloned badge was written at 01:40 from a laptop registered to Simone Arden's office.",
          "description": "The credential management server logged a badge-write operation at 01:40:12 from laptop HELIX-LT-27. The device is assigned to Dr. Simone Arden. The writer's serial matches the unit signed out to Arden and never returned to the equipment cage.",
          "location": "Credential server",
          "analysis": "Arden's laptop and the missing writer were used to clone Feld's badge 34 minutes before the lab door was opened. Her claim that she left at 01:20 is false.",
          "tags": [
            "digital",
            "premeditation",
            "badge"
          ],
          "relatedSuspects": [
            "simone-arden"
          ],
          "foundAt": "04:05"
        },
        {
          "id": "e-email",
          "name": "Vantara Offer Email",
          "category": "Digital",
          "summary": "Arden offered 'exclusive access' and a sample to Vantara Agro from her personal email on Friday.",
          "description": "The email, preserved by Vantara, says: 'I can provide an exclusive validation sample of Solenoid-7 and am prepared to discuss a senior appointment. The lead researcher is unaware of this conversation.' It was sent two days before the theft.",
          "location": "Vantara compliance archive",
          "analysis": "This ties the theft to a commercial buyer, a personal career motive, and a plan to bypass Feld entirely.",
          "tags": [
            "motive",
            "digital",
            "commerce"
          ],
          "relatedSuspects": [
            "simone-arden"
          ],
          "foundAt": "09:15"
        },
        {
          "id": "e-reagent",
          "name": "Bloodied Reagent Bottle",
          "category": "Forensic",
          "summary": "The weapon was a heavy reagent bottle from the bench, wiped clean but bearing Feld's blood.",
          "description": "The bottle contains traces of Feld's blood and a blend of solvents consistent with the lab bench. It was handled after the attack; all fingerprints were wiped. The impact angle matches a right-handed downward blow.",
          "location": "Floor beside the reagent bench",
          "analysis": "The attacker used an object already in the lab, suggesting familiarity. They had enough time to wipe prints, then fled through the loading dock.",
          "tags": [
            "forensic",
            "weapon",
            "attack"
          ],
          "relatedSuspects": [
            "simone-arden",
            "bo-lin"
          ],
          "foundAt": "02:45"
        },
        {
          "id": "e-camera",
          "name": "Corridor Camera Frame",
          "category": "Digital",
          "summary": "A figure approximately 171 cm tall, in a lab coat and shoulder bag, left toward the loading dock at 02:24.",
          "description": "The only working camera on the route shows a slim figure in a lab coat. Their face is obscured by a hood. Height markers place them at about 171 cm. Dr. Feld is 185 cm. Bo Lin is 178 cm. Simone Arden is 169 cm.",
          "location": "Maintenance corridor camera",
          "analysis": "The figure is too short to be Feld and closer to Arden's height. The shoulder bag matches the one she carries.",
          "tags": [
            "digital",
            "physical",
            "height"
          ],
          "relatedSuspects": [
            "simone-arden",
            "bo-lin",
            "mara-voss"
          ],
          "foundAt": "03:00"
        }
      ],
      "timeline": [
        {
          "id": "t1",
          "time": "01:20",
          "title": "Arden says she leaves",
          "detail": "Simone claims she finished her assay and drove home.",
          "source": "Suspect statement",
          "verified": false,
          "disputed": true,
          "actors": [
            "simone-arden"
          ]
        },
        {
          "id": "t2",
          "time": "01:40",
          "title": "Badge cloned",
          "detail": "The badge writer is used from Arden's laptop.",
          "source": "Credential server",
          "verified": true,
          "disputed": false,
          "actors": [
            "simone-arden"
          ]
        },
        {
          "id": "t3",
          "time": "01:45",
          "title": "Feld arrives unexpectedly",
          "detail": "Dr. Feld's car enters the car park; he signs in at the lobby.",
          "source": "Gate and lobby logs",
          "verified": true,
          "disputed": false,
          "actors": [
            "aaron-feld"
          ]
        },
        {
          "id": "t4",
          "time": "01:58",
          "title": "Arden re-enters lab corridor",
          "detail": "Her badge opens the research corridor door.",
          "source": "Door controller",
          "verified": true,
          "disputed": false,
          "actors": [
            "simone-arden"
          ]
        },
        {
          "id": "t5",
          "time": "02:14",
          "title": "Cloned badge opens lab",
          "detail": "A duplicate of Feld's token unlocks the main lab.",
          "source": "Lab reader",
          "verified": true,
          "disputed": false,
          "actors": [
            "simone-arden"
          ]
        },
        {
          "id": "t6",
          "time": "02:17",
          "title": "Sample removed",
          "detail": "The Solenoid-7 vial is taken from the cryo-freezer.",
          "source": "Freezer log",
          "verified": true,
          "disputed": false,
          "actors": [
            "simone-arden"
          ]
        },
        {
          "id": "t7",
          "time": "02:24",
          "title": "Figure leaves lab",
          "detail": "A 171 cm figure in a lab coat carries a case toward the loading dock.",
          "source": "Corridor camera",
          "verified": true,
          "disputed": false,
          "actors": [
            "simone-arden"
          ]
        },
        {
          "id": "t8",
          "time": "02:31",
          "title": "Arden exits",
          "detail": "Arden's badge opens the loading dock door.",
          "source": "Door controller",
          "verified": true,
          "disputed": false,
          "actors": [
            "simone-arden"
          ]
        },
        {
          "id": "t9",
          "time": "02:35",
          "title": "Feld found",
          "detail": "Security discovers the victim unconscious and calls an ambulance.",
          "source": "Security log",
          "verified": true,
          "disputed": false,
          "actors": [
            "mara-voss"
          ]
        }
      ],
      "contradictions": [
        {
          "id": "c-simone-time",
          "title": "Home by two?",
          "detail": "Arden says she left at 01:20. Her badge enters the lab corridor at 01:58, exits the loading dock at 02:31, and the cleaner sees a woman matching her description leave at 02:25.",
          "suspectId": "simone-arden",
          "evidenceIds": [
            "e-access",
            "e-camera"
          ],
          "questions": [
            "simone-arden:q1"
          ],
          "hint": "A statement about going home is easy to test against door logs."
        },
        {
          "id": "c-simone-clone",
          "title": "The borrowed laptop",
          "detail": "Arden says anyone could have used her laptop. The badge writer was checked out to her, never returned, and was used from her assigned device at 01:40 to create the clone.",
          "suspectId": "simone-arden",
          "evidenceIds": [
            "e-laptop",
            "e-badge"
          ],
          "questions": [
            "simone-arden:q3"
          ],
          "hint": "The clone and the writer share an owner. Compare the equipment cage records with the credential log."
        },
        {
          "id": "c-simone-email",
          "title": "An offer she didn't make",
          "detail": "Arden denies offering the formula to Vantara. The email from her personal address offers an exclusive Solenoid-7 sample and mentions a senior appointment — two days before the theft.",
          "suspectId": "simone-arden",
          "evidenceIds": [
            "e-email"
          ],
          "questions": [
            "simone-arden:q4"
          ],
          "hint": "The buyer kept the email. Read who it names and what it promises."
        }
      ],
      "motiveOptions": [
        {
          "id": "vantara",
          "text": "Sell Solenoid-7 to Vantara Agro and secure a senior position by claiming the breakthrough."
        },
        {
          "id": "promotion",
          "text": "Frame Bo Lin for the theft to eliminate a rival technician."
        },
        {
          "id": "debt",
          "text": "Pay off personal debts by selling lab equipment on the black market."
        },
        {
          "id": "revenge",
          "text": "Destroy Feld's research because he refused to share credit."
        }
      ],
      "methodOptions": [
        {
          "id": "clone",
          "text": "Cloned Feld's badge, entered after he unexpectedly arrived, stole the vial from the cryo-freezer, struck him when he interrupted her, and left through the loading dock."
        },
        {
          "id": "inside",
          "text": "Used Bo Lin's maintenance access, took the sample while Feld was away, and staged the attack to look like a break-in."
        },
        {
          "id": "security",
          "text": "Abused security master keys during a patrol, deleted the camera feed, and hid the vial in the patrol van."
        },
        {
          "id": "shipping",
          "text": "Mailed the sample out in a courier package before the theft was discovered."
        }
      ],
      "hints": [
        "The badge that opened the lab was a copy. Find the equipment used to make the copy.",
        "Dr. Feld arrived unexpectedly at 01:45. Reconstruct who else was in the building after that time.",
        "The stolen sample is worthless without a buyer. Look for commercial contact before the crime."
      ],
      "solution": {
        "culpritId": "simone-arden",
        "motiveId": "vantara",
        "methodId": "clone",
        "evidenceIds": [
          "e-badge",
          "e-access",
          "e-email"
        ],
        "headline": "The co-lead cloned her way into the lab and sold the breakthrough.",
        "summary": "Dr. Simone Arden cloned Aaron Feld's access badge, stole the only Solenoid-7 vial, and struck Feld when he arrived unexpectedly. She planned to sell the formula to Vantara Agro and use it to secure a senior position.",
        "explanation": [
          "The lab door was opened with a cloned token, not Feld's real badge. The badge-writer used to create it was checked out to Arden, and the operation came from her assigned laptop. Her claim that she left at 01:20 is contradicted by her own access trail.",
          "Arden's badge entered the lab corridor at 01:58 and exited via the loading dock at 02:31. The cleaner saw a woman matching her height and lab coat leave with a silver case at 02:25. Arden is 169 cm; the figure on camera is 171 cm.",
          "Feld's unexpected arrival at 01:45 turned a theft into an assault. He was struck from behind with a reagent bottle while Arden was stealing the vial from the cryo-freezer. She wiped the bottle and fled.",
          "The Vantara email establishes both motive and buyer. Arden offered an exclusive Solenoid-7 sample and a senior appointment two days before the theft, while telling Feld nothing. The sample was never intended for a rival lab — it was her personal leverage."
        ],
        "timelineReconstruction": [
          {
            "time": "01:20",
            "event": "Arden pretends to leave, but remains in the building."
          },
          {
            "time": "01:40",
            "event": "She clones Feld's badge using the writer and her laptop."
          },
          {
            "time": "02:14",
            "event": "The clone opens the lab. Feld, having arrived at 01:45, interrupts her at the freezer."
          },
          {
            "time": "02:31",
            "event": "After striking Feld and taking the vial, Arden exits through the loading dock."
          }
        ],
        "redHerring": "Bo Lin maintained the freezer and knew the sample's value, but he lacked the badge writer and his access trail does not enter the main lab. Mara Voss had master access but not the cloning tool, and her patrol logs place her in the west wing during the theft."
      }
    },
    "glasshouse.json": {
      "id": "glasshouse",
      "slug": "the-glasshouse-murder",
      "title": "The Glasshouse Murder",
      "subtitle": "A locked greenhouse. A dead botanist. A poison garden with one missing flower.",
      "difficulty": "medium",
      "estimatedMinutes": 7,
      "location": "Bellingham Botanical Gardens, Kent",
      "date": "Thursday, 26 March 2026",
      "timeWindow": "17:45 — 19:15",
      "description": "Dr. Iris Vale was found dead in the tropical glasshouse with a thermos of tea beside her. The door was locked from the outside. The cause looks like a heart attack — until the medical examiner notices the monkshood missing from the poison bed. Someone turned the garden's own collection into a weapon.",
      "briefing": "The glasshouse was closed to visitors at 18:00. Dr. Vale stayed behind to inspect a rare specimen. At 19:05 a volunteer found her collapsed beside the orchid benches. The door was locked. Vale's thermos contained a lethal dose of aconitine, and a freshly cut stem in the poison bed points to a killer who knew exactly which plant to choose.",
      "cover": {
        "accent": "#6CB38A",
        "secondary": "#2F6045",
        "motif": "glasshouse"
      },
      "scene": {
        "summary": "The tropical glasshouse is heavy with warm mist and the smell of wet soil. Dr. Vale lies between the orchid benches, one hand reaching toward her thermos. The locked door is intact. In the poison garden beyond the glass partition, a monkshood plant has been freshly cut.",
        "details": [
          "The victim has no visible injury. Her pupils are dilated and her lips are tinged blue.",
          "The thermos cup contains tea with a bitter, numbing smell.",
          "The glasshouse keypad shows an unlock at 18:22 and a lock at 18:34. Both used Eli Ward's staff code.",
          "Only Dr. Vale and Eli Ward have glasshouse codes; Margaret Hale has a physical master key.",
          "A monkshood stem in the poison bed has been cut cleanly. The missing flower is not in the compost.",
          "A pair of pruning gloves hangs in Eli Ward's potting shed, one fingertip stained brown."
        ],
        "initialObservations": [
          "Suspected plant poisoning",
          "Door locked from outside",
          "Fresh monkshood cutting"
        ]
      },
      "victim": {
        "name": "Dr. Iris Vale",
        "label": "Victim",
        "age": 58,
        "occupation": "Botanist and glasshouse director",
        "status": "Deceased — 18:55 (estimated)",
        "background": "Dr. Vale spent thirty years at Bellingham and was preparing to hand the glasshouse to a successor. She was strict about specimen records and had recently launched an internal audit of rare plant sales.",
        "forensic": "Aconitine poisoning. The alkaloid was ingested in tea and would cause numbness, arrhythmia, and death within 30–60 minutes. There are no defensive injuries. The dose was high, suggesting a concentrated plant extract rather than accidental exposure."
      },
      "suspects": [
        {
          "id": "eli-ward",
          "name": "Eli Ward",
          "role": "Research assistant",
          "age": 25,
          "occupation": "Botany assistant",
          "summary": "Iris Vale's protégé and the only other person with a glasshouse code. Charming and knowledgeable, he runs the garden's social media and knows the rare-plant trade.",
          "background": "Ward joined Bellingham three years ago. He has a side business selling rare cuttings online, which he describes as legal propagation. Vale discovered discrepancies in the specimen log two weeks ago and told him she was reviewing the records.",
          "motive": "Vale was about to expose his illegal trade in rare plant cuttings and end his career.",
          "alibi": "Says he left at 18:10 and spent the next hour in the potting shed, away from the main glasshouse.",
          "relationship": "Mentee, research assistant, and glasshouse codeholder.",
          "pressure": "The missing monkshood and the audit both point toward him.",
          "questions": [
            {
              "id": "q1",
              "text": "Where were you between six and half past six?",
              "answer": "In the potting shed, repotting seedlings. I left the glasshouse at ten past six. Iris wanted to check the orchids alone. I didn't go back until the alarm was raised."
            },
            {
              "id": "q2",
              "text": "Your code unlocked and locked the glasshouse door during that time.",
              "answer": "That can't be right. I didn't use the keypad. Iris sometimes uses my code when her hands are full; everyone shares. The log must be confused."
            },
            {
              "id": "q3",
              "text": "A monkshood flower was cut from the poison bed. Do you know aconitine?",
              "answer": "Every botanist here knows it. It's why the poison garden is behind glass. I've never extracted it. I wouldn't even know the dose."
            },
            {
              "id": "q4",
              "text": "Vale was auditing rare plant sales. Did she find your online shop?",
              "answer": "I sell propagated succulents and common orchids. She knew about it. She didn't approve, but it wasn't a secret. The audit was about provenance, not me."
            }
          ]
        },
        {
          "id": "margaret-hale",
          "name": "Margaret Hale",
          "role": "Head gardener",
          "age": 52,
          "occupation": "Head gardener",
          "summary": "A blunt, weather-beaten veteran who has worked the gardens for twenty-eight years. She has a master key and clashed with Vale over budget cuts.",
          "background": "Hale built the poison garden and resents Vale's plan to close it as part of a safety review. She has a physical master key that opens every glasshouse door and knows the properties of every plant on site.",
          "motive": "Prevent Vale from closing the poison garden, or retaliate for years of budget cuts.",
          "alibi": "In the Jubilee greenhouse with two volunteers from 18:00 to 19:00. The volunteers and a time-stamped watering log support it.",
          "relationship": "Senior gardener and keeper of the poison collection.",
          "pressure": "The poison garden is her legacy and is being shut down.",
          "questions": [
            {
              "id": "q1",
              "text": "Where were you during the relevant hour?",
              "answer": "Jubilee greenhouse, watering the ferns with two volunteers. We logged every tray. I didn't set foot in the tropical house until the volunteer shouted for help."
            },
            {
              "id": "q2",
              "text": "You had access to the poison bed. Why would Eli Ward need it?",
              "answer": "The poison bed is behind a glass partition, not a vault. Anyone with a staff code can walk in. Eli has been eyeing those specimens for months. He thinks I don't notice."
            },
            {
              "id": "q3",
              "text": "You disagreed with Dr. Vale about the poison garden.",
              "answer": "We disagreed about everything. She wanted to concrete over thirty years of work. But I don't kill people over a garden. I gave her cuttings for her own experiments. She was difficult, not evil."
            },
            {
              "id": "q4",
              "text": "Did you see Eli near the glasshouse?",
              "answer": "I saw him leave in a hurry around half past six. He had his satchel and a thermos in his hand. He looked ill. I assumed he'd eaten something bad."
            }
          ]
        },
        {
          "id": "priya-sen",
          "name": "Priya Sen",
          "role": "Rare plant dealer",
          "age": 36,
          "occupation": "Botanical trader",
          "summary": "A well-dressed dealer with an encyclopedic knowledge of rare species. She visited Vale that afternoon to negotiate a specimen swap and left angry.",
          "background": "Sen supplies rare orchids to private collectors. She wanted Vale's prize paphiopedilum and was refused. Their argument was overheard in the visitor center. She left the site at 18:00.",
          "motive": "Revenge for a refused sale, or acquisition of the rare orchid through theft.",
          "alibi": "Her signed visitor pass records an exit at 18:00. A parking camera shows her car leaving at 18:03.",
          "relationship": "External dealer and occasional source for the glasshouse.",
          "pressure": "Vale threatened to report her for trading restricted species.",
          "questions": [
            {
              "id": "q1",
              "text": "Why did you argue with Dr. Vale?",
              "answer": "She promised me a division of the paphiopedilum, then changed her mind. I was annoyed. I said things I regret. But I left before six; the gate log proves it."
            },
            {
              "id": "q2",
              "text": "You know how to extract aconitine.",
              "answer": "I know the plant. Knowing a plant's chemistry and murdering someone with it are different things. I sell legally propagated stock; I don't make poison."
            },
            {
              "id": "q3",
              "text": "Who else knew the value of the missing monkshood?",
              "answer": "Eli. He handled the poison-garden inventory. He kept asking whether the aconitum was 'properly documented'. I thought he was being diligent. Turns out he was appraising it."
            },
            {
              "id": "q4",
              "text": "Did you notice anything unusual when you left?",
              "answer": "Eli was walking toward the glasshouse with his satchel. He had a thermos. I thought he was taking Dr. Vale tea. It was a nice gesture — or so I assumed."
            }
          ]
        }
      ],
      "witnesses": [
        {
          "id": "tessa-quinn",
          "name": "Tessa Quinn",
          "role": "Volunteer gardener",
          "statement": "At about ten past six, I saw Eli Ward go into the tropical house with a thermos. At half past six he came out without it, locked the door, and walked toward the potting shed. He looked pale. When I went to bring Dr. Vale her evening checklist at five past seven, the door was locked and she didn't answer.",
          "reliability": "High",
          "summary": "Eli entered with a thermos at 18:10 and left at 18:30, locking the door.",
          "notes": "Quinn has volunteered for six years and has no access to the poison garden."
        },
        {
          "id": "owen-park",
          "name": "Owen Park",
          "role": "Groundskeeper",
          "statement": "I was raking leaves by the conifer walk. I saw Eli Ward come out of the tropical house around half six. He was moving fast and kept his head down. I called to him and he ignored me. He went into the potting shed and shut the door.",
          "reliability": "Medium",
          "summary": "Eli left the glasshouse quickly at 18:30 and ignored a colleague.",
          "notes": "Park's view was partly blocked by hedges; his timing is approximate."
        },
        {
          "id": "botanical-board",
          "name": "Bellingham board minutes",
          "role": "Documentary statement",
          "statement": "Dr. Vale requested the audit after discovering that eleven rare specimens had been logged as 'propagated' but sold to external collectors. The board was due to discuss the missing plants on Friday. Vale had not named a suspect in writing.",
          "reliability": "High",
          "summary": "Vale's audit concerned missing rare specimens and their sale.",
          "notes": "The audit documents were recovered from her office computer."
        }
      ],
      "evidence": [
        {
          "id": "e-tea",
          "name": "Aconitine in the Thermos",
          "category": "Forensic",
          "summary": "The thermos tea contains a lethal dose of aconitine, extracted from monkshood.",
          "description": "The thermos cup holds tea with a high concentration of aconitine. The compound is water-soluble and was likely steeped directly from a fresh plant. No sediment of plant tissue remains, suggesting a filtered extract. The victim drank roughly half a cup.",
          "location": "Beside the victim",
          "analysis": "This was not accidental exposure. Aconitine requires deliberate preparation, and the thermos was brought to the glasshouse from outside.",
          "tags": [
            "forensic",
            "poison",
            "tea"
          ],
          "relatedSuspects": [
            "eli-ward",
            "margaret-hale",
            "priya-sen"
          ],
          "foundAt": "19:20"
        },
        {
          "id": "e-monkshood",
          "name": "Cut Monkshood Stem",
          "category": "Forensic",
          "summary": "A fresh cut in the poison bed matches the aconitine used and the missing flower.",
          "description": "A monk's-hood plant in the poison garden has been cut at a sharp angle with pruning shears. The sap is still wet. A trace of the same sap was found on the blade of Eli Ward's pruning knife in his shed, along with a brown stain on his glove.",
          "location": "Poison garden",
          "analysis": "The killer used the garden's own aconitum. The cutting tool links the plant to Eli Ward's equipment.",
          "tags": [
            "forensic",
            "plant",
            "weapon"
          ],
          "relatedSuspects": [
            "eli-ward",
            "margaret-hale"
          ],
          "foundAt": "19:30"
        },
        {
          "id": "e-keypad",
          "name": "Glasshouse Keypad Log",
          "category": "Digital",
          "summary": "Eli Ward's staff code unlocked the glasshouse at 18:22 and locked it at 18:34.",
          "description": "The keypad records code EW-04 at 18:22:11 (unlock) and again at 18:34:06 (lock). No other code or master key was used between those times. Eli claims he left at 18:10 and did not return.",
          "location": "Tropical glasshouse door",
          "analysis": "This places Eli inside the glasshouse during the period when the poison was most likely administered. His statement about leaving at 18:10 is false.",
          "tags": [
            "digital",
            "access",
            "timeline"
          ],
          "relatedSuspects": [
            "eli-ward"
          ],
          "foundAt": "19:40"
        },
        {
          "id": "e-camera",
          "name": "Visitor-Centre Camera",
          "category": "Digital",
          "summary": "Eli Ward was recorded walking toward the glasshouse at 18:10 carrying a thermos, and leaving at 18:31 without it.",
          "description": "The visitor-centre camera covers the path to the tropical house. At 18:10 Eli passes with a stainless thermos. At 18:31 he returns without the thermos, walking quickly. Dr. Vale's own thermos is later found beside her body.",
          "location": "Visitor centre exterior camera",
          "analysis": "The thermos in the footage is the same model found at the scene. Eli had both the opportunity and the means to deliver the poisoned tea.",
          "tags": [
            "digital",
            "timeline",
            "thermos"
          ],
          "relatedSuspects": [
            "eli-ward"
          ],
          "foundAt": "19:50"
        },
        {
          "id": "e-shop",
          "name": "Rare Plant Sales Messages",
          "category": "Digital",
          "summary": "Eli's encrypted shop account shows sales of rare specimens logged as 'propagated' at Bellingham.",
          "description": "Recovered messages show Eli arranging sales of at least eleven rare plants, several of which match the missing specimens in Vale's audit. One buyer asks for 'the blue monkshood' and Eli replies: 'Not yet. It's still in the poison bed. Soon.'",
          "location": "Eli Ward's phone backup",
          "analysis": "This establishes both the illegal trade and his access to the monkshood. It also supplies a motive: Vale's audit would have exposed him.",
          "tags": [
            "motive",
            "digital",
            "trafficking"
          ],
          "relatedSuspects": [
            "eli-ward"
          ],
          "foundAt": "20:20"
        },
        {
          "id": "e-email",
          "name": "Vale's Draft Audit Email",
          "category": "Documentary",
          "summary": "Vale drafted an email to the board naming Eli's specimen discrepancies for Friday.",
          "description": "In Vale's draft folder is an email to the botanical board: 'The discrepancies cluster around E. Ward's propagation records. I will present the evidence Friday and recommend suspension pending investigation.' The draft is dated Thursday, 17:40.",
          "location": "Vale's office computer",
          "analysis": "Vale was preparing to expose Eli the next day. The timing gives him a strong motive to silence her that evening.",
          "tags": [
            "motive",
            "documentary",
            "audit"
          ],
          "relatedSuspects": [
            "eli-ward"
          ],
          "foundAt": "20:35"
        },
        {
          "id": "e-volunteer",
          "name": "Volunteer Timing",
          "category": "Documentary",
          "summary": "Margaret Hale was in the Jubilee greenhouse with two volunteers during the murder window.",
          "description": "The Jubilee watering log records three people, including Margaret Hale, working from 18:02 to 19:02. The volunteers independently confirm she never left. The Jubilee greenhouse is 120 metres from the tropical house.",
          "location": "Jubilee greenhouse",
          "analysis": "Hale had a motive and master-key access, but her alibi is corroborated by two witnesses and a logging system.",
          "tags": [
            "alibi",
            "timeline",
            "documentary"
          ],
          "relatedSuspects": [
            "margaret-hale"
          ],
          "foundAt": "19:15"
        }
      ],
      "timeline": [
        {
          "id": "t1",
          "time": "17:40",
          "title": "Vale drafts the audit email",
          "detail": "She names Eli Ward's propagation records and plans to present evidence Friday.",
          "source": "Vale's computer",
          "verified": true,
          "disputed": false,
          "actors": [
            "iris-vale",
            "eli-ward"
          ]
        },
        {
          "id": "t2",
          "time": "17:50",
          "title": "Priya Sen leaves",
          "detail": "The dealer exits after a tense negotiation and argument.",
          "source": "Visitor log and parking camera",
          "verified": true,
          "disputed": false,
          "actors": [
            "priya-sen"
          ]
        },
        {
          "id": "t3",
          "time": "18:00",
          "title": "Glasshouse closes",
          "detail": "Visitors leave. Vale remains to inspect the orchids.",
          "source": "Visitor log",
          "verified": true,
          "disputed": false,
          "actors": [
            "iris-vale"
          ]
        },
        {
          "id": "t4",
          "time": "18:10",
          "title": "Eli arrives with thermos",
          "detail": "Camera shows Eli walking toward the glasshouse with a thermos.",
          "source": "Visitor-centre camera",
          "verified": true,
          "disputed": false,
          "actors": [
            "eli-ward"
          ]
        },
        {
          "id": "t5",
          "time": "18:22",
          "title": "Door unlocked with Eli's code",
          "detail": "The glasshouse keypad records his staff code.",
          "source": "Keypad log",
          "verified": true,
          "disputed": false,
          "actors": [
            "eli-ward"
          ]
        },
        {
          "id": "t6",
          "time": "18:34",
          "title": "Door locked",
          "detail": "The keypad is used again to lock the glasshouse.",
          "source": "Keypad log",
          "verified": true,
          "disputed": false,
          "actors": [
            "eli-ward"
          ]
        },
        {
          "id": "t7",
          "time": "18:55",
          "title": "Vale collapses",
          "detail": "Aconitine causes fatal arrhythmia beside the orchid benches.",
          "source": "Medical examiner estimate",
          "verified": true,
          "disputed": false,
          "actors": [
            "iris-vale"
          ]
        },
        {
          "id": "t8",
          "time": "19:05",
          "title": "Body found",
          "detail": "Tessa Quinn finds Vale through the glass and calls for help.",
          "source": "Witness: Tessa Quinn",
          "verified": true,
          "disputed": false,
          "actors": [
            "tessa-quinn"
          ]
        }
      ],
      "contradictions": [
        {
          "id": "c-eli-glasshouse",
          "title": "He never went back",
          "detail": "Eli says he left at 18:10 and stayed in the potting shed. His staff code unlocked the glasshouse at 18:22 and locked it at 18:34, and two witnesses saw him leave at 18:30.",
          "suspectId": "eli-ward",
          "evidenceIds": [
            "e-keypad",
            "e-camera"
          ],
          "questions": [
            "eli-ward:q1"
          ],
          "hint": "Door logs and eyewitnesses disagree with Eli's shed alibi."
        },
        {
          "id": "c-eli-monkshood",
          "title": "The gardener's knife",
          "detail": "Eli denies extracting aconitine. A fresh monkshood cut in the poison bed matches sap on his pruning knife and a brown stain on his glove.",
          "suspectId": "eli-ward",
          "evidenceIds": [
            "e-monkshood",
            "e-tea"
          ],
          "questions": [
            "eli-ward:q3"
          ],
          "hint": "The poison source is a plant in the garden. Find what cut it."
        },
        {
          "id": "c-eli-motive",
          "title": "Propagation or theft?",
          "detail": "Eli describes his side business as harmless propagation. His messages arrange sales of missing specimens and mention the blue monkshood 'still in the poison bed'.",
          "suspectId": "eli-ward",
          "evidenceIds": [
            "e-shop",
            "e-email"
          ],
          "questions": [
            "eli-ward:q4"
          ],
          "hint": "Read the shop messages alongside Vale's draft audit email."
        }
      ],
      "motiveOptions": [
        {
          "id": "exposure",
          "text": "Silence Vale before she exposed his illegal trade in rare plant cuttings."
        },
        {
          "id": "garden",
          "text": "Stop Vale from closing the poison garden by force."
        },
        {
          "id": "sale",
          "text": "Acquire the rare orchid after Priya Sen was refused."
        },
        {
          "id": "inheritance",
          "text": "Inherit Vale's private botanical estate."
        }
      ],
      "methodOptions": [
        {
          "id": "aconitine",
          "text": "Extracted aconitine from the poison-garden monkshood, poisoned Vale's thermos, and left her locked inside."
        },
        {
          "id": "injection",
          "text": "Injected her with a plant alkaloid while she was examining the orchids."
        },
        {
          "id": "gas",
          "text": "Released toxic fumes into the sealed glasshouse and waited outside."
        },
        {
          "id": "fall",
          "text": "Struck her during an argument and staged a collapse beside the benches."
        }
      ],
      "hints": [
        "The door was locked from outside, so the killer had a code or a key. Check the keypad log.",
        "The poison came from the garden itself. Look for a fresh cut and the tool that made it.",
        "Vale's audit was due Friday. Who would lose everything if it went ahead?"
      ],
      "solution": {
        "culpritId": "eli-ward",
        "motiveId": "exposure",
        "methodId": "aconitine",
        "evidenceIds": [
          "e-tea",
          "e-keypad",
          "e-monkshood"
        ],
        "headline": "The protégé used the poison garden to bury the audit.",
        "summary": "Eli Ward extracted aconitine from the poison-garden monkshood, poisoned Iris Vale's thermos, and left her locked in the tropical glasshouse. Vale was preparing to expose his illegal trade in rare plant cuttings the next morning.",
        "explanation": [
          "Vale's thermos contained a lethal dose of aconitine. The poison garden had a fresh monkshood cut, and matching sap was found on Eli Ward's pruning knife and glove. He knew the plant, had access to the bed, and had prepared the extract.",
          "Eli claimed he left at 18:10 and spent the hour in the potting shed. His staff code unlocked the glasshouse at 18:22 and locked it at 18:34. The visitor-centre camera shows him arriving with a thermos and leaving without it.",
          "Tessa Quinn saw him leave the glasshouse at 18:30 and lock the door. Owen Park saw him hurry away and ignore a colleague. Vale was alone inside, already showing symptoms.",
          "The motive is documented in Vale's draft audit email and Eli's sales messages. Vale planned to present evidence of missing specimens on Friday; Eli was selling those specimens online and had already discussed the blue monkshood as stock. He killed to stop the audit."
        ],
        "timelineReconstruction": [
          {
            "time": "17:40",
            "event": "Vale drafts an email naming Eli's specimen discrepancies and plans to present it Friday."
          },
          {
            "time": "18:10",
            "event": "Eli arrives at the glasshouse with a thermos of poisoned tea."
          },
          {
            "time": "18:22",
            "event": "His staff code unlocks the door. He leaves the thermos with Vale."
          },
          {
            "time": "18:34",
            "event": "He locks the glasshouse using his code, leaving Vale inside to die."
          }
        ],
        "redHerring": "Margaret Hale had master access and a bitter dispute about the poison garden, but she was watering the Jubilee greenhouse with two volunteers throughout the murder window. Priya Sen argued with Vale, but her car left at 18:03. Eli is the only person whose code, tool, camera trail, and motive all align."
      }
    },
    "studio-4.json": {
      "id": "studio-4",
      "slug": "echoes-in-studio-4",
      "title": "Echoes in Studio 4",
      "subtitle": "Jonah Cross was dead before the show ended. His voice kept broadcasting.",
      "difficulty": "hard",
      "estimatedMinutes": 9,
      "location": "Radio Meridian, Studio 4",
      "date": "Friday, 27 March 2026",
      "timeWindow": "21:10 — 23:20",
      "description": "At 23:12, security found radio host Jonah Cross dead in Studio 4. He had been on air until 23:00. Producers, engineers and a co-host all insist they heard him speaking live. The audio files say the voice was recorded thirty minutes before it was broadcast. The killer used the station's own schedule as an alibi.",
      "briefing": "Jonah Cross's nightly current-affairs show ended at 23:00. Twelve minutes later he was found beside the mixing desk with a head wound. The studio door was locked and the broadcast ran without interruption. To solve this, you must separate what listeners heard from what actually happened inside Studio 4.",
      "cover": {
        "accent": "#B86F8A",
        "secondary": "#653347",
        "motif": "studio"
      },
      "scene": {
        "summary": "Studio 4 is a soundproofed capsule of foam panels and blinking equipment. Jonah Cross lies beside the mixing desk. A heavy cable reel rests against the wall, a dark smear on its rim. The ON AIR light is still glowing, though the broadcast ended twelve minutes ago.",
        "details": [
          "Death was caused by blunt-force trauma to the left temple. Estimated time of death: 22:35–22:45.",
          "A heavy metal cable reel bears a bloodstain and has been wiped of fingerprints.",
          "The studio door was locked from inside, but its electronic log records two keycard entries around the time of death.",
          "The final 25 minutes of the broadcast were a pre-recorded interview, not live audio.",
          "Jonah's microphone was muted at 22:35 and never unmuted.",
          "A producer's playout account queued the pre-recorded file at 22:34."
        ],
        "initialObservations": [
          "Death before broadcast ended",
          "Final segment pre-recorded",
          "Studio bloodstain on cable reel"
        ]
      },
      "victim": {
        "name": "Jonah Cross",
        "label": "Victim",
        "age": 48,
        "occupation": "Radio host and investigative journalist",
        "status": "Deceased — 22:40 (estimated)",
        "background": "Jonah hosted Nightline for eleven years. He was known for aggressive interviews and a confidential source network called 'the Ledger'. He had recently accused the station of protecting someone who sold source identities to a rival network.",
        "forensic": "A single blunt-force impact to the left temple, delivered from close range. The weapon was a metal cable reel. Death was rapid. No defensive wounds. A faint transfer of silver paint on the victim's shirt matches the reel's chipped rim."
      },
      "suspects": [
        {
          "id": "lena-marn",
          "name": "Lena Marn",
          "role": "Producer",
          "age": 41,
          "occupation": "Senior producer",
          "summary": "The only person who controlled the broadcast clock, the playout queue, and Jonah's schedule. Calm and precise, she was quick to call the death a tragic accident.",
          "background": "Lena produced Nightline for six years. She had access to the source-management system and the station's playout software. Jonah had recently confronted her about an anonymous leak to a rival network.",
          "motive": "Jonah was preparing to expose her for selling the Ledger source list to a rival broadcaster.",
          "alibi": "In the control room throughout the broadcast, speaking to Jonah through the glass. She says he was alive at 23:00.",
          "relationship": "Producer, gatekeeper of the show, and secret source-list leaker.",
          "pressure": "A station investigation into the source leak was scheduled for Monday.",
          "questions": [
            {
              "id": "q1",
              "text": "When did you last see Jonah alive?",
              "answer": "At the end of the show. He waved through the studio glass and gave me a thumbs-up. I was in the control room. I didn't go in afterward; I assumed he was reviewing the recording."
            },
            {
              "id": "q2",
              "text": "Why was the final segment pre-recorded?",
              "answer": "It was a scheduled interview special. Jonah wanted a clean edit for the podcast. That's standard. The fact that it was pre-recorded doesn't mean anything sinister."
            },
            {
              "id": "q3",
              "text": "Your keycard opened Studio 4 at 22:36 and again at 22:42.",
              "answer": "I never went in. I lent my card to Priya earlier for a patch panel check. She must have used it. I was at the control desk the whole time. Ask anyone who saw me."
            },
            {
              "id": "q4",
              "text": "Jonah accused you of selling the Ledger list. What did you say to him?",
              "answer": "He was paranoid. The Ledger was his obsession. I told him to take a week off. We argued, but I did not kill him. If he had proof, he would have gone to the board, not confronted me."
            }
          ]
        },
        {
          "id": "theo-lang",
          "name": "Theo Lang",
          "role": "Co-host",
          "age": 35,
          "occupation": "Broadcaster",
          "summary": "Jonah's younger co-host, ambitious and openly frustrated by playing second microphone. He argued with Jonah on air twenty minutes before the murder.",
          "background": "Theo has co-hosted Nightline for two years. He wants his own show and believed Jonah blocked his promotion. Their on-air argument about a guest booking was clipped and shared widely.",
          "motive": "Replace Jonah as the station's lead host.",
          "alibi": "In the production booth from 22:15 to 23:00, editing a segment. The booth is adjacent to Studio 4 and shares a window.",
          "relationship": "Co-host and professional rival.",
          "pressure": "Station management had warned him about the on-air argument.",
          "questions": [
            {
              "id": "q1",
              "text": "Tell me about the on-air argument.",
              "answer": "He cut off my interview to take a call. It was humiliating. I shouted. It wasn't the first time. But I was in the booth when he died; the window was right there."
            },
            {
              "id": "q2",
              "text": "What did you hear after 22:35?",
              "answer": "The interview special playing. It sounded normal. I saw Jonah through the glass once, but only his back. Lena was at the control desk. I was wearing headphones, editing."
            },
            {
              "id": "q3",
              "text": "Did you know the final segment was pre-recorded?",
              "answer": "Of course. I recorded my parts yesterday. But Jonah's voice was on it too. The whole thing was scheduled. It doesn't explain why he was dead."
            },
            {
              "id": "q4",
              "text": "Did Jonah tell you what he suspected about Lena?",
              "answer": "He said she'd been meeting someone from a rival network. He had a copy of the transfer in his notebook. He was going to confront her before Monday's board meeting."
            }
          ]
        },
        {
          "id": "priya-shah",
          "name": "Priya Shah",
          "role": "Broadcast engineer",
          "age": 29,
          "occupation": "Audio engineer",
          "summary": "The station's systems expert, currently on a final warning after a broadcast failure. She knows how to make a pre-recorded file sound live.",
          "background": "Priya maintains the playout servers and studio equipment. She was working in the server room during the broadcast. She has admin access to the audio system but no access to the source list.",
          "motive": "Johan blamed her for a previous audio failure and threatened to have her fired.",
          "alibi": "In the server room from 22:20 to 23:05, resolving a log error. The keycard log and a remote support call support it.",
          "relationship": "Station engineer; fixed the audio system Jonah publicly criticised.",
          "pressure": "A final warning and a possible dismissal.",
          "questions": [
            {
              "id": "q1",
              "text": "Could someone fake a live broadcast?",
              "answer": "With access to the playout queue, yes. You load a file, tag it as live, and let it run. The ON AIR light stays on. The station hears the feed, not the room. Any producer can do it. It isn't hard."
            },
            {
              "id": "q2",
              "text": "Where were you during the murder?",
              "answer": "Server room. I was on a remote call with the vendor, fixing a metadata error. The door log shows me entering at 22:20 and leaving at 23:05. I didn't go anywhere near Studio 4."
            },
            {
              "id": "q3",
              "text": "Did you lend anyone your access card?",
              "answer": "No. Lena asked to borrow it around six, but I said no. My card was in my pocket all night. She was annoyed. She said she needed to get into the cabinet below the control desk."
            },
            {
              "id": "q4",
              "text": "Who controls the playout queue?",
              "answer": "The producer on duty. Lena's account. We engineers can override, but she doesn't need an override. She schedules the whole show. If a file was queued at 22:34, it was queued by her account."
            }
          ]
        },
        {
          "id": "marcus-vale",
          "name": "Marcus Vale",
          "role": "Night security",
          "age": 54,
          "occupation": "Security guard",
          "summary": "A quiet night guard who found the body. He admits he did not check Studio 4 when the ON AIR light stayed on after the broadcast ended.",
          "background": "Vale has worked nights at the station for eight years. He knew Jonah well and often brought him coffee. He was on the third floor during the relevant hour and has keys to the outer doors, but not the studio.",
          "motive": "None established. He was close to Jonah and visibly shaken.",
          "alibi": "Patrolling floors two to four from 22:20 to 23:05. The patrol app records check-ins at 22:26, 22:48 and 23:03.",
          "relationship": "Night guard and informal friend of the victim.",
          "pressure": "He blames himself for not entering the studio sooner.",
          "questions": [
            {
              "id": "q1",
              "text": "How did you find the body?",
              "answer": "The ON AIR light was still on at ten past eleven. I knocked, got no answer, and let myself into the outer studio lobby. The inner door was unlocked. Jonah was on the floor. I called emergency services."
            },
            {
              "id": "q2",
              "text": "Why didn't you check earlier?",
              "answer": "The show ended at eleven and I was on the far side of the building. I assumed he was reviewing the recording. He often stayed late. I did my rounds and came back when the light bothered me."
            },
            {
              "id": "q3",
              "text": "Did you see Lena Marn near the studio?",
              "answer": "I saw her walking from the studio corridor around quarter to eleven. She had her headphones around her neck and looked angry. She said Jonah was being difficult and she was going home."
            },
            {
              "id": "q4",
              "text": "Who normally locks Studio 4?",
              "answer": "The producer or the host. Lena usually locks up after the show. Security only checks the outer doors. The inner studio door locks automatically when it closes."
            }
          ]
        }
      ],
      "witnesses": [
        {
          "id": "ana-duarte",
          "name": "Ana Duarte",
          "role": "Night cleaner",
          "statement": "I was polishing the corridor floor outside Studio 4 at about twenty to eleven. I saw Ms. Marn go into the studio. She came out a few minutes later and shut the door hard. She didn't look at me. I remember because she usually says goodnight.",
          "reliability": "High",
          "summary": "Saw Lena Marn enter Studio 4 around 22:40 and leave minutes later.",
          "notes": "Duarte was not interviewed until after the body was found and had no knowledge of the keycard logs."
        },
        {
          "id": "ollie-brant",
          "name": "Ollie Brant",
          "role": "Control-room assistant",
          "statement": "Lena was at the control desk when the interview special started, then I went to get coffee at 22:35. She wasn't there when I came back at 22:45. She returned around 22:50 and told me she had been checking the studio. The broadcast never dropped.",
          "reliability": "Medium",
          "summary": "Lena left the control room between 22:35 and 22:45 and returned at 22:50.",
          "notes": "Brant was a temp and did not have studio access."
        },
        {
          "id": "listener-log",
          "name": "Listener call log",
          "role": "Technical statement",
          "statement": "There were no live callers after 22:31. The broadcast's final segment contains the same ambient gap at 22:47 as the pre-recorded file created at 21:12. The playout log shows a file cue at 22:34 and no live microphone input after 22:35.",
          "reliability": "High",
          "summary": "The last 25 minutes were pre-recorded; Jonah's microphone was silent.",
          "notes": "The station's audio logger stores the master feed independently of the playout system."
        }
      ],
      "evidence": [
        {
          "id": "e-audio",
          "name": "Audio Fingerprint Match",
          "category": "Digital",
          "summary": "The final 25 minutes of the broadcast were a pre-recorded file with a telltale ambient gap.",
          "description": "The master audio log shows no live microphone input after 22:35. The broadcast from 22:35 to 23:00 matches a pre-recorded file created at 21:12, including a distinctive 0.8-second ambient dropout at 22:47. A live studio feed cannot contain a pre-existing dropout.",
          "location": "Audio logging server",
          "analysis": "Jonah was not broadcasting live after 22:35. His voice after that time proves nothing about his location or health.",
          "tags": [
            "digital",
            "audio",
            "timeline"
          ],
          "relatedSuspects": [
            "lena-marn",
            "priya-shah"
          ],
          "foundAt": "23:40"
        },
        {
          "id": "e-door",
          "name": "Studio 4 Keycard Log",
          "category": "Digital",
          "summary": "Lena Marn's keycard unlocked Studio 4 at 22:36 and 22:42.",
          "description": "The studio door controller records Lena Marn's card opening the inner door at 22:36:12 and again at 22:42:44. No other card was used. The outer door log shows no entry by Priya Shah or Theo Lang during that window.",
          "location": "Studio 4 door controller",
          "analysis": "Lena was inside the studio during the estimated time of death. Her claim that she never entered is false, and her borrowed-card explanation is contradicted by Priya.",
          "tags": [
            "digital",
            "access",
            "timeline"
          ],
          "relatedSuspects": [
            "lena-marn"
          ],
          "foundAt": "23:45"
        },
        {
          "id": "e-weapon",
          "name": "Cable Reel",
          "category": "Forensic",
          "summary": "A metal cable reel with a bloodstain and chipped silver paint was wiped clean.",
          "description": "The reel's rim carries Jonah's blood and a silver paint transfer matching a mark on his shirt. The surface was wiped with a paper towel found in the studio bin. A partial palm smudge remains on the underside, sized for a small hand.",
          "location": "Studio 4, beside mixing desk",
          "analysis": "The killer used a heavy object already in the studio and took time to wipe it. The reel was not moved afterward, suggesting the killer knew where it belonged.",
          "tags": [
            "forensic",
            "weapon",
            "studio"
          ],
          "relatedSuspects": [
            "lena-marn",
            "theo-lang"
          ],
          "foundAt": "23:55"
        },
        {
          "id": "e-playout",
          "name": "Playout Queue Record",
          "category": "Digital",
          "summary": "Lena's producer account queued the pre-recorded interview at 22:34.",
          "description": "The playout server logs a queue command at 22:34:08 from user LMARN. The command inserted 'Nightline Interview Special — Final' into the live slot and marked it as live. No engineer override was used. The file duration is 25 minutes.",
          "location": "Playout server",
          "analysis": "Lena controlled the switch to pre-recorded audio. She could then leave the control room while the station believed Jonah was still live.",
          "tags": [
            "digital",
            "broadcast",
            "premeditation"
          ],
          "relatedSuspects": [
            "lena-marn"
          ],
          "foundAt": "23:50"
        },
        {
          "id": "e-notebook",
          "name": "Jonah's Source Ledger",
          "category": "Documentary",
          "summary": "Jonah's notebook alleges Lena sold the Ledger source list to a rival network.",
          "description": "A page in Jonah's notebook reads: 'LM — 14 Feb transfer — 12 names to Meridian West. Confront before board Monday. She knows I copied the email.' Another page lists meeting times and a bank transfer reference.",
          "location": "Studio 4, victim's jacket",
          "analysis": "This gives Lena a specific, urgent motive. Jonah intended to expose her within days.",
          "tags": [
            "motive",
            "documentary",
            "source-list"
          ],
          "relatedSuspects": [
            "lena-marn"
          ],
          "foundAt": "00:10"
        },
        {
          "id": "e-email",
          "name": "Scheduled Disclosure Email",
          "category": "Digital",
          "summary": "Jonah scheduled an email to the station board for Monday morning with the subject 'Lena Marn — source leak'.",
          "description": "Jonah's email client contains a scheduled message to the board with an attachment named 'ledger_transfer.pdf'. The subject is 'Lena Marn — source leak — evidence'. It was set to send Monday at 08:00.",
          "location": "Jonah's workstation",
          "analysis": "The disclosure was not a vague threat. It was ready to send, which explains why Lena acted before Monday.",
          "tags": [
            "motive",
            "digital",
            "evidence"
          ],
          "relatedSuspects": [
            "lena-marn"
          ],
          "foundAt": "00:25"
        },
        {
          "id": "e-engineer",
          "name": "Priya's Server Log",
          "category": "Digital",
          "summary": "Priya Shah was on a vendor support call in the server room from 22:20 to 23:05.",
          "description": "The vendor's call record and the server-room door log place Priya in the server room throughout the murder window. She had no keycard entry to Studio 4. She also refused Lena's request to borrow her card earlier that evening.",
          "location": "Server room and vendor records",
          "analysis": "Priya had technical knowledge but no opportunity to enter the studio. Her card refusal further weakens Lena's borrowed-card story.",
          "tags": [
            "alibi",
            "digital",
            "engineer"
          ],
          "relatedSuspects": [
            "priya-shah"
          ],
          "foundAt": "00:30"
        }
      ],
      "timeline": [
        {
          "id": "t1",
          "time": "21:12",
          "title": "Interview special completed",
          "detail": "The pre-recorded final segment is exported with an ambient gap at 22:47.",
          "source": "Audio file metadata",
          "verified": true,
          "disputed": false,
          "actors": [
            "jonah-cross",
            "theo-lang"
          ]
        },
        {
          "id": "t2",
          "time": "22:00",
          "title": "Nightline goes live",
          "detail": "Jonah begins the broadcast in Studio 4.",
          "source": "Broadcast log",
          "verified": true,
          "disputed": false,
          "actors": [
            "jonah-cross"
          ]
        },
        {
          "id": "t3",
          "time": "22:31",
          "title": "Last live caller",
          "detail": "The final live phone call ends. No live callers follow.",
          "source": "Call log",
          "verified": true,
          "disputed": false,
          "actors": [
            "jonah-cross"
          ]
        },
        {
          "id": "t4",
          "time": "22:34",
          "title": "Pre-recorded segment queued",
          "detail": "Lena's producer account inserts the interview special as a live broadcast.",
          "source": "Playout server",
          "verified": true,
          "disputed": false,
          "actors": [
            "lena-marn"
          ]
        },
        {
          "id": "t5",
          "time": "22:35",
          "title": "Jonah's mic goes silent",
          "detail": "The live feed ends and the pre-recorded file begins.",
          "source": "Audio master log",
          "verified": true,
          "disputed": false,
          "actors": [
            "jonah-cross",
            "lena-marn"
          ]
        },
        {
          "id": "t6",
          "time": "22:36",
          "title": "Lena enters Studio 4",
          "detail": "Her keycard opens the inner studio door.",
          "source": "Door controller",
          "verified": true,
          "disputed": false,
          "actors": [
            "lena-marn"
          ]
        },
        {
          "id": "t7",
          "time": "22:40",
          "title": "Jonah is killed",
          "detail": "A blow to the temple with the cable reel causes fatal trauma.",
          "source": "Medical examiner",
          "verified": true,
          "disputed": false,
          "actors": [
            "jonah-cross",
            "lena-marn"
          ]
        },
        {
          "id": "t8",
          "time": "22:42",
          "title": "Lena leaves the studio",
          "detail": "Her keycard opens the door again; the cleaner sees her leave.",
          "source": "Door log and witness",
          "verified": true,
          "disputed": false,
          "actors": [
            "lena-marn"
          ]
        },
        {
          "id": "t9",
          "time": "23:00",
          "title": "Broadcast ends",
          "detail": "The pre-recorded file finishes. The station believes the show has ended normally.",
          "source": "Broadcast log",
          "verified": true,
          "disputed": false,
          "actors": []
        },
        {
          "id": "t10",
          "time": "23:12",
          "title": "Body discovered",
          "detail": "Marcus Vale finds Jonah dead in Studio 4.",
          "source": "Security log",
          "verified": true,
          "disputed": false,
          "actors": [
            "marcus-vale"
          ]
        }
      ],
      "contradictions": [
        {
          "id": "c-lena-live",
          "title": "The voice after death",
          "detail": "Lena says Jonah was alive and waved at her at 23:00. The master audio log shows no live microphone after 22:35; the broadcast was a pre-recorded file. Jonah died around 22:40.",
          "suspectId": "lena-marn",
          "evidenceIds": [
            "e-audio",
            "e-playout"
          ],
          "questions": [
            "lena-marn:q1"
          ],
          "hint": "A radio listener hears the feed, not the room. Compare the broadcast file with the time of death."
        },
        {
          "id": "c-lena-studio",
          "title": "The borrowed keycard",
          "detail": "Lena says she never entered Studio 4 and lent her card to Priya. The door log shows her card at 22:36 and 22:42; Priya's own card was in her pocket and she refused to lend it. The cleaner saw Lena enter and leave.",
          "suspectId": "lena-marn",
          "evidenceIds": [
            "e-door",
            "e-engineer"
          ],
          "questions": [
            "lena-marn:q3"
          ],
          "hint": "The keycard story collapses if the person who supposedly borrowed it was elsewhere."
        },
        {
          "id": "c-lena-motive",
          "title": "The Ledger leak",
          "detail": "Lena calls Jonah's accusation paranoia. His notebook names her, and a scheduled disclosure email with evidence was set to reach the board Monday morning.",
          "suspectId": "lena-marn",
          "evidenceIds": [
            "e-notebook",
            "e-email"
          ],
          "questions": [
            "lena-marn:q4"
          ],
          "hint": "The motive is not vague resentment. There was a deadline."
        }
      ],
      "motiveOptions": [
        {
          "id": "leak",
          "text": "Silence Jonah before he exposed her sale of the Ledger source list to a rival network."
        },
        {
          "id": "promotion",
          "text": "Take over the show permanently by eliminating its host."
        },
        {
          "id": "audio",
          "text": "Punish Jonah for publicly blaming her for a broadcast failure."
        },
        {
          "id": "inheritance",
          "text": "Inherit a share of the station through a secret agreement."
        }
      ],
      "methodOptions": [
        {
          "id": "prerecord",
          "text": "Queued a pre-recorded segment to fake a live broadcast, entered Studio 4 during it, killed Jonah with a cable reel, and returned to the control room."
        },
        {
          "id": "after",
          "text": "Waited until the show ended, argued with Jonah, struck him, and locked the studio from outside."
        },
        {
          "id": "remote",
          "text": "Remotely overloaded the studio power system and made the death look like an electrical accident."
        },
        {
          "id": "theo",
          "text": "Used Theo Lang's booth access to enter the studio and kill Jonah during an argument about airtime."
        }
      ],
      "hints": [
        "A live broadcast is not the same thing as a live room. Check the master audio log against the playout queue.",
        "Jonah's time of death is earlier than the end of the show. Find who entered the studio during the pre-recorded segment.",
        "The motive had a Monday deadline. Look at Jonah's notes and scheduled messages."
      ],
      "solution": {
        "culpritId": "lena-marn",
        "motiveId": "leak",
        "methodId": "prerecord",
        "evidenceIds": [
          "e-audio",
          "e-door",
          "e-weapon"
        ],
        "headline": "The producer made a dead man sound live.",
        "summary": "Lena Marn queued a pre-recorded interview to replace the final 25 minutes of the live show, entered Studio 4 while it played, killed Jonah Cross with a cable reel, and returned to the control room. She killed to stop Jonah exposing her sale of the Ledger source list.",
        "explanation": [
          "The master audio log proves the last 25 minutes were pre-recorded. Jonah's microphone went silent at 22:35, and the broadcast matched a file created hours earlier, including a distinctive ambient dropout. Lena told investigators she saw Jonah alive at 23:00; that was impossible.",
          "Lena's producer account queued the file at 22:34. Her keycard opened Studio 4 at 22:36 and 22:42, the window in which Jonah died. The cleaner saw her enter and leave. Priya Shah was in the server room and had refused to lend her card, destroying Lena's explanation.",
          "The murder weapon was a cable reel from the studio, wiped clean. The killer knew the room, had time to wipe it, and left through a door that locked behind her.",
          "The motive was urgent. Jonah's notebook and his scheduled Monday email show he had evidence that Lena sold twelve confidential source identities to a rival network. He was going to send it to the board. Lena used the tools of live radio to create an alibi out of a recording."
        ],
        "timelineReconstruction": [
          {
            "time": "22:34",
            "event": "Lena queues the pre-recorded interview special as a live broadcast."
          },
          {
            "time": "22:35",
            "event": "The live microphone cuts out. Listeners hear recorded Jonah while the real Jonah is in the studio."
          },
          {
            "time": "22:36",
            "event": "Lena enters Studio 4 and confronts Jonah about the source-leak evidence."
          },
          {
            "time": "22:42",
            "event": "She leaves after killing him with the cable reel, returns to the control room, and lets the recording finish."
          }
        ],
        "redHerring": "Theo Lang had a public rivalry with Jonah and was near the studio, but he remained in the production booth and his voice appears on the pre-recorded segment. Priya Shah understood the playout system but was on a recorded vendor call in the server room and did not enter Studio 4. Marcus Vale's delayed check was negligence, not murder."
      }
    },
    "sable-portrait.json": {
      "id": "sable-portrait",
      "slug": "the-sable-portrait",
      "title": "The Sable Portrait",
      "subtitle": "A locked archive. A dead authenticator. A masterpiece that may not be a masterpiece at all.",
      "difficulty": "hard",
      "estimatedMinutes": 9,
      "location": "Sable Gallery, Mayfair, London",
      "date": "Tuesday, 31 March 2026",
      "timeWindow": "17:20 — 19:20",
      "description": "Art authenticator Lucien Gray was found dead in the gallery's locked archive, an espresso cup beside him. The cause is a heart attack — until toxicology finds oleander. The Sable Portrait, insured for £8 million, is a forgery. Gray was about to say so. Someone locked the truth inside with him.",
      "briefing": "Gray arrived at 17:30 to authenticate the Sable Portrait before a private sale. At 19:10 the gallery assistant found the archive locked and Gray unresponsive inside. Only the owner and the victim held archive keys. The security system shows the door was locked at 18:22 with Gray's own key. The cup says otherwise.",
      "cover": {
        "accent": "#9D83B8",
        "secondary": "#4D3A61",
        "motif": "gallery"
      },
      "scene": {
        "summary": "The archive smells of old paper and bitter coffee. Lucien Gray is slumped in a chair beside the examination table, one hand open, the other still holding a jeweller's loupe. An espresso cup sits on the table. The Sable Portrait leans against the wall, half unwrapped.",
        "details": [
          "No signs of a struggle. The victim's face is pale, his lips faintly blue.",
          "The archive door was locked with a mechanical deadbolt. The key was found in Gray's jacket pocket.",
          "An espresso cup contains oleander extract. The bitterness was masked by dark roast.",
          "The Sable Portrait shows modern pigments under UV light, inconsistent with its claimed seventeenth-century date.",
          "A 3D-printed resin key blank was recovered from the gallery owner's office bin.",
          "The service-corridor camera shows Margot Sable entering the archive corridor at 18:03 and leaving at 18:26."
        ],
        "initialObservations": [
          "Locked-room death",
          "Oleander poisoning",
          "Portrait likely forged"
        ]
      },
      "victim": {
        "name": "Lucien Gray",
        "label": "Victim",
        "age": 61,
        "occupation": "Art authenticator",
        "status": "Deceased — 18:35 (estimated)",
        "background": "Gray was one of Europe's most respected independent authenticators. He had worked with the Sable Gallery for a decade. His preliminary notes on the Sable Portrait were never delivered to the insurer.",
        "forensic": "Cardiac arrest caused by oleandrin toxicity. The dose was sufficient to disrupt heart rhythm within 20–40 minutes. The espresso cup contained the same compound. No needle marks or defensive injuries. Time of death is consistent with ingestion between 18:05 and 18:15."
      },
      "suspects": [
        {
          "id": "margot-sable",
          "name": "Margot Sable",
          "role": "Gallery owner",
          "age": 49,
          "occupation": "Gallery director",
          "summary": "Charismatic and immaculate, Margot built the Sable Gallery into a name. The Sable Portrait is her signature piece — and the centre of an £8 million insurance policy she increased two days ago.",
          "background": "Sable inherited the gallery from her father and has been under financial pressure since a failed expansion. She commissioned the portrait's current restoration and arranged the private sale. She controls the archive and the insurance file.",
          "motive": "Prevent Gray from declaring the portrait a forgery, which would destroy the sale, the insurance claim, and her reputation.",
          "alibi": "Says she left the gallery at 17:45 and was at home until called at 19:15.",
          "relationship": "Owner of the painting, Gray's long-time client, and holder of the archive key.",
          "pressure": "The private buyer was due to complete the purchase next week.",
          "questions": [
            {
              "id": "q1",
              "text": "When did you last see Lucien Gray?",
              "answer": "At half five. I showed him into the archive, gave him the painting, and left. He said he needed two hours. I had a headache and went home. The next call was Nell telling me he was dead."
            },
            {
              "id": "q2",
              "text": "The service-corridor camera shows you at the archive at 18:03 and again at 18:26.",
              "answer": "That camera has been faulty for weeks. It often shows old frames. I was not there. You can ask my building manager; I was at home with a migraine."
            },
            {
              "id": "q3",
              "text": "Why is there a 3D-printed key blank in your bin?",
              "answer": "I collect miniature architectural models. That is a piece of resin from a framing project, not a key. Anyone could have put it there."
            },
            {
              "id": "q4",
              "text": "The portrait is a modern forgery. Did Gray tell you?",
              "answer": "Lucien was a drama queen. He told me he suspected a forgery every few years, then found a reason to charge more for his report. The painting is authentic. The insurance policy is normal business."
            }
          ]
        },
        {
          "id": "nell-arden",
          "name": "Nell Arden",
          "role": "Gallery assistant",
          "age": 27,
          "occupation": "Art handler and restorer",
          "summary": "A talented young restorer who prepared the portrait for examination. She found the body and has been visibly distraught since. Her fingerprints are on the frame.",
          "background": "Nell has worked at the gallery for two years. She trained under a conservator and handles the archive keys only under supervision. She argued with Gray last month about his dismissal of her restoration notes.",
          "motive": "Revenge for professional humiliation, or fear that Gray would expose a restoration error.",
          "alibi": "On a video call with a paper conservator from 17:50 to 18:40, according to the call log. She was in the restoration studio, on a different floor.",
          "relationship": "Assistant who prepared the painting and found the body.",
          "pressure": "Her fingerprints are on the frame and the archive key cabinet.",
          "questions": [
            {
              "id": "q1",
              "text": "Tell me how you found him.",
              "answer": "I knocked at ten past seven. He had asked not to be disturbed, but his phone kept ringing. When he didn't answer I used the intercom. The door was locked, so I called Margot, then used the spare key from the cabinet."
            },
            {
              "id": "q2",
              "text": "Where were you between six and half past six?",
              "answer": "In the restoration studio on a video call with a paper conservator in Amsterdam. I was showing her a water stain. The call log and the recording will confirm it."
            },
            {
              "id": "q3",
              "text": "You argued with Gray about your restoration work.",
              "answer": "He said my cleaning test was too aggressive. He was right, and I accepted it. I reworked the test. I was angry for a day, not for a month."
            },
            {
              "id": "q4",
              "text": "Who else knew the painting might be fake?",
              "answer": "Margot. She was there when Lucien first examined it two weeks ago. She laughed it off, but I saw her face. She asked me to prepare a new UV lamp and said not to mention the first test to anyone."
            }
          ]
        },
        {
          "id": "julian-cross",
          "name": "Julian Cross",
          "role": "Security chief",
          "age": 38,
          "occupation": "Gallery security manager",
          "summary": "A former police officer who runs the gallery's access system. He has a master key, a patrol schedule full of gaps, and a recent reprimand for disabling a camera.",
          "background": "Cross was hired after a theft at another gallery. He has access to all archive keys and the camera system. He was caught disabling a corridor camera six weeks ago and claimed it was a scheduling error.",
          "motive": "Gray threatened to report security lapses that could cost Cross his job.",
          "alibi": "On patrol in the east wing from 17:45 to 19:00. The patrol app records check-ins, but the archive service corridor has no camera coverage of its far end.",
          "relationship": "Security manager with master-key access.",
          "pressure": "His previous camera incident makes him look unreliable.",
          "questions": [
            {
              "id": "q1",
              "text": "Why was the service-corridor camera disabled?",
              "answer": "It wasn't disabled. The recorder in the archive corridor loses sync for a few minutes every evening during the backup cycle. I've reported it twice. Margot knows."
            },
            {
              "id": "q2",
              "text": "Where were you at the time of death?",
              "answer": "East wing patrol. I checked the loading bay at 17:52 and the roof door at 18:35. The app timestamps it. I didn't go to the archive."
            },
            {
              "id": "q3",
              "text": "Who has keys to the archive?",
              "answer": "Margot, Gray, and me. The spare is in the key cabinet. Nell uses it only under supervision. Nobody else."
            },
            {
              "id": "q4",
              "text": "What do you know about the Sable Portrait?",
              "answer": "Only that it's insured for more than this gallery is worth. Margot raised the policy two days ago. I thought that was odd. Gray was here to look at it. Then he's dead. You do the math."
            }
          ]
        }
      ],
      "witnesses": [
        {
          "id": "ivy-chen",
          "name": "Ivy Chen",
          "role": "Receptionist",
          "statement": "At about five to six, Ms. Sable came through reception carrying two espresso cups. She said one was for Mr. Gray and asked me not to disturb them. I didn't see her leave the building before seven. I thought she was working in her office.",
          "reliability": "High",
          "summary": "Margot Sable took two espressos toward the archive at 17:55 and was still in the building.",
          "notes": "Chen's desk faces the main corridor and she has no reason to protect Margot."
        },
        {
          "id": "samir-haddad",
          "name": "Samir Haddad",
          "role": "Building manager",
          "statement": "Ms. Sable called me at 19:20 to say she had been home with a migraine since six. I told the police she was in the building; I saw her in the service lift at half six when I was checking the fire door. She looked surprised to see me.",
          "reliability": "High",
          "summary": "Margot Sable was in the building at 18:30, contradicting her alibi.",
          "notes": "Haddad has a key to the building but not to the archive."
        },
        {
          "id": "sable-insurer",
          "name": "Ashcombe Fine Art Insurance",
          "role": "Insurer statement",
          "statement": "The Sable Portrait's policy was increased from £3.2 million to £8 million on Sunday. The gallery requested a 'collector's valuation' without disclosing that an independent authenticator had been engaged. A claim would be investigated for provenance.",
          "reliability": "High",
          "summary": "The portrait's insurance was tripled two days before the murder.",
          "notes": "The policy documents were signed by Margot Sable."
        }
      ],
      "evidence": [
        {
          "id": "e-coffee",
          "name": "Oleander Espresso",
          "category": "Forensic",
          "summary": "Gray's espresso contained a lethal dose of oleander extract.",
          "description": "The espresso cup contains oleandrin, a cardiac glycoside derived from oleander. The dark roast masked the bitterness. The dose was large enough to cause fatal arrhythmia within half an hour. The cup bears Gray's prints and a smudged partial print on the handle.",
          "location": "Archive table",
          "analysis": "The poison was delivered in the coffee, not food. Someone prepared or delivered the cup shortly before Gray's death.",
          "tags": [
            "forensic",
            "poison",
            "coffee"
          ],
          "relatedSuspects": [
            "margot-sable",
            "nell-arden"
          ],
          "foundAt": "19:35"
        },
        {
          "id": "e-key",
          "name": "Printed Key Blank",
          "category": "Physical",
          "summary": "A resin 3D-printed copy of the archive key was found in Margot's office bin.",
          "description": "The black resin blank matches the archive's restricted key profile. Its cuts align with the deadbolt, and microscopic resin transfer was found inside the lock. The bin also contains a receipt for resin from a 3D-printing shop two days earlier.",
          "location": "Margot Sable's office bin",
          "analysis": "Only Margot's office bin contained the blank. The copy allowed someone to lock the archive after leaving, staging a locked-room death.",
          "tags": [
            "physical",
            "key",
            "locked-room"
          ],
          "relatedSuspects": [
            "margot-sable"
          ],
          "foundAt": "20:10"
        },
        {
          "id": "e-camera",
          "name": "Service Corridor Camera",
          "category": "Digital",
          "summary": "Margot entered the archive corridor at 18:03 and left at 18:26.",
          "description": "The service-corridor camera is triggered by motion. It records Margot Sable entering at 18:03:19 carrying a small tray and leaving at 18:26:02 without it. The feed is time-synced with the building's access controller and has no backup gap that evening.",
          "location": "Service corridor",
          "analysis": "Margot was inside the archive during the period when the poison was ingested. Her claim that she left at 17:45 is false.",
          "tags": [
            "digital",
            "timeline",
            "access"
          ],
          "relatedSuspects": [
            "margot-sable"
          ],
          "foundAt": "20:30"
        },
        {
          "id": "e-forgery",
          "name": "UV Examination Report",
          "category": "Forensic",
          "summary": "The Sable Portrait contains modern pigments and a synthetic varnish layer.",
          "description": "UV examination reveals titanium white and phthalo blue, both modern pigments, in the portrait's shadow layer. The varnish contains a synthetic resin introduced after 1950. A hidden signature was traced from a photograph. The painting is a twentieth-century forgery, not a seventeenth-century original.",
          "location": "Archive examination table",
          "analysis": "Gray's authentication would have destroyed the painting's value and the insurance claim. The forgery is the reason someone needed him silenced.",
          "tags": [
            "forensic",
            "art",
            "forgery"
          ],
          "relatedSuspects": [
            "margot-sable",
            "nell-arden"
          ],
          "foundAt": "20:40"
        },
        {
          "id": "e-notes",
          "name": "Gray's Preliminary Notes",
          "category": "Documentary",
          "summary": "Gray's notes conclude the portrait is a forgery and name Margot as the seller.",
          "description": "A folded page in Gray's jacket reads: 'Sable Portrait — synthetic pigments. Not 17th c. M. Sable insists provenance is private. Warn insurer; do not sign certificate. Buyer must be told.' It is dated the same afternoon.",
          "location": "Victim's jacket",
          "analysis": "Gray had reached a conclusion and intended to disclose it. This gives Margot a direct, urgent motive.",
          "tags": [
            "motive",
            "documentary",
            "authentication"
          ],
          "relatedSuspects": [
            "margot-sable"
          ],
          "foundAt": "20:55"
        },
        {
          "id": "e-policy",
          "name": "Increased Insurance Policy",
          "category": "Documentary",
          "summary": "The portrait's insurance was raised to £8 million two days before Gray's death.",
          "description": "Ashcombe Fine Art Insurance records a policy endorsement dated Sunday, raising the Sable Portrait's coverage from £3.2 million to £8 million. The gallery did not disclose Gray's pending authentication. The policy excludes known forgeries and requires provenance disclosure.",
          "location": "Insurer records",
          "analysis": "A forged painting plus an inflated policy equals a potential insurance fraud worth millions. Gray's report would have prevented a claim.",
          "tags": [
            "motive",
            "documentary",
            "insurance"
          ],
          "relatedSuspects": [
            "margot-sable"
          ],
          "foundAt": "21:10"
        },
        {
          "id": "e-receipt",
          "name": "Espresso Receipt",
          "category": "Documentary",
          "summary": "Margot bought two espressos and a bottle of 'bitter tonic' at 17:50.",
          "description": "The gallery café receipt is time-stamped 17:50 and paid with Margot Sable's card. It lists two espressos and a small bottle of 'herbal tonic'. A bottle of oleander-based tincture was later found in her desk drawer; the receipt's tonic is missing.",
          "location": "Gallery café",
          "analysis": "This places the poison's delivery in Margot's hands. She carried the coffees to the archive shortly afterward.",
          "tags": [
            "documentary",
            "poison",
            "timeline"
          ],
          "relatedSuspects": [
            "margot-sable"
          ],
          "foundAt": "21:25"
        }
      ],
      "timeline": [
        {
          "id": "t1",
          "time": "17:30",
          "title": "Gray arrives",
          "detail": "The authenticator enters the gallery and is shown to the archive.",
          "source": "Reception log",
          "verified": true,
          "disputed": false,
          "actors": [
            "lucien-gray",
            "margot-sable"
          ]
        },
        {
          "id": "t2",
          "time": "17:45",
          "title": "Margot says she leaves",
          "detail": "She claims a migraine and says she went home.",
          "source": "Suspect statement",
          "verified": false,
          "disputed": true,
          "actors": [
            "margot-sable"
          ]
        },
        {
          "id": "t3",
          "time": "17:50",
          "title": "Espressos purchased",
          "detail": "Margot buys two coffees and a herbal tonic at the gallery café.",
          "source": "Café receipt",
          "verified": true,
          "disputed": false,
          "actors": [
            "margot-sable"
          ]
        },
        {
          "id": "t4",
          "time": "18:03",
          "title": "Margot enters archive corridor",
          "detail": "The motion camera records her carrying a tray toward the archive.",
          "source": "Service corridor camera",
          "verified": true,
          "disputed": false,
          "actors": [
            "margot-sable"
          ]
        },
        {
          "id": "t5",
          "time": "18:10",
          "title": "Gray drinks the espresso",
          "detail": "Oleander toxin begins to act within the next half hour.",
          "source": "Forensic estimate",
          "verified": true,
          "disputed": false,
          "actors": [
            "lucien-gray"
          ]
        },
        {
          "id": "t6",
          "time": "18:26",
          "title": "Margot leaves",
          "detail": "She exits the service corridor without the tray.",
          "source": "Service corridor camera",
          "verified": true,
          "disputed": false,
          "actors": [
            "margot-sable"
          ]
        },
        {
          "id": "t7",
          "time": "18:30",
          "title": "Building manager sees Margot",
          "detail": "Haddad sees her in the service lift, though she claimed to be home.",
          "source": "Witness: Samir Haddad",
          "verified": true,
          "disputed": false,
          "actors": [
            "margot-sable"
          ]
        },
        {
          "id": "t8",
          "time": "18:35",
          "title": "Gray dies",
          "detail": "Cardiac arrest from oleandrin toxicity.",
          "source": "Medical examiner",
          "verified": true,
          "disputed": false,
          "actors": [
            "lucien-gray"
          ]
        },
        {
          "id": "t9",
          "time": "19:10",
          "title": "Body found",
          "detail": "Nell Arden opens the archive and finds Gray dead.",
          "source": "Witness: Nell Arden",
          "verified": true,
          "disputed": false,
          "actors": [
            "nell-arden"
          ]
        }
      ],
      "contradictions": [
        {
          "id": "c-margot-time",
          "title": "The migraine alibi",
          "detail": "Margot says she left at 17:45 and was home by six. The service camera records her entering the archive corridor at 18:03 and leaving at 18:26, and the building manager saw her in the lift at 18:30.",
          "suspectId": "margot-sable",
          "evidenceIds": [
            "e-camera"
          ],
          "questions": [
            "margot-sable:q1",
            "margot-sable:q2"
          ],
          "hint": "The building manager and the camera both disagree with the migraine story."
        },
        {
          "id": "c-margot-key",
          "title": "The resin key",
          "detail": "Margot calls the object in her bin a framing model. It matches the archive's restricted key profile, and resin transfer was found inside the deadbolt. The locked room was manufactured.",
          "suspectId": "margot-sable",
          "evidenceIds": [
            "e-key"
          ],
          "questions": [
            "margot-sable:q3"
          ],
          "hint": "The victim's key was in his pocket. Ask how the door was locked from outside."
        },
        {
          "id": "c-margot-forgery",
          "title": "The certificate she couldn't allow",
          "detail": "Margot insists the portrait is authentic. UV analysis finds modern pigments; Gray's notes call it a forgery and name her; the insurance policy was tripled two days earlier.",
          "suspectId": "margot-sable",
          "evidenceIds": [
            "e-forgery",
            "e-notes",
            "e-policy"
          ],
          "questions": [
            "margot-sable:q4"
          ],
          "hint": "The painting's value, the insurance, and the authentication report form one motive."
        }
      ],
      "motiveOptions": [
        {
          "id": "fraud",
          "text": "Prevent Gray from exposing the Sable Portrait as a forgery and destroying an £8 million insurance fraud."
        },
        {
          "id": "inheritance",
          "text": "Inherit Gray's private collection through a secret clause."
        },
        {
          "id": "jealousy",
          "text": "Punish Gray for favouring Nell Arden's restoration career."
        },
        {
          "id": "reputation",
          "text": "Silence Gray after he publicly criticised the gallery's security."
        }
      ],
      "methodOptions": [
        {
          "id": "oleander",
          "text": "Poisoned Gray's espresso with oleander extract, then locked the archive with a 3D-printed key to stage a locked-room death."
        },
        {
          "id": "injection",
          "text": "Injected oleander into Gray's arm during a fake examination and left the door unlocked."
        },
        {
          "id": "assistant",
          "text": "Persuaded Nell Arden to poison the coffee, then locked the archive from the security office."
        },
        {
          "id": "gas",
          "text": "Released a toxic solvent into the archive ventilation and waited for the room to seal."
        }
      ],
      "hints": [
        "The locked room is a story told by the door. The victim's key was in his pocket; look for another copy.",
        "The poison entered through the coffee. Trace who carried a tray to the archive.",
        "The painting's authentication, the insurance increase, and the victim's notes are one motive."
      ],
      "solution": {
        "culpritId": "margot-sable",
        "motiveId": "fraud",
        "methodId": "oleander",
        "evidenceIds": [
          "e-coffee",
          "e-key",
          "e-camera"
        ],
        "headline": "The gallery owner locked a forgery inside a locked room.",
        "summary": "Margot Sable poisoned Lucien Gray's espresso with oleander, then used a 3D-printed copy of the archive key to lock the door after leaving. She killed to stop Gray exposing the Sable Portrait as a forgery and the £8 million insurance policy as fraud.",
        "explanation": [
          "Gray's espresso contained oleandrin, and the café receipt places Margot's purchase of two coffees and a herbal tonic at 17:50. She carried the tray to the archive, and the service camera records her entering at 18:03.",
          "The archive's deadbolt was locked after Gray was already incapacitated. His key remained in his pocket. A resin copy of the restricted key was found in Margot's office bin, matching the lock and bearing recent resin transfer.",
          "Margot's alibi collapses against three independent timestamps: the camera at 18:03, the camera at 18:26, and the building manager seeing her in the lift at 18:30. She claimed she had been home since 17:45.",
          "The motive is documented by UV analysis, Gray's notes, and the insurance policy. The Sable Portrait is a modern forgery. Gray had concluded it was fake and intended to warn the insurer and the buyer. Margot had tripled the policy two days earlier. Killing Gray was an attempt to preserve both the sale and the claim."
        ],
        "timelineReconstruction": [
          {
            "time": "17:50",
            "event": "Margot buys two espressos and a herbal tonic, preparing the poison."
          },
          {
            "time": "18:03",
            "event": "She carries the tray into the archive, where Gray is examining the portrait."
          },
          {
            "time": "18:26",
            "event": "She leaves and locks the archive with the printed key after Gray is incapacitated."
          },
          {
            "time": "18:35",
            "event": "Gray dies of oleander toxicity. Margot is already planning her migraine alibi."
          }
        ],
        "redHerring": "Nell Arden's prints were on the frame, and she had argued with Gray, but a recorded video call places her in the restoration studio throughout the poison window. Julian Cross had master-key access, but his patrol app and the absence of the printed key in his possession exclude him. Margot alone had the key, the poison, the insurance motive, and a reason to manufacture a locked room."
      }
    },
    "lighthouse-signal.json": {
      "id": "lighthouse-signal",
      "slug": "the-lighthouse-signal",
      "title": "The Lighthouse Signal",
      "subtitle": "The storm swallowed the light. It also swallowed the truth about how the keeper died.",
      "difficulty": "medium",
      "estimatedMinutes": 8,
      "location": "Cape Brannock Lighthouse, Northumberland",
      "date": "Wednesday, 1 April 2026",
      "timeWindow": "21:30 — 23:40",
      "description": "Keeper Elias Voss was found at the bottom of the lighthouse stairs during a violent storm. The assistant keeper says he heard an argument, then a crash. The death looks like a fall — until the autopsy finds two impact wounds and a brass lamp with blood in its seam. The island's only boat pilot has a story too, and it does not match her GPS.",
      "briefing": "Cape Brannock is cut off by weather until morning. Elias Voss, the keeper, was found dead at the base of the spiral stairs at 23:15. His sister Mara was supposedly at the mainland inn. The assistant keeper, Tom Ridley, was in the generator shed. The boat pilot, Cora Bell, ferried someone to the island — but her log says the wrong time. Find out who used the storm as cover.",
      "cover": {
        "accent": "#5E91A8",
        "secondary": "#274A5A",
        "motif": "lighthouse"
      },
      "scene": {
        "summary": "The lighthouse is cold and echoing in the storm. Elias Voss lies at the foot of the spiral stairs, one arm across the bottom step. A brass storm lamp lies on its side near the supply crate, its glass intact. Rainwater has pooled across the stone floor, washing away any footprints near the door.",
        "details": [
          "The victim has two impact wounds on the back of the skull, inconsistent with a single fall.",
          "A heavy brass storm lamp was found behind a supply crate. Its base is dented and blood is trapped in the seam.",
          "The lighthouse logbook's last entry is 22:20: 'Mara here. Wants to talk about the sale.'",
          "A wet boot print under the stairs is a women's size 39, matching Mara Voss's boots.",
          "The lighthouse generator failed for seven minutes around 22:40; the backup lamp was manually switched on.",
          "The island's boat GPS shows Cora Bell's launch leaving at 22:04 and returning at 23:02."
        ],
        "initialObservations": [
          "Wounds inconsistent with fall",
          "Blood on brass lamp",
          "Boat GPS contradicts pilot's statement"
        ]
      },
      "victim": {
        "name": "Elias Voss",
        "label": "Victim",
        "age": 64,
        "occupation": "Lighthouse keeper",
        "status": "Deceased — 22:45 (estimated)",
        "background": "Elias kept Cape Brannock for twenty-six years. He was negotiating to sell the island's cottage and surrounding land to a conservation trust. His sister Mara believed the land should stay in the family.",
        "forensic": "Cause of death is a traumatic brain injury from a blunt object. Two separate impact marks indicate repeated blows rather than a fall. A faint rectangular contusion matches the base of the brass lamp. Time of death is between 22:30 and 23:00."
      },
      "suspects": [
        {
          "id": "mara-voss",
          "name": "Mara Voss",
          "role": "Victim's sister",
          "age": 57,
          "occupation": "Antiques dealer",
          "summary": "Elias's younger sister, sharp-tongued and financially strained. She claims she spent the night at the mainland Anchor Inn, but her name appears in the lighthouse log.",
          "background": "Mara and Elias inherited the island together. Elias wanted to sell his share to a conservation trust; Mara wanted to develop it. Their dispute had grown bitter. Her antiques business is close to bankruptcy.",
          "motive": "Stop Elias from selling the family land to the trust, and secure the property for herself.",
          "alibi": "At the Anchor Inn from 21:00 until 23:30. She says she never crossed to the island that night.",
          "relationship": "Sister and co-heir to the island property.",
          "pressure": "The sale contract was due to be signed Friday.",
          "questions": [
            {
              "id": "q1",
              "text": "Where were you last night?",
              "answer": "At the Anchor Inn. I had soup, a glass of wine, and an early night. The storm kept everyone in. I didn't go to the island. I don't know why Elias would write that in his log."
            },
            {
              "id": "q2",
              "text": "Your brother wrote that you were there at 22:20.",
              "answer": "He was drinking again. He wrote all sorts of things. Or someone else wrote it. I wasn't there, and I certainly wasn't arguing with him about the sale."
            },
            {
              "id": "q3",
              "text": "The boat pilot says she brought you over. Why would she lie?",
              "answer": "Cora? She's confused. She ferried supplies earlier. Maybe she saw someone else in the rain. I've known Cora for years; she has no reason to lie about me."
            },
            {
              "id": "q4",
              "text": "You inherit the island if Elias dies before the sale.",
              "answer": "I inherit a half-share, not the whole island. And I loved my brother, even when he was impossible. You are looking at a family quarrel and calling it murder."
            }
          ]
        },
        {
          "id": "tom-ridley",
          "name": "Tom Ridley",
          "role": "Assistant keeper",
          "age": 31,
          "occupation": "Assistant lighthouse keeper",
          "summary": "Elias's assistant for three years. He found the body and insists he heard Mara's voice before the crash. He was in the generator shed during the failure.",
          "background": "Tom maintains the generator and the fog signal. Elias had recently threatened to dismiss him over repeated lateness. Tom admits they argued, but says it was about the generator, not the land.",
          "motive": "Keep his job, or retaliate for a threatened dismissal.",
          "alibi": "In the generator shed from 22:15 to 22:55, trying to restore power. His log entries are time-stamped.",
          "relationship": "Assistant keeper and witness to the argument.",
          "pressure": "Elias planned to replace him in the spring.",
          "questions": [
            {
              "id": "q1",
              "text": "What did you hear before the crash?",
              "answer": "Elias shouting. A woman's voice shouting back. I thought it was Mara; she has a very distinctive way of saying his name. Then a heavy thud. I was busy with the generator and assumed something had fallen."
            },
            {
              "id": "q2",
              "text": "Why didn't you investigate?",
              "answer": "The generator was failing. If the light went out in that storm, ships could hit the rocks. I switched to backup and only went into the tower at quarter past eleven. That's when I found him."
            },
            {
              "id": "q3",
              "text": "You had a motive to resent Elias.",
              "answer": "He was going to fire me. I was angry, but I needed the job. Killing him would leave me stranded on an island with a dead man and no income. Use your head."
            },
            {
              "id": "q4",
              "text": "Did you see a boat?",
              "answer": "I saw a launch heading back toward the harbor just before eleven. It was Cora's boat; I'd know that engine anywhere. I assumed she was taking Mara back. I didn't see who was inside."
            }
          ]
        },
        {
          "id": "cora-bell",
          "name": "Cora Bell",
          "role": "Boat pilot",
          "age": 42,
          "occupation": "Island ferry and charter pilot",
          "summary": "Cora knows every current around Cape Brannock. She says she made one late-night run to collect Mara, but her GPS says the boat was out for nearly an hour.",
          "background": "Cora runs the island launch and occasional private charters. She has known the Voss family for years. She is in debt and has been known to bend licensing rules for cash jobs.",
          "motive": "Money, if she was paid to ferry Mara and lie about the time.",
          "alibi": "At the harbor until 23:00, then a single run to the island to collect Mara at 23:10.",
          "relationship": "Ferry pilot and long-time family acquaintance.",
          "pressure": "Her GPS and fuel records do not match her statement.",
          "questions": [
            {
              "id": "q1",
              "text": "When did you take Mara to the island?",
              "answer": "I didn't take her there. I brought her back at ten past eleven. She called me from the lighthouse and asked for a pickup. She'd been there for hours."
            },
            {
              "id": "q2",
              "text": "Your GPS shows the boat leaving at 22:04 and returning at 23:02.",
              "answer": "The GPS is old. It drops out in storms. I was at the harbor, doing paperwork. The launch was tied up."
            },
            {
              "id": "q3",
              "text": "Why would Mara call you for a pickup if she wasn't there?",
              "answer": "Ask her. I only know what she told me. She was upset. She said there had been an accident."
            },
            {
              "id": "q4",
              "text": "Did you see Elias alive when you arrived?",
              "answer": "No. I waited outside. Mara came down the path alone, carrying a bag. She paid me double to forget the earlier trip. I should have called the police."
            }
          ]
        }
      ],
      "witnesses": [
        {
          "id": "harbor-master",
          "name": "Niall Brody",
          "role": "Harbor master",
          "statement": "I logged Cora Bell's launch out at 22:04 and back at 23:02. The weather was foul, but she's experienced. I saw two figures get out at the harbor. One walked toward the inn and one stayed to tie up the boat.",
          "reliability": "High",
          "summary": "Cora's boat left at 22:04 and returned at 23:02 with two people aboard.",
          "notes": "Brody's log is independent of the GPS and kept in the harbor office."
        },
        {
          "id": "inn-clerk",
          "name": "Sasha Doyle",
          "role": "Anchor Inn receptionist",
          "statement": "Ms. Voss checked in at 21:10, but I didn't see her after that. Her keycard was not used after 21:20. The kitchen closed at 21:30. I can't say whether she was in her room.",
          "reliability": "Medium",
          "summary": "Mara checked in, but her keycard was not used after 21:20.",
          "notes": "The inn's side door has no camera and opens onto the harbor path."
        },
        {
          "id": "fisherman",
          "name": "Peter Crane",
          "role": "Lobster fisherman",
          "statement": "Cora's launch passed me near the point around half ten. There were two people in it. The woman in the stern wore a yellow oilskin. Cora doesn't own a yellow oilskin; Mara Voss does.",
          "reliability": "High",
          "summary": "Saw a woman in Mara's distinctive yellow oilskin on Cora's launch around 22:30.",
          "notes": "Crane knows both women and has no connection to the inheritance dispute."
        }
      ],
      "evidence": [
        {
          "id": "e-wounds",
          "name": "Autopsy Findings",
          "category": "Forensic",
          "summary": "Two impact wounds show the keeper was struck twice, not killed by a fall.",
          "description": "The victim has two distinct blunt-force injuries on the back of the skull, one above the other, with parallel edges. There are no fractures consistent with a stair fall. A rectangular contusion on the shoulder matches the base of a storm lamp.",
          "location": "County morgue",
          "analysis": "This was homicide staged as a fall. The attacker struck from behind, twice, with a heavy rectangular object.",
          "tags": [
            "forensic",
            "homicide",
            "staging"
          ],
          "relatedSuspects": [
            "mara-voss"
          ],
          "foundAt": "09:30"
        },
        {
          "id": "e-lamp",
          "name": "Brass Storm Lamp",
          "category": "Physical",
          "summary": "A dented brass lamp was hidden behind a supply crate; blood is trapped in its seam.",
          "description": "The lighthouse's brass storm lamp has a dented base matching the victim's shoulder contusion. Dried blood is trapped in the base seam. The lamp was wiped on the outside but not cleaned inside. A partial fingerprint on the underside belongs to Mara Voss.",
          "location": "Supply crate at the stair base",
          "analysis": "This is the murder weapon. The attempt to hide and wipe it indicates deliberate staging.",
          "tags": [
            "physical",
            "weapon",
            "fingerprint"
          ],
          "relatedSuspects": [
            "mara-voss"
          ],
          "foundAt": "23:35"
        },
        {
          "id": "e-boat",
          "name": "Launch GPS Record",
          "category": "Digital",
          "summary": "Cora's boat left at 22:04 and returned at 23:02, contradicting her single 23:10 trip.",
          "description": "The launch's GPS logger records departure at 22:04:16 and return at 23:02:48. The track goes directly to Cape Brannock and waits offshore for 47 minutes. It does not support Cora's claim that she was at the harbor until 23:00.",
          "location": "Cora Bell's launch",
          "analysis": "Cora lied about the timing. The boat could have carried Mara to the island before the murder and brought her back afterward.",
          "tags": [
            "digital",
            "timeline",
            "boat"
          ],
          "relatedSuspects": [
            "mara-voss",
            "cora-bell"
          ],
          "foundAt": "08:50"
        },
        {
          "id": "e-logbook",
          "name": "Lighthouse Logbook",
          "category": "Documentary",
          "summary": "Elias wrote at 22:20: 'Mara here. Wants to talk about the sale.'",
          "description": "The lighthouse logbook contains Elias's handwriting: '22:20 — Mara here. Wants to talk about the sale. Told her no. She is furious.' The entry is the last one in his hand. The book was found open on the watch desk.",
          "location": "Watch room desk",
          "analysis": "This places Mara on the island before the murder and establishes the subject of their argument.",
          "tags": [
            "documentary",
            "timeline",
            "motive"
          ],
          "relatedSuspects": [
            "mara-voss"
          ],
          "foundAt": "23:30"
        },
        {
          "id": "e-deed",
          "name": "Conservation Sale Contract",
          "category": "Documentary",
          "summary": "Elias was selling his share to a trust, cutting Mara out of the island's future.",
          "description": "A draft sale contract dated Friday would transfer Elias's share of Cape Brannock to the Northumberland Conservation Trust for £1.8 million. The contract excludes Mara's cottage and development rights but prevents her from selling the island as a resort. Mara's antiques business is named in a separate bankruptcy filing.",
          "location": "Victim's desk",
          "analysis": "This is a concrete financial motive. The sale would destroy Mara's plan to develop the island and leave her with debts.",
          "tags": [
            "motive",
            "documentary",
            "inheritance"
          ],
          "relatedSuspects": [
            "mara-voss"
          ],
          "foundAt": "23:45"
        },
        {
          "id": "e-boot",
          "name": "Wet Boot Print",
          "category": "Forensic",
          "summary": "A women's size 39 boot print under the stairs matches Mara's yellow-oilskin outfit.",
          "description": "A partial wet print on the stone floor under the stairs matches a size 39 walking boot with a distinctive diamond tread. Mara Voss's boots, recovered from the inn, have the same tread and island mud in the sole. The print was protected by the overhanging stair.",
          "location": "Lighthouse stair base",
          "analysis": "Mara was inside the lighthouse, not merely on the path. The mud matches the island's clay.",
          "tags": [
            "forensic",
            "footprint",
            "presence"
          ],
          "relatedSuspects": [
            "mara-voss"
          ],
          "foundAt": "23:40"
        },
        {
          "id": "e-generator",
          "name": "Generator Shed Log",
          "category": "Documentary",
          "summary": "Tom Ridley was in the generator shed during the murder window.",
          "description": "The generator log records Tom's entries at 22:16, 22:31, and 22:52, along with a radio check at 22:25. The shed is 60 metres from the lighthouse and has no view of the stairwell. His wet-weather gear was hung by the door and remained soaked.",
          "location": "Generator shed",
          "analysis": "Tom had no opportunity to reach the lighthouse, kill Elias, and return without leaving the shed logs and radio records. The timing is too tight.",
          "tags": [
            "alibi",
            "documentary",
            "timeline"
          ],
          "relatedSuspects": [
            "tom-ridley"
          ],
          "foundAt": "09:10"
        }
      ],
      "timeline": [
        {
          "id": "t1",
          "time": "21:10",
          "title": "Mara checks into the inn",
          "detail": "She takes a room but leaves through the side door unseen.",
          "source": "Inn keycard",
          "verified": true,
          "disputed": false,
          "actors": [
            "mara-voss"
          ]
        },
        {
          "id": "t2",
          "time": "22:04",
          "title": "Cora's launch leaves harbor",
          "detail": "GPS records the boat heading toward Cape Brannock.",
          "source": "Launch GPS",
          "verified": true,
          "disputed": false,
          "actors": [
            "cora-bell",
            "mara-voss"
          ]
        },
        {
          "id": "t3",
          "time": "22:20",
          "title": "Mara enters the lighthouse",
          "detail": "Elias's logbook records her arrival and their argument about the sale.",
          "source": "Logbook",
          "verified": true,
          "disputed": false,
          "actors": [
            "mara-voss",
            "elias-voss"
          ]
        },
        {
          "id": "t4",
          "time": "22:35",
          "title": "Argument heard",
          "detail": "Tom hears Elias and a woman shouting, then a heavy thud.",
          "source": "Witness: Tom Ridley",
          "verified": true,
          "disputed": false,
          "actors": [
            "mara-voss",
            "elias-voss"
          ]
        },
        {
          "id": "t5",
          "time": "22:45",
          "title": "Elias dies",
          "detail": "Two blows from the brass lamp cause fatal brain injury.",
          "source": "Medical examiner",
          "verified": true,
          "disputed": false,
          "actors": [
            "elias-voss"
          ]
        },
        {
          "id": "t6",
          "time": "22:55",
          "title": "Mara boards the launch",
          "detail": "A fisherman sees a woman in a yellow oilskin aboard Cora's boat.",
          "source": "Witness: Peter Crane",
          "verified": true,
          "disputed": false,
          "actors": [
            "mara-voss",
            "cora-bell"
          ]
        },
        {
          "id": "t7",
          "time": "23:02",
          "title": "Launch returns",
          "detail": "Two figures disembark at the harbor; one walks toward the inn.",
          "source": "Harbor master and GPS",
          "verified": true,
          "disputed": false,
          "actors": [
            "mara-voss",
            "cora-bell"
          ]
        },
        {
          "id": "t8",
          "time": "23:15",
          "title": "Body found",
          "detail": "Tom finds Elias at the stair base and radios for help.",
          "source": "Witness: Tom Ridley",
          "verified": true,
          "disputed": false,
          "actors": [
            "tom-ridley"
          ]
        }
      ],
      "contradictions": [
        {
          "id": "c-mara-inn",
          "title": "The inn alibi",
          "detail": "Mara says she never left the Anchor Inn. Her brother's log places her at the lighthouse at 22:20, and the fisherman saw a woman in her yellow oilskin on Cora's launch.",
          "suspectId": "mara-voss",
          "evidenceIds": [
            "e-logbook",
            "e-boat"
          ],
          "questions": [
            "mara-voss:q1",
            "mara-voss:q2"
          ],
          "hint": "Compare the logbook entry and the fisherman's description with the inn's keycard record."
        },
        {
          "id": "c-mara-fall",
          "title": "A fall with two impacts",
          "detail": "Mara calls it a family quarrel, not murder. The autopsy shows two separate blows, and a dented brass lamp with her fingerprint and Elias's blood was hidden behind a supply crate.",
          "suspectId": "mara-voss",
          "evidenceIds": [
            "e-wounds",
            "e-lamp"
          ],
          "questions": [
            "mara-voss:q4"
          ],
          "hint": "The body and the weapon tell the same story: this was not a fall."
        },
        {
          "id": "c-cora-lie",
          "title": "The boat pilot's missing hour",
          "detail": "Cora says she collected Mara at 23:10. The launch GPS records a trip from 22:04 to 23:02, and the harbor master logged the same departure and return. She was paid to lie.",
          "suspectId": "cora-bell",
          "evidenceIds": [
            "e-boat"
          ],
          "questions": [
            "cora-bell:q1",
            "cora-bell:q2"
          ],
          "hint": "Two independent systems record the launch's real trip. The discrepancy is not a GPS glitch."
        }
      ],
      "motiveOptions": [
        {
          "id": "land",
          "text": "Stop Elias from selling the island to a conservation trust and preserve her inheritance and development plan."
        },
        {
          "id": "debts",
          "text": "Take Elias's savings to cover her failing antiques business."
        },
        {
          "id": "jealousy",
          "text": "Punish Elias for a long-standing family betrayal."
        },
        {
          "id": "job",
          "text": "Help Tom Ridley keep his job as assistant keeper."
        }
      ],
      "methodOptions": [
        {
          "id": "lamp",
          "text": "Confronted Elias over the sale, struck him twice with the brass storm lamp, staged a fall, and left on Cora's boat."
        },
        {
          "id": "push",
          "text": "Pushed Elias down the lighthouse stairs during an argument and left before Tom returned."
        },
        {
          "id": "generator",
          "text": "Caused the generator failure to create darkness, then attacked Elias at the stairs."
        },
        {
          "id": "storm",
          "text": "Lured Elias outside during the storm and let the wind throw him from the gallery."
        }
      ],
      "hints": [
        "Falls do not strike a person twice. The autopsy and the lamp are the first thread.",
        "Mara's alibi depends on never leaving the inn. Check the lighthouse logbook and the boat's actual track.",
        "Cora Bell's story has one trip. The GPS and harbor master record another. Find out what happened during the missing hour."
      ],
      "solution": {
        "culpritId": "mara-voss",
        "motiveId": "land",
        "methodId": "lamp",
        "evidenceIds": [
          "e-wounds",
          "e-lamp",
          "e-boat"
        ],
        "headline": "The sister used the storm to turn murder into a fall.",
        "summary": "Mara Voss crossed to Cape Brannock on Cora Bell's launch, confronted Elias about the conservation sale, struck him twice with a brass storm lamp, and staged a fall. Cora lied about the time for money.",
        "explanation": [
          "The autopsy shows two separate impact wounds, which cannot be explained by a single fall down the stairs. A dented brass storm lamp matching the wounds was hidden behind a supply crate, with Elias's blood in its seam and Mara's fingerprint on the underside.",
          "Elias's logbook records Mara's arrival at 22:20 and their argument about the sale. Tom Ridley heard the shouting and a heavy thud. Mara had told investigators she never left the Anchor Inn.",
          "Cora Bell's statement that she collected Mara at 23:10 is contradicted by her launch GPS and the harbor master. The boat left at 22:04 and returned at 23:02; a fisherman saw a woman in Mara's yellow oilskin aboard. Cora was paid to lie.",
          "The sale contract gave Mara a direct financial motive. Elias was transferring his share to the conservation trust, blocking her development plans while her antiques business slid toward bankruptcy. She killed him to stop the deal and claim the island."
        ],
        "timelineReconstruction": [
          {
            "time": "21:20",
            "event": "Mara leaves the inn through the side door and meets Cora at the harbor."
          },
          {
            "time": "22:20",
            "event": "She reaches the lighthouse and argues with Elias about the sale."
          },
          {
            "time": "22:35",
            "event": "She strikes him twice with the brass lamp and stages a fall at the stairs."
          },
          {
            "time": "22:55",
            "event": "She boards Cora's launch and returns to the mainland, paying Cora to lie about the time."
          }
        ],
        "redHerring": "Tom Ridley had been threatened with dismissal, but his generator log and radio checks place him away from the lighthouse. Cora Bell lied about the boat trip, but she was an accomplice after the fact, not the killer. The physical evidence — the two wounds, the lamp, the boot print, and the logbook — points to Mara."
      }
    },
    "vesper-lake.json": {
      "id": "vesper-lake",
      "slug": "the-vanishing-at-vesper-lake",
      "title": "The Vanishing at Vesper Lake",
      "subtitle": "Her kayak came back empty. Her online posts kept appearing. Her manager kept smiling.",
      "difficulty": "hard",
      "estimatedMinutes": 9,
      "location": "Vesper Lake Cabins, Oregon",
      "date": "Saturday, 4 April 2026",
      "timeWindow": "20:40 — 23:50",
      "description": "Travel influencer Celeste Rios vanished from a lakeside cabin after a livestream. Her kayak was found drifting at dawn, her phone inside a dry bag, her blood on the dock. Her manager says Celeste went paddling alone. The scheduled posts say otherwise. So does the mud on an abandoned pump house.",
      "briefing": "Celeste arrived at Vesper Lake on Friday for a weekend shoot. On Saturday night she streamed from the dock, then stopped answering messages. Her kayak was found at 07:10. Blood on the dock matches her. No body has been recovered. Four people were near the lake. One of them has been controlling Celeste's story for months.",
      "cover": {
        "accent": "#76A6B8",
        "secondary": "#2E5362",
        "motif": "lake"
      },
      "scene": {
        "summary": "The cabin deck faces a black mirror of water. A few metres away, the dock boards are stained with diluted blood. The kayak is propped against the ranger station, its dry bag still sealed. A trail of scuffed mud leads from the dock around the boathouse toward a disused pump house half-swallowed by reeds.",
        "details": [
          "Blood on the dock matches Celeste Rios. It is diluted, consistent with rain and lake water.",
          "A fresh drag mark runs from the dock around the boathouse toward the old pump house.",
          "The kayak's footrests are set for someone about 178 cm tall. Celeste was 170 cm.",
          "Celeste's phone was found in the kayak's dry bag. It made no manual unlock after 20:52.",
          "The pump-house door has fresh mud on the latch and a broken padlock.",
          "Dana Quill's rental car GPS places the car on the service road from 21:10 to 23:40."
        ],
        "initialObservations": [
          "Blood at the dock",
          "Kayak staged",
          "Pump house recently entered"
        ]
      },
      "victim": {
        "name": "Celeste Rios",
        "label": "Missing person",
        "age": 26,
        "occupation": "Travel influencer",
        "status": "Missing — presumed deceased",
        "background": "Celeste had 2.4 million followers and a lucrative brand partnership. She was planning to leave her management agency and launch her own company. She arrived at Vesper Lake for a solo weekend, but told friends she intended to confront her manager about missing money.",
        "forensic": "Blood at the dock matches Celeste. Dilution and spatter pattern suggest a blunt-force injury near the water, with attempts to wash the surface. No body has been recovered. A torn yellow synthetic fibre was found on a dock nail."
      },
      "suspects": [
        {
          "id": "dana-quill",
          "name": "Dana Quill",
          "role": "Manager",
          "age": 39,
          "occupation": "Talent manager",
          "summary": "Celeste's manager and closest business adviser. Polished, protective in public, and ruthless about control. She claims she spent Saturday night at a motel in town.",
          "background": "Dana built Celeste's brand from a small travel blog into a seven-figure business. She controls the agency accounts and Celeste's social media schedule. A forensic accountant recently flagged transfers to a shell company.",
          "motive": "Silence Celeste before she exposed Dana's embezzlement and left the agency.",
          "alibi": "At the Lakeside Motor Inn from 21:00 until midnight, reviewing contracts.",
          "relationship": "Manager, financial controller, and keeper of Celeste's content calendar.",
          "pressure": "Celeste scheduled a meeting with a lawyer for Monday.",
          "questions": [
            {
              "id": "q1",
              "text": "Where were you when Celeste disappeared?",
              "answer": "At the Lakeside Motor Inn. I checked in at nine and ordered room service. Celeste wanted a quiet weekend; I stayed out of her way. I only learned she was missing when the ranger called me at seven."
            },
            {
              "id": "q2",
              "text": "Your rental car was on the lake service road from 21:10 to 23:40.",
              "answer": "The GPS is wrong. I lent the car to Noah for the evening. He wanted to pick up camera equipment. I was at the motel. Ask the clerk."
            },
            {
              "id": "q3",
              "text": "Celeste's posts after 21:14 were scheduled in advance. Did you schedule them?",
              "answer": "I schedule her content. That's my job. She often asks me to keep the feed active while she's offline. It doesn't mean I knew she was dead."
            },
            {
              "id": "q4",
              "text": "Transfers from Celeste's account went to a company linked to you.",
              "answer": "Business expenses. I moved money between accounts all the time. Celeste approved every transfer. If she had a problem, she should have spoken to me instead of a lawyer."
            }
          ]
        },
        {
          "id": "noah-mercer",
          "name": "Noah Mercer",
          "role": "Boyfriend and photographer",
          "age": 28,
          "occupation": "Photographer",
          "summary": "Celeste's boyfriend of two years and her usual photographer. He was at the cabin earlier, and they argued loudly enough for a neighbour to hear.",
          "background": "Noah shoots most of Celeste's brand campaigns. Their relationship had become tangled with business; he wanted to leave the team and she asked him to stay through the launch. He was in town at a bar during the critical hour, though his alibi is not perfect.",
          "motive": "Jealousy, resentment, or a dispute over the new company's ownership.",
          "alibi": "At the Copper Dock bar from 21:15 to 23:30. The bartender remembers him, but the receipt is untimed.",
          "relationship": "Boyfriend, photographer, and business partner.",
          "pressure": "Several of Celeste's messages mention an argument about the company.",
          "questions": [
            {
              "id": "q1",
              "text": "What did you argue about?",
              "answer": "The new company. She wanted me to run visuals and take equity instead of salary. I said it felt like a leash. I left around eight to cool off and went to the Copper Dock."
            },
            {
              "id": "q2",
              "text": "Did Dana borrow your car?",
              "answer": "No. My car was in the lot. Dana had her own rental. I saw it parked near the service road when I drove past around nine, but I didn't think anything of it."
            },
            {
              "id": "q3",
              "text": "Where were you at 21:20?",
              "answer": "At the bar. I ordered a beer and watched the game. The bartender knows me. I wasn't at the lake. Celeste was still posting; I assumed she was fine."
            },
            {
              "id": "q4",
              "text": "Did Celeste tell you she was confronting Dana?",
              "answer": "She said she'd found something in the accounts and was going to end the management contract. She was scared, but she was also determined. Dana built a cage around her and called it a brand."
            }
          ]
        },
        {
          "id": "sasha-voss",
          "name": "Sasha Voss",
          "role": "Friend and assistant",
          "age": 27,
          "occupation": "Content assistant",
          "summary": "Celeste's oldest friend and newest assistant. She was at the cabin earlier, helping set up the shoot, and is the only person with the social media passwords.",
          "background": "Sasha grew up with Celeste and recently joined her team. Their friendship became strained as Sasha handled more work for little credit. She was in town at a motel during the critical hour, but her phone was off.",
          "motive": "Resentment over being underpaid and overlooked, and access to Celeste's accounts.",
          "alibi": "At the Pine Rest Motel from 20:00. No camera or clerk confirms it; she paid cash.",
          "relationship": "Best friend, assistant, and social media backup.",
          "pressure": "She had access to Celeste's accounts and knew the post schedule.",
          "questions": [
            {
              "id": "q1",
              "text": "Why did you leave the cabin?",
              "answer": "Celeste wanted to be alone before the confrontation. I set up the ring light and left around eight. I stayed at the Pine Rest, paid cash because I lost my card. I know how that looks."
            },
            {
              "id": "q2",
              "text": "You can access Celeste's accounts.",
              "answer": "I have backup access for emergencies. I didn't post anything Saturday. Dana controls the content calendar; I only have the passwords in case something breaks."
            },
            {
              "id": "q3",
              "text": "Was Celeste afraid of Dana?",
              "answer": "Not physically. She said Dana was stealing from her and had been lying about the numbers. She planned to fire her Monday. She told me to stay away so Dana wouldn't suspect we'd talked."
            },
            {
              "id": "q4",
              "text": "Did you see Dana near the lake?",
              "answer": "No. But when I left at eight, Dana's rental was already parked by the service road. She told everyone she was in town. I thought maybe she was checking on Celeste."
            }
          ]
        },
        {
          "id": "felix-ward",
          "name": "Felix Ward",
          "role": "Lake ranger",
          "age": 45,
          "occupation": "Park ranger",
          "summary": "The ranger who found the kayak. He knows every trail, every cabin, and the old pump house. He also had a public argument with Celeste about filming off-trail.",
          "background": "Ward has patrolled Vesper Lake for twelve years. He controls access to the pump house and the ranger station. He was cited last year for failing to log a missing hiker, and the incident made him defensive.",
          "motive": "Silence Celeste after she threatened to report him for harassment, or hide evidence of an illegal rental scheme.",
          "alibi": "On the north-shore patrol from 20:30 to 23:30. The patrol radio logs three check-ins, but the trail is long and sparsely covered.",
          "relationship": "Park ranger with access to the pump house and lake equipment.",
          "pressure": "His previous missing-person case and a grudge against Celeste.",
          "questions": [
            {
              "id": "q1",
              "text": "How did you find the kayak?",
              "answer": "Dawn patrol. It was drifting near the north reeds. I towed it in and found the phone in the dry bag. I called the sheriff. I didn't know whose it was until I saw the logo."
            },
            {
              "id": "q2",
              "text": "What happened between you and Celeste?",
              "answer": "She filmed inside a closed nesting area. I told her to leave. She called me a petty bureaucrat. That was it. I didn't threaten her, despite what she told her followers."
            },
            {
              "id": "q3",
              "text": "You have a key to the pump house.",
              "answer": "It's a maintenance building, not a prison. The padlock was broken by vandals. I haven't been inside in months. If someone used it, they didn't need my key."
            },
            {
              "id": "q4",
              "text": "Did you see Dana Quill that night?",
              "answer": "I saw her rental car on the service road around half nine. I assumed she was working late at the cabin. I didn't see her on the water. The lake was too calm for an accident, if you ask me."
            }
          ]
        }
      ],
      "witnesses": [
        {
          "id": "june-alvarez",
          "name": "June Alvarez",
          "role": "Neighbour across the cove",
          "statement": "At about half nine I saw two women on the dock. One wore a yellow raincoat and was taller; the other was Celeste. Their voices carried over the water. I heard Celeste say, 'You can't just take it.' Then a thud. I thought something had fallen into the lake.",
          "reliability": "High",
          "summary": "Saw Celeste and a taller woman in a yellow raincoat arguing on the dock around 21:30.",
          "notes": "Alvarez had binoculars and knew Celeste from previous visits."
        },
        {
          "id": "owen-pike",
          "name": "Owen Pike",
          "role": "Lakeside Motor Inn clerk",
          "statement": "Ms. Quill checked in at 20:50, but I didn't see her again until she came back at 23:55. Her rental car was not in the lot when I did my 21:30 round. She told me she was working in her room.",
          "reliability": "High",
          "summary": "Dana checked in early but her car and person were absent from the motel during the critical hours.",
          "notes": "The motel's lot camera shows the empty space assigned to room 14."
        },
        {
          "id": "copper-bartender",
          "name": "Lena Ortiz",
          "role": "Bartender",
          "statement": "Noah Mercer was here from around nine to half past eleven. He had two beers and barely spoke. He kept checking his phone. He left just before midnight.",
          "reliability": "High",
          "summary": "Noah was at the Copper Dock bar throughout the critical window.",
          "notes": "Ortiz has no connection to Celeste or the agency."
        }
      ],
      "evidence": [
        {
          "id": "e-blood",
          "name": "Diluted Blood on the Dock",
          "category": "Forensic",
          "summary": "Blood at the dock matches Celeste and shows an attempt to wash the scene.",
          "description": "The dock boards hold diluted blood matching Celeste Rios. Spatter direction is consistent with a blow near the water's edge. The blood was partially rinsed, and a mop was found in the boathouse with lake water and trace blood in its fibres.",
          "location": "Cabin dock",
          "analysis": "Celeste was injured at the dock, not in a kayak accident. Someone tried to clean the scene and moved her along the boathouse path.",
          "tags": [
            "forensic",
            "blood",
            "scene"
          ],
          "relatedSuspects": [
            "dana-quill"
          ],
          "foundAt": "09:20"
        },
        {
          "id": "e-oar",
          "name": "Missing Kayak Oar",
          "category": "Physical",
          "summary": "A kayak oar with Celeste's blood and Dana's fingerprint was found behind the pump house.",
          "description": "One oar from the kayak was missing from the dry bag. It was found behind the pump house with a bloodstain matching Celeste and a clear thumbprint belonging to Dana Quill. The oar's shaft has a hairline crack consistent with impact.",
          "location": "Behind the old pump house",
          "analysis": "The oar was likely the weapon. Dana's print places her at the object after the attack, and the blood ties it to the victim.",
          "tags": [
            "physical",
            "weapon",
            "fingerprint"
          ],
          "relatedSuspects": [
            "dana-quill"
          ],
          "foundAt": "10:10"
        },
        {
          "id": "e-car",
          "name": "Rental Car GPS",
          "category": "Digital",
          "summary": "Dana's rental car was parked on the lake service road from 21:10 to 23:40.",
          "description": "The rental company's telematics place Dana's car on the lake service road, 200 metres from the cabin, from 21:10:44 to 23:40:12. The car then returned to the Lakeside Motor Inn. Dana told the clerk she was working in her room.",
          "location": "Rental car telematics",
          "analysis": "Dana had opportunity and lied about her location. The timing brackets the murder and the staging of the kayak.",
          "tags": [
            "digital",
            "timeline",
            "opportunity"
          ],
          "relatedSuspects": [
            "dana-quill"
          ],
          "foundAt": "11:00"
        },
        {
          "id": "e-pump",
          "name": "Pump House Evidence",
          "category": "Forensic",
          "summary": "Celeste's bracelet, fresh drag marks, and Dana's boot print were found in the old pump house.",
          "description": "The disused pump house contains a fresh drag trail from the door to a maintenance pit. Celeste's silver bracelet is caught on the pit ladder. A boot print in the mud matches Dana's size and tread. A strand of yellow raincoat fabric is snagged on the broken padlock.",
          "location": "Old pump house",
          "analysis": "This is where Celeste was taken after the attack. The evidence links Dana's clothing and footwear to the scene.",
          "tags": [
            "forensic",
            "body-site",
            "staging"
          ],
          "relatedSuspects": [
            "dana-quill"
          ],
          "foundAt": "10:40"
        },
        {
          "id": "e-schedule",
          "name": "Scheduled Social Posts",
          "category": "Digital",
          "summary": "Celeste's posts after 21:14 were scheduled in advance; her phone was never unlocked.",
          "description": "Three posts went live at 21:14, 22:02 and 23:01 from Celeste's account. The phone's secure log shows no manual unlock after 20:52. The posts were scheduled through the agency's content tool under Dana Quill's login at 19:40.",
          "location": "Social media management platform",
          "analysis": "The posts were designed to create the impression Celeste was alive and posting. Dana controlled the scheduling account.",
          "tags": [
            "digital",
            "staging",
            "timeline"
          ],
          "relatedSuspects": [
            "dana-quill",
            "sasha-voss"
          ],
          "foundAt": "12:10"
        },
        {
          "id": "e-finance",
          "name": "Agency Bank Transfers",
          "category": "Documentary",
          "summary": "Celeste's earnings were routed through a shell company controlled by Dana.",
          "description": "Bank records show twelve transfers from Celeste's brand account to Northstar Talent Holdings, a shell company registered to Dana's brother. The total is $312,000 over eight months. Celeste requested the statements on Friday and emailed a lawyer for a Monday meeting.",
          "location": "Bank and agency records",
          "analysis": "This is a concrete embezzlement motive. Celeste was about to expose Dana and terminate the management contract.",
          "tags": [
            "motive",
            "documentary",
            "finance"
          ],
          "relatedSuspects": [
            "dana-quill"
          ],
          "foundAt": "13:00"
        },
        {
          "id": "e-raincoat",
          "name": "Yellow Raincoat Fibre",
          "category": "Forensic",
          "summary": "A yellow synthetic fibre caught on a dock nail matches Dana's raincoat.",
          "description": "A torn yellow fibre was recovered from a nail at the edge of the dock. It matches the synthetic raincoat found in Dana's motel room, which has a fresh tear at the hem. Dana told investigators she never visited the lake that night.",
          "location": "Cabin dock",
          "analysis": "The fibre places Dana's raincoat at the dock. Combined with the neighbour's description, it undermines her claim of staying in town.",
          "tags": [
            "forensic",
            "transfer",
            "presence"
          ],
          "relatedSuspects": [
            "dana-quill"
          ],
          "foundAt": "11:30"
        },
        {
          "id": "e-livestream",
          "name": "Livestream Audio",
          "category": "Digital",
          "summary": "Celeste's final livestream captures a second voice saying 'put the phone down'.",
          "description": "The livestream ends at 21:02. At 20:59, a female voice off-camera says, 'Put the phone down, Celeste. We can talk about this like adults.' The voice's cadence and tone match Dana Quill. A timestamped viewer comment reads: 'Who is that with her?'",
          "location": "Archived livestream",
          "analysis": "Dana was at the cabin before the attack, contradicting her motel alibi. The conversation was confrontational and Celeste was recording.",
          "tags": [
            "digital",
            "presence",
            "audio"
          ],
          "relatedSuspects": [
            "dana-quill"
          ],
          "foundAt": "12:40"
        }
      ],
      "timeline": [
        {
          "id": "t1",
          "time": "19:40",
          "title": "Posts scheduled",
          "detail": "Dana's login schedules three posts for the evening.",
          "source": "Content platform",
          "verified": true,
          "disputed": false,
          "actors": [
            "dana-quill"
          ]
        },
        {
          "id": "t2",
          "time": "20:50",
          "title": "Dana checks into motel",
          "detail": "Dana checks into room 14 but leaves the car unaccounted for.",
          "source": "Motel clerk",
          "verified": true,
          "disputed": false,
          "actors": [
            "dana-quill"
          ]
        },
        {
          "id": "t3",
          "time": "20:59",
          "title": "Voice on livestream",
          "detail": "A woman matching Dana's voice tells Celeste to put her phone down.",
          "source": "Archived livestream",
          "verified": true,
          "disputed": false,
          "actors": [
            "dana-quill"
          ]
        },
        {
          "id": "t4",
          "time": "21:10",
          "title": "Rental car arrives",
          "detail": "Dana's car is logged on the lake service road.",
          "source": "Car telematics",
          "verified": true,
          "disputed": false,
          "actors": [
            "dana-quill"
          ]
        },
        {
          "id": "t5",
          "time": "21:30",
          "title": "Dock argument",
          "detail": "A neighbour sees two women arguing; Celeste says, 'You can't just take it.'",
          "source": "Witness: June Alvarez",
          "verified": true,
          "disputed": false,
          "actors": [
            "dana-quill",
            "celeste-rios"
          ]
        },
        {
          "id": "t6",
          "time": "21:45",
          "title": "Celeste killed",
          "detail": "Blunt-force injury at the dock; blood is diluted and partially washed.",
          "source": "Forensic estimate",
          "verified": true,
          "disputed": false,
          "actors": [
            "celeste-rios",
            "dana-quill"
          ]
        },
        {
          "id": "t7",
          "time": "22:10",
          "title": "Body hidden",
          "detail": "Drag marks lead to the old pump house.",
          "source": "Forensic evidence",
          "verified": true,
          "disputed": false,
          "actors": [
            "dana-quill"
          ]
        },
        {
          "id": "t8",
          "time": "22:30",
          "title": "Kayak launched",
          "detail": "The kayak is set adrift with Celeste's phone in the dry bag.",
          "source": "Kayak and phone evidence",
          "verified": true,
          "disputed": false,
          "actors": [
            "dana-quill"
          ]
        },
        {
          "id": "t9",
          "time": "23:40",
          "title": "Dana leaves the lake",
          "detail": "Her rental car returns to the motel.",
          "source": "Car telematics",
          "verified": true,
          "disputed": false,
          "actors": [
            "dana-quill"
          ]
        },
        {
          "id": "t10",
          "time": "07:10",
          "title": "Kayak found",
          "detail": "Ranger Ward tows in the empty kayak and finds the phone.",
          "source": "Ranger log",
          "verified": true,
          "disputed": false,
          "actors": [
            "felix-ward"
          ]
        }
      ],
      "contradictions": [
        {
          "id": "c-dana-motel",
          "title": "The motel alibi",
          "detail": "Dana says she was at the motel from 21:00. The clerk saw her car missing, and telematics place it on the lake service road from 21:10 to 23:40. A livestream also captures her voice at 20:59.",
          "suspectId": "dana-quill",
          "evidenceIds": [
            "e-car",
            "e-livestream"
          ],
          "questions": [
            "dana-quill:q1",
            "dana-quill:q2"
          ],
          "hint": "The rental car has its own memory. Compare it with the motel clerk's rounds."
        },
        {
          "id": "c-dana-raincoat",
          "title": "The yellow raincoat",
          "detail": "Dana says she never visited the lake. A yellow fibre matching her torn raincoat was caught on the dock, and a neighbour saw a taller woman in a yellow raincoat arguing with Celeste.",
          "suspectId": "dana-quill",
          "evidenceIds": [
            "e-raincoat"
          ],
          "questions": [
            "dana-quill:q1"
          ],
          "hint": "The neighbour's description and the torn hem point to the same person."
        },
        {
          "id": "c-dana-money",
          "title": "Business expenses",
          "detail": "Dana calls the transfers routine business. $312,000 went to a shell company owned by her brother, and Celeste had contacted a lawyer for Monday.",
          "suspectId": "dana-quill",
          "evidenceIds": [
            "e-finance"
          ],
          "questions": [
            "dana-quill:q4"
          ],
          "hint": "Follow the money and the Monday meeting."
        }
      ],
      "motiveOptions": [
        {
          "id": "embezzlement",
          "text": "Silence Celeste before she exposed $312,000 in embezzlement and terminated the management contract."
        },
        {
          "id": "jealousy",
          "text": "Punish Celeste for a romantic betrayal with Noah."
        },
        {
          "id": "inheritance",
          "text": "Inherit Celeste's social media accounts and brand deals."
        },
        {
          "id": "ranger",
          "text": "Protect the lake's illegal rental scheme from Celeste's investigation."
        }
      ],
      "methodOptions": [
        {
          "id": "dock",
          "text": "Confronted Celeste at the dock, struck her with a kayak oar, hid the body in the old pump house, and set the empty kayak adrift to fake a drowning."
        },
        {
          "id": "drown",
          "text": "Drugged Celeste, put her in the kayak, and capsized it in deep water."
        },
        {
          "id": "pumphouse",
          "text": "Locked Celeste in the pump house and left her to be found after the weekend."
        },
        {
          "id": "noah",
          "text": "Used Noah's bar alibi to cover a jealous attack, then staged the kayak with his camera equipment."
        }
      ],
      "hints": [
        "The posts after 21:14 came from a scheduler, not from Celeste's phone. Check who controlled the schedule.",
        "The dock blood and the drag marks tell a different story from a kayaking accident. Follow the path around the boathouse.",
        "The rental car's GPS and the motel clerk contradict Dana's story. Then ask why she needed to be at the lake."
      ],
      "solution": {
        "culpritId": "dana-quill",
        "motiveId": "embezzlement",
        "methodId": "dock",
        "evidenceIds": [
          "e-oar",
          "e-car",
          "e-pump"
        ],
        "headline": "The manager erased the influencer and kept posting.",
        "summary": "Dana Quill attacked Celeste Rios at the dock, hid her body in the old pump house, and set the kayak adrift to stage a drowning. She had embezzled $312,000 and Celeste was about to expose her. Dana used the content scheduler to keep Celeste's account active after the murder.",
        "explanation": [
          "Celeste's blood was found on the dock and partially washed away. A drag trail led to the old pump house, where her bracelet, fresh drag marks, Dana's boot print, and a yellow raincoat fibre were recovered. The missing kayak oar, bearing Celeste's blood and Dana's fingerprint, was found behind the pump house.",
          "Dana claimed she spent the night at the Lakeside Motor Inn. Her rental car's telematics place it on the lake service road from 21:10 to 23:40, and the motel clerk saw the parking space empty. A livestream archived at 20:59 captures Dana's voice telling Celeste to put the phone down.",
          "The posts after 21:14 were scheduled in advance under Dana's agency login; Celeste's phone was never manually unlocked after 20:52. The kayak's footrests were set for Dana's height, not Celeste's. The scene was staged to look like a solo paddling accident.",
          "The motive is financial. $312,000 had been moved from Celeste's brand account to a shell company owned by Dana's brother. Celeste had obtained the statements and emailed a lawyer for a Monday meeting. Dana killed her to stop the exposure and keep control of the business."
        ],
        "timelineReconstruction": [
          {
            "time": "20:59",
            "event": "Dana confronts Celeste on the livestream; Celeste keeps recording."
          },
          {
            "time": "21:30",
            "event": "The argument moves to the dock. A neighbour hears Celeste say, 'You can't just take it.'"
          },
          {
            "time": "21:45",
            "event": "Dana strikes Celeste with a kayak oar and hides the body in the pump house."
          },
          {
            "time": "22:30",
            "event": "Dana sets the empty kayak adrift with Celeste's phone inside, then returns to the motel."
          }
        ],
        "redHerring": "Noah Mercer argued with Celeste and had a business motive, but the bartender places him at the Copper Dock throughout the critical window. Sasha Voss had social media access but was not at the lake and did not control the scheduler. Ranger Ward had pump-house keys and a grudge, but his patrol log and radio checks place him on the north shore. Dana's car, raincoat, fingerprint, and financial motive converge."
      }
    }
  }
};
