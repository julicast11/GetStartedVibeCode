# Vibecoding Setup Wizard

A static, single-page web app that guides workshop participants through installing and using Claude Code — step by step.

No build step, no framework. Open `index.html` in a browser and it works.

## Files

| File | Purpose |
|---|---|
| `index.html` | Shell HTML; three screens (`#osScreen`, `#wizardScreen`, `#successScreen`) |
| `styles.css` | All styling; uses CSS custom property design tokens in `:root` |
| `app.js` | All wizard logic; `ALL_STEPS` array is the single source of truth |

## How the wizard works

1. **Choose screen** — user picks Mac or Windows; saved to `localStorage`
2. **Wizard screen** — steps rendered from `ALL_STEPS`, filtered by OS and active stage
3. **Success screen** — shown after completing the last Workflow step

## Stage tabs

The left sidebar has three clickable stage tabs: **Pre-Setup**, **Setup**, and **Workflow**. Clicking a tab filters the step list to only show steps for that stage. Progress dots and the progress bar are scoped to the active stage.

- **Pre-Setup** (steps 101–105) — a no-GitHub, no-hosting workflow for building a website with Claude using local files only
- **Setup** (steps 1–16) — installing Git, Claude Code, creating a GitHub account, etc.
- **Workflow** (steps 17–25) — the repeating edit-preview-publish cycle used during the workshop

Navigation crosses stage boundaries automatically: Pre-Setup → Setup → Workflow. Pressing Next on the last step of a stage advances to the first step of the next stage, and pressing Back on the first step returns to the last step of the previous stage.

## State persistence

All state is saved in `localStorage` so a page refresh does not lose progress.

| Key | Value |
|---|---|
| `vibe_os` | `"mac"` or `"windows"` |
| `vibe_stage` | `"presetup"`, `"setup"`, or `"workflow"` |
| `progress_mac` / `progress_windows` | JSON array of completed step IDs |
| `current_step_id_mac` / `current_step_id_win` | Last viewed step ID |

## Adding or editing steps

Each entry in `ALL_STEPS` in `app.js` has these fields:

```js
{
  id: 1,                        // unique integer
  title: 'Full step title',
  shortTitle: 'Sidebar label',
  stage: 'presetup',             // 'presetup' | 'setup' | 'workflow'
  os: 'both',                   // 'both' | 'mac' | 'windows'
  windowsOnly: false,
  required: true,
  optional: false,
  explanation: 'Text shown under the step title.',
  bullets: [ 'Instruction one', 'Instruction two' ],
  osSpecific: null,             // or { mac: { heading, bullets }, windows: { heading, bullets } }
  subSections: null,            // or [{ heading, bullets }]
  command: null,                // string shown in a code block with copy button
  hasCopyBtn: false,
  links: [],                    // [{ label, url }]
  tip: null,                    // string shown in a tip callout
  warn: null                    // string shown in a warning callout
}
```

## Documentation Maintenance

This project uses Claude Code for development.

The `README.md` file should always stay synchronized with the project.

Whenever the following change:

- wizard stages
- step structure
- workflow instructions
- commands
- file structure
- navigation behavior

Claude should update `README.md` so the documentation reflects the current implementation.

Only the relevant sections should be updated — the structure and formatting of this README should remain consistent.
