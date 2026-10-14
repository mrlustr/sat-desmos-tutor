# SAT Desmos Tutor

A static, single-page practice tool for the Digital SAT Math section. It teaches **calculator technique, not math theory**: the learner recognizes a trigger phrase in a question, maps it to a Desmos move, performs a few keystrokes, and reads the answer off the graph. Understanding the underlying algebra is optional and never required to get a question right.

The page shows a practice-question panel on the left and the embedded College Board Desmos test calculator (`https://www.desmos.com/testing/collegeboard/graphing`) on the right, so practice happens in the same calculator used on test day.

> **Branch note:** `answer-checking` is the branch served by GitHub Pages and is ahead of `main`. Work on it and push to it. `main` predates answer checking, the cue cards, the version footer and the removal of weekly headings. Merge `answer-checking` into `main` only when the owner says so.

## Design principles (why the interface looks the way it does)

These are deliberate constraints. Please preserve them when changing the UI or adding content.

1. **Low distraction.** One panel of practice on the left, the calculator on the right, nothing else competing. No popups, timers, scores that can be lost, or decorative elements. Feedback is short and neutral.
2. **Chunked, one thing at a time.** Each hack is a small card. Each card shows one question at a time (a random roll), not a list. A hack's drills are collapsed until opened.
3. **Progressive disclosure.** Nested `<details>` structure: card → "Practice Drills" → question → answer attempt → "Reveal Keystrokes & Answer". The learner sees the question first, attempts it, and only then opens the reveal. Do not flatten this or show answers by default.
4. **Attempt before reveal.** Answers can be checked (see below) so the learner commits to an answer and gets immediate feedback instead of just reading the solution. A wrong answer shows neutral feedback, **never** the answer, with unlimited retries. A correct answer opens the reveal so the learner can compare their keystrokes to the clean ones. No penalties, no lives, no lost points.
5. **Questions read like the real SAT.** Question text uses College Board phrasing ("In the given system of equations, k is a constant. If the system has no solution, what is the value of k?"). Question text must **never** contain Desmos coaching such as "drag k" or "click the vertex," because the real test won't. The skill being trained is mapping a trigger phrase to a technique.
6. **Cues live outside the question.** Each hack card has a yellow "👀 See this → do this" box mapping trigger phrases to the Desmos move. A header button ("Hide cues") hides all cue boxes (stored in `localStorage` under `cuesOff`) so later practice can rely on recall instead of the training wheels.
7. **Flat list, no pacing gates.** The six hacks are one continuous list with no weekly headings or locks. Pacing ("do some each day") is handled outside the page. The `<title>` still says "3-Week SAT Desmos Sprint" and has not been changed.
8. **Answers lead with the picture.** `ans` text starts with what is seen on the graph ("Lines parallel, never crossing. k = 3"), then gives the number.

## Files

| File | Purpose |
|---|---|
| `index.html` | Layout, Tailwind (CDN), one card per hack, cue cards, hide-cues toggle, version footer, Desmos iframe. |
| `questions.js` | `questionBank` data, `rollQuestion()`, answer checking, `QUESTIONS_VERSION`. |

No build step and no backend. Everything is static HTML/JS. Tailwind loads from `cdn.tailwindcss.com`, so the page needs internet (as does the Desmos iframe).

## Question schema

Each question is one object on one line in `questions.js`, inside `questionBank.hackN`:

```js
{ q: "…", eq1: "…", eq2: "…", ans: "…", key: "…" }
```

- `q` — question text, SAT phrasing, HTML allowed (`<br>` for line breaks and multiple-choice options as `A) …<br>B) …`).
- `eq1` — first line of Desmos input (shown in the reveal as "Line 1").
- `eq2` — optional second line ("Line 2").
- `ans` — what the reveal shows. Starts with the visual result.
- `key` — **optional** machine-checkable answer. A single letter `A`–`D` renders choice buttons; anything else renders a text box. If `key` is missing, the question has no answer box and behaves reveal-only.

The owner's original rule was to use only `q`, `eq1`, `eq2`, `ans`. `key` is the single approved addition (optional and backward compatible). Do not add other fields without asking.

### How answer checking works

- `parseNums()` extracts numbers from the input, accepting integers, decimals, `.5`, and fractions like `3/2`.
- `isCorrect(input, key)` compares a choice letter case-insensitively, otherwise compares the list of numbers with a 1e-6 tolerance. Coordinates like `(-4, 1)` and `-4,1` both work. Order matters.
- `checkAnswer(containerId, value)` shows feedback and opens the reveal (`<details id="q-hackN-reveal">`) on a correct answer.
- `currentQ[containerId]` holds the currently rolled question.

## Hack catalog

| # | Hack | Trigger phrase → Desmos move | Qs |
|---|---|---|---|
| 1 | Left vs. Right Split | "what is x" / "solution" to an equation → left side Line 1, right side Line 2, click the intersection | 12 |
| 2 | Slider Sweep (k) | "no solution" → drag k until lines are parallel; "infinitely many" → lines stack; "exactly one solution" with `y = k` or a tangent line → line just touches the curve | 13 |
| 3 | Equivalent Expressions | "equivalent to" → type the given expression, then each choice; the choice that hides it wins | 8 |
| 4 | Instant Regressions | table + "linear/exponential/quadratic/line of best fit" → build a table (`x_1`, `y_1`), then `y_1 ~ mx_1 + b` (or exponential or quadratic form); read parameters, pick the closest choice | 10 |
| 5 | Quadratic Extremas | "minimum/maximum/greatest value" → click vertex; "solution/zero" → click x-axis crossing | 8 |
| 6 | Circle Geometry | "circle" + radius/diameter/center → type the equation as written, read the edges | 8 |

