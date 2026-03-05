# Vibe Coding Setup Wizard

## Project Goal
This project is a web-based setup wizard that guides users through installing and configuring tools for Vibe Coding workshops.

The interface should be simple, clean, and beginner-friendly.

## Tech Stack
- HTML
- CSS
- Vanilla JavaScript

No frameworks should be used.

## Main Files
- index.html — main layout of the wizard
- styles.css — UI styling
- app.js — wizard logic and step navigation

## Design Principles
- clean modern interface
- white cards with rounded corners
- soft gradient background
- clear typography
- green checkmarks for completed steps
- progress indicator across the top

## Behavior
The wizard should:

- show setup steps
- allow navigation with Back / Next
- show progress indicators
- allow marking steps as completed
- store progress in localStorage

## Platform Support
Instructions must support both:

- Mac
- Windows

Windows-only steps should be labeled clearly.

## Key Steps
The wizard must include:

1. Download Claude Desktop
2. Install and open the app
3. Choose Claude membership
4. Configure privacy settings
5. Enable memory
6. Enable desktop features
7. Open the Code tab
8. Install Git (Windows only)
9. Setup terminal
10. Install Claude Code
11. Verify installation
12. Enable tool access
13. Connect Google Drive + GitHub
14. Enable desktop commander
15. Create GitHub repo
16. Choose hosting option
17. Final success screen

## Editing Rules
When modifying the project:

- keep the code simple
- avoid unnecessary libraries
- maintain readable structure
- prioritize clarity for workshop participants

## Documentation Rule

Whenever functionality changes, Claude must also update `README.md`.

This includes changes to:

- wizard stages
- steps in `ALL_STEPS`
- navigation behavior
- workflow instructions
- commands shown to users
- project structure

The README should always reflect the current behavior of the application.

Do not rewrite the entire README.  
Only update the sections affected by the change.