Hack 4 data includes exact fits and noisy "best fit" tables whose least-squares values were computed, not guessed.

Each hack's HTML lives in `index.html` and is generated from the same card template: checkbox label, cue box, `<details>` "Practice Drills", a "🎲 Roll New Target" button calling `rollQuestion('hackN', 'q-hackN')`, and a `<div id="q-hackN">` target. `DOMContentLoaded` in `questions.js` rolls an initial question for each hack, so adding a hack requires a new card, a new `questionBank.hackN`, and a new `rollQuestion` line there.

## Coverage vs. the College Board Student Question Bank

Source: <https://satsuite.collegeboard.org/practice/student-question-bank/math>

Covered: linear equations in one variable, nonlinear equations in one variable, systems of two linear equations (and some nonlinear systems), equivalent expressions, nonlinear functions, two-variable data (models), circles.

**Not covered:** linear inequalities, linear functions/equations in two variables (only indirectly), all of Problem-Solving and Data Analysis except Hack 4's modeling (ratios/units, percentages, one-variable data, probability, inference/margin of error, evaluating claims), and Geometry & Trigonometry except circles (area/volume, lines/angles/triangles, right triangles/trig).

Candidate next hacks with a plausible Desmos move: inequalities (graph and test a point in the shaded region), one-variable data (Desmos `mean`, `median`, `stdev`), trig (`sin`/`cos`/`tan`; the degrees-vs-radians setting needs a cue). Percentages/probability/data-reasoning are mostly reading and arithmetic; consider a separate "fast guess" strategy instead of a hack.

I (the previous agent) recalled from memory that Algebra and Advanced Math are roughly 70% of the test; that is **unverified**. Check the College Board content-domains page before relying on it.

## Versioning, deploy and caching

- GitHub Pages serves a single branch, currently `answer-checking` (Settings → Pages → Deploy from a branch).
- The page footer shows `Page version`, `Questions version` and the server's `document.lastModified`. If the two version stamps differ, the browser is serving a stale copy of one file.
- `questions.js` is loaded with a `?v=` query tag as a cache-buster.
- **The stamps are manual.** On every commit that changes `index.html` or `questions.js`, update the same `YYYY-MM-DD HH:MM PT` time in all three places: the footer text in `index.html`, the `?v=YYYY-MM-DD_HHMM_PT` tag on the `<script src>` in `index.html`, and `QUESTIONS_VERSION` at the top of `questions.js`. A small stamping script would remove this chore and has not been built.
- Pages deploys can lag a push by a minute or two. If the footer is older than the latest commit, wait, then hard-refresh or use a private window to rule out browser cache.

## How to verify changes

There is no test suite. What worked:

1. **Data checks in Node:** load `questions.js` with stubbed `window`/`document`, confirm each hack's entries have `q`, `eq1`, `ans` and only allowed fields, and recompute every numeric answer (vertices, circle centers/radii, regression fits, equivalence checks at several x values).
2. **Matcher tests:** call `isCorrect` with equivalent forms (`0.5`, `1/2`, `.5`, `(-4, 1)`).
3. **Headless browser smoke test:** Playwright with the preinstalled Chromium (`executablePath: '/opt/pw-browsers/chromium'`), load `index.html` via `file://`, open the Practice Drills toggle, answer wrong then right, assert the reveal stays closed on a wrong answer and opens on a right one, and assert there are no page errors. Allow `cdn.tailwindcss.com`, or the footer will not sit at the bottom of the viewport (Tailwind provides the full-height layout).
4. The Desmos iframe cannot be exercised from a sandbox. Anything involving real Desmos behavior must be tried by hand.

## Known issues and open items

- **LaTeX-style keystrokes.** Some `eq1`/`eq2` values use LaTeX notation (`\\sqrt{3x+1}`, `\\frac{x^2-9}{x-3}`, `ab^{x_1}`). That works when pasted but is not what a person types on test day, and Desmos has typing quirks (right arrow to leave exponents and subscripts). The owner was offered a rewrite into plain typed form (`sqrt(3x+1)`, `(x^2-9)/(x-3)`) tested in the real Desmos. Not yet done.
- **Hack 4 table entry.** The reveal gives the table as Line 1 (`+ → Table. Column x_1: …. Column y_1: ….`) and the regression as Line 2. Verify the exact table-entry steps in the live calculator.
- **Fractional k.** Several Hack 2 answers are fractions (1/2, 3/2). Slider step size in Desmos is unverified; if landing on those is hard, add a cue to type the value into the slider bound.
- **Hack 6 centers.** Unconfirmed whether Desmos lets you click a circle's center. Answers currently tell the learner to read the edges instead.
- **Checkbox persistence.** The per-hack checkboxes (`.task-check`) have no script and reset on reload. If daily practice tracking is wanted, store them in `localStorage` (try/catch wrapped), possibly resetting daily.
- **Leftover scaffolding.** The header comment "Timer buttons remain the same" refers to buttons that do not exist.
- **Wording not yet checked against real questions.** Drill wording was written from memory of the Digital SAT format. Compare against the Student Question Bank (free, filterable by skill) and adjust.
- **No streak or progress counter.** Offered and intentionally not built.

## Working conventions

- Commit on `answer-checking` and push. The repo is cloned shallow in some environments; if a stop hook claims commits are unpushed, run `git fetch --depth=1 origin +refs/heads/answer-checking:refs/remotes/origin/answer-checking` so the remote-tracking ref exists.
- Keep every numeric answer verified by computation before committing.
- Ask before changing the schema, the nested `<details>` flow, or the pacing model.
