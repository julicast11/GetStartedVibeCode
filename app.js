'use strict';

/* ════════════════════════════════════════════════════════════════
   LOCAL-STORAGE KEYS
════════════════════════════════════════════════════════════════ */
const LS_OS       = 'vibe_os';
const LS_STAGE    = 'vibe_stage';
const LS_PROG_MAC = 'progress_mac';
const LS_PROG_WIN = 'progress_windows';
const LS_CUR_MAC  = 'current_step_id_mac';
const LS_CUR_WIN  = 'current_step_id_win';

/* ════════════════════════════════════════════════════════════════
   STEP DATA
   os          : 'both' | 'mac' | 'windows'
   required    : bool   → shows red "Required" badge
   optional    : bool   → shows amber "Optional" badge
   windowsOnly : bool   → shows blue "Windows Only" badge
   osSpecific  : { mac: {heading, bullets[]}, windows: {heading, bullets[]} }
   command     : string | null  (dark code block)
   hasCopyBtn  : bool
   links       : [{text, url}]
   tip         : string | null
   warn        : string | null
   subSections : [{heading, bullets[]}] | null  (extra named sections)
════════════════════════════════════════════════════════════════ */
const STAGE_ORDER = ['presetup', 'setup', 'workflow'];

const ALL_STEPS = [

  /* ══════════════════════════════════════════════════════════════
     PRE-SETUP — local-only workflow (no GitHub, no hosting)
  ══════════════════════════════════════════════════════════════ */

  /* ── PS1 ────────────────────────────────────────────────────── */
  {
    id: 101,
    title: 'Create your website with Claude (no code editor needed)',
    shortTitle: 'Create with Claude',
    stage: 'presetup',
    os: 'both', windowsOnly: false, required: false, optional: false,
    explanation: 'Make a simple website without GitHub or hosting. This path focuses on local files — no GitHub account required. Free plans can work, but you may hit usage limits depending on your plan.',
    bullets: [
      'Open Claude (web or desktop app)',
      'Describe the website you want',
      'Ask Claude to output a single <code>index.html</code> file (CSS in <code>&lt;style&gt;</code>, JS in <code>&lt;script&gt;</code>)'
    ],
    osSpecific: null, subSections: null,
    command: null, hasCopyBtn: false, links: [],
    tip: 'Sample prompt: "Create a single-file landing page in plain HTML/CSS/JS. Put CSS in a &lt;style&gt; tag and JS in a &lt;script&gt; tag."',
    warn: null
  },

  /* ── PS2 ────────────────────────────────────────────────────── */
  {
    id: 102,
    title: 'Download index.html',
    shortTitle: 'Download index.html',
    stage: 'presetup',
    os: 'both', windowsOnly: false, required: false, optional: false,
    explanation: 'Save Claude\'s output as a file on your computer.',
    bullets: [
      'Copy Claude\'s output into a file named <code>index.html</code>',
      'Save it into a new folder (example: <code>MyWebsite/</code>)',
      'Keep everything together in that folder'
    ],
    osSpecific: null, subSections: null,
    command: null, hasCopyBtn: false, links: [],
    tip: null, warn: null
  },

  /* ── PS3 ────────────────────────────────────────────────────── */
  {
    id: 103,
    title: 'Open the website locally',
    shortTitle: 'Open locally',
    stage: 'presetup',
    os: 'both', windowsOnly: false, required: false, optional: false,
    explanation: 'View your website in a browser — no server needed.',
    bullets: [
      'Double-click <code>index.html</code> to open it in your browser',
      'Refresh the browser to see changes'
    ],
    osSpecific: null, subSections: null,
    command: 'open index.html',
    hasCopyBtn: true, links: [],
    tip: 'On Windows, just double-click the file in Explorer, or run <code>start index.html</code> in the terminal.',
    warn: null
  },

  /* ── PS4 ────────────────────────────────────────────────────── */
  {
    id: 104,
    title: 'Update your site later (replace the file)',
    shortTitle: 'Update the file',
    stage: 'presetup',
    os: 'both', windowsOnly: false, required: false, optional: false,
    explanation: 'When you want to make changes, ask Claude for a new version and swap the file.',
    bullets: [
      'When you ask Claude to make changes, it generates a new version of <code>index.html</code>',
      'Download or save the new version',
      'Replace the old <code>index.html</code> in your folder'
    ],
    osSpecific: null, subSections: null,
    command: null, hasCopyBtn: false, links: [],
    tip: null,
    warn: 'This workflow does not auto-update. You must replace the file each time.'
  },

  /* ── PS5 ────────────────────────────────────────────────────── */
  {
    id: 105,
    title: 'When you\'re ready, publish it',
    shortTitle: 'Ready to publish',
    stage: 'presetup',
    os: 'both', windowsOnly: false, required: false, optional: false,
    explanation: 'Pre-Setup is great for practice. When you want to share your site publicly, continue with the Setup and Workflow stages to use GitHub Pages.',
    bullets: [
      'Pre-Setup is great for practice and learning',
      'To share your site publicly, continue with <strong>Setup + Workflow</strong> (GitHub Pages)',
      'The next stages walk you through installing Claude Code, Git, and deploying online'
    ],
    osSpecific: null, subSections: null,
    command: null, hasCopyBtn: false, links: [],
    tip: null, warn: null
  },

  /* ── PS6 ────────────────────────────────────────────────────── */
  {
    id: 106,
    title: 'Let\'s get started',
    shortTitle: 'Let\'s get started',
    stage: 'presetup',
    os: 'both', windowsOnly: false, required: false, optional: false,
    explanation: 'Before we dive in, here\'s a quick look at the three technologies that make every website work:<br><br><strong>HTML</strong> — defines the structure and content of a page (headings, paragraphs, buttons).<br><strong>CSS</strong> — controls the styling and layout (colors, spacing, fonts).<br><strong>JavaScript</strong> — adds interactivity and behavior (clicks, navigation, animations).<br><br>In this workshop you\'ll ask Claude to generate a single <code>index.html</code> file that contains all three — HTML for the page, CSS inside a <code>&lt;style&gt;</code> tag, and JavaScript inside a <code>&lt;script&gt;</code> tag. One file is all a browser needs to run your project. No server, no framework, no build step.',
    bullets: [
      'Open Claude (web or desktop app)',
      'Describe the website or app you want to build',
      'Ask Claude to put everything in a single <code>index.html</code> file',
      'Copy the output and save it as <code>index.html</code>',
      'Open the file in your browser to see it live'
    ],
    osSpecific: null, subSections: null,
    command: 'Build me a personal landing page with a hero section, an about paragraph, and a contact link. Put everything in a single index.html file with CSS in a <style> tag and JavaScript in a <script> tag.',
    hasCopyBtn: true, links: [],
    tip: 'You can change the prompt to describe any website you want. The key requirement is that Claude outputs a single self-contained index.html file.',
    warn: null
  },

  /* ══════════════════════════════════════════════════════════════
     SETUP
  ══════════════════════════════════════════════════════════════ */

  /* ── 1 ─────────────────────────────────────────────────────── */
  {
    id: 1,
    title: 'Download Claude Desktop',
    shortTitle: 'Download Claude Desktop',
    stage: 'setup',
    os: 'both', windowsOnly: false, required: false, optional: false,
    explanation: 'Head to Anthropic\'s official website and download the Claude Desktop application for your operating system.',
    bullets: [
      'Visit <strong>claude.ai/download</strong> in your browser',
      'Click the download button for your operating system',
      'Save the installer file to your Downloads folder'
    ],
    osSpecific: null, subSections: null,
    command: null, hasCopyBtn: false,
    links: [{ text: 'claude.ai/download ↗', url: 'https://claude.ai/download' }],
    tip: null,
    warn: null
  },

  /* ── 2 ─────────────────────────────────────────────────────── */
  {
    id: 2,
    title: 'Install and open the app',
    shortTitle: 'Install the app',
    stage: 'setup',
    os: 'both', windowsOnly: false, required: false, optional: false,
    explanation: 'Run the installer and sign in with your Anthropic account to get Claude Desktop up and running.',
    bullets: [],
    osSpecific: {
      mac: {
        heading: 'On Mac',
        bullets: [
          'Open the downloaded <code>.dmg</code> file from Downloads',
          'Drag <strong>Claude</strong> into the <strong>Applications</strong> folder',
          'Launch Claude via <span data-tooltip="Press Cmd+Space to open Spotlight, then type the app name">Spotlight</span> or from Applications',
          'Sign in with your Anthropic account when prompted'
        ]
      },
      windows: {
        heading: 'On Windows',
        bullets: [
          'Run the downloaded <code>.exe</code> installer',
          'Follow the setup wizard — default settings are fine',
          'Launch Claude from the <strong>Start Menu</strong>',
          'Sign in with your Anthropic account when prompted'
        ]
      }
    },
    subSections: null, command: null, hasCopyBtn: false,
    links: [],
    tip: 'Once you see the Claude chat interface, the installation was successful.',
    warn: null
  },

  /* ── 3 · NEW ────────────────────────────────────────────────── */
  {
    id: 3,
    title: 'Choose a Claude Membership',
    shortTitle: 'Choose a Membership',
    stage: 'setup',
    os: 'both', windowsOnly: false, required: true, optional: false,
    explanation: 'Claude Code requires a paid Claude plan. The free plan does not include enough usage or the required tools for building apps consistently.',
    bullets: [],
    osSpecific: null,
    subSections: [
      {
        heading: '⭐ Recommended: Claude Pro (~$20/month)',
        bullets: [
          'Best option for workshops and individual developers',
          'Full access to Claude Code and higher usage limits',
          'Approx. $20/month — cancel any time',
          'Go to <strong>claude.ai → Settings → Billing → Upgrade to Pro</strong>'
        ]
      },
      {
        heading: '🏢 Alternative: Claude Teams',
        bullets: [
          'Designed for companies or collaborative teams',
          'Shared workspace, admin controls, and team management tools',
          'Higher cost — better suited for organisations than individuals'
        ]
      },
      {
        heading: '🆓 Free Plan — Important Note',
        bullets: [
          'The free plan lets you try Claude but is usually not enough for sustained Claude Code use',
          'You may hit rate limits quickly during active development',
          'Upgrade before the workshop to avoid interruptions'
        ]
      }
    ],
    command: null, hasCopyBtn: false,
    links: [{ text: 'claude.ai/settings ↗', url: 'https://claude.ai/settings' }],
    tip: null,
    warn: 'You must be on Claude Pro (or Teams) to use Claude Code reliably. Upgrade before continuing.'
  },

  /* ── 4 ─────────────────────────────────────────────────────── */
  {
    id: 4,
    title: 'Turn off Auto-reload and Extra Usage',
    shortTitle: 'Auto-reload & Extra Usage',
    stage: 'setup',
    os: 'both', windowsOnly: false, required: false, optional: false,
    explanation: 'Disable Auto-reload and Extra Usage to prevent unexpected charges and unwanted app behaviour.',
    bullets: [
      'Click the <strong>gear icon ⚙</strong> or open the app <strong>Settings</strong>',
      'Find <strong>Auto-reload</strong> and switch it <strong>off</strong>',
      'Find <strong>Extra Usage</strong> and switch it <strong>off</strong>',
      'Save or close the settings panel'
    ],
    osSpecific: null, subSections: null, command: null, hasCopyBtn: false, links: [],
    tip: null,
    warn: 'Leaving Extra Usage on may trigger additional billing if your usage spikes.'
  },

  /* ── 5 ─────────────────────────────────────────────────────── */
  {
    id: 5,
    title: 'Turn off training data sharing',
    shortTitle: 'Disable data sharing',
    stage: 'setup',
    os: 'both', windowsOnly: false, required: false, optional: false,
    explanation: 'Opt out of contributing your conversations to model training to keep your code and data private.',
    bullets: [
      'Go to <strong>Settings → Privacy</strong>',
      'Find <em>"Improve Claude for everyone"</em> or <em>"Share usage data"</em>',
      'Toggle it <strong>off</strong>',
      'Your prompts and code won\'t be used to train future models'
    ],
    osSpecific: null, subSections: null, command: null, hasCopyBtn: false, links: [],
    tip: 'Recommended for anyone working with proprietary code or business logic.',
    warn: null
  },

  /* ── 6 ─────────────────────────────────────────────────────── */
  {
    id: 6,
    title: 'Turn on Memory settings',
    shortTitle: 'Enable Memory',
    stage: 'setup',
    os: 'both', windowsOnly: false, required: false, optional: false,
    explanation: 'Enable Memory so Claude can remember your preferences, stack, and context across separate conversations.',
    bullets: [
      'Go to <strong>Settings → Memory</strong>',
      'Toggle <strong>Memory on</strong>',
      'Optionally add a note about your preferred language or tech stack',
      'Claude will use this context to give more relevant answers over time'
    ],
    osSpecific: null, subSections: null, command: null, hasCopyBtn: false, links: [],
    tip: 'Try adding: "I work in TypeScript with Next.js and deploy to Railway."',
    warn: null
  },

  /* ── 7 ─────────────────────────────────────────────────────── */
  {
    id: 7,
    title: 'Enable Run on startup and Quick access',
    shortTitle: 'Startup & Quick access',
    stage: 'setup',
    os: 'both', windowsOnly: false, required: false, optional: false,
    explanation: 'Keep Claude instantly available by running it at startup and setting up a global keyboard shortcut.',
    bullets: [
      'Open <strong>Settings → General</strong>',
      'Enable <strong>"Run on startup"</strong> (or "Launch at login" on Mac)',
      'Configure the <strong>Quick access</strong> shortcut'
    ],
    osSpecific: {
      mac: {
        heading: 'On Mac',
        bullets: [
          'Enable <strong>"Launch at login"</strong> in Settings → General',
          'Claude will appear in your <strong>menu bar</strong> (top-right)',
          'Quick Access shortcut: typically <kbd>Cmd+Shift+Space</kbd>',
          'Open Claude instantly from any app without switching windows'
        ]
      },
      windows: {
        heading: 'On Windows',
        bullets: [
          'Enable <strong>"Run on startup"</strong> in Settings → General',
          'Claude will appear in the <span data-tooltip="The small icons area at the bottom-right of your taskbar">system tray</span>',
          'Right-click the tray icon to configure the Quick Access shortcut',
          'Use the shortcut to open Claude from any app instantly'
        ]
      }
    },
    subSections: null, command: null, hasCopyBtn: false, links: [],
    tip: null, warn: null
  },

  /* ── 8 ─────────────────────────────────────────────────────── */
  {
    id: 8,
    title: 'Open the Code tab',
    shortTitle: 'Open Code tab',
    stage: 'setup',
    os: 'both', windowsOnly: false, required: false, optional: false,
    explanation: 'Claude Desktop includes a dedicated Code tab optimised for software development — better syntax awareness and file context.',
    bullets: [
      'Look for the <strong>Code</strong> tab in the left sidebar or top navigation',
      'Click it to switch to the developer-focused interface',
      'Explore the code-specific options and settings here',
      'This is where you\'ll spend most of your development time with Claude'
    ],
    osSpecific: null, subSections: null, command: null, hasCopyBtn: false, links: [],
    tip: 'The Code tab provides improved syntax highlighting and better file context handling.',
    warn: null
  },

  /* ── 9 ─────────────────────────────────────────────────────── */
  {
    id: 9,
    title: 'Install Git',
    shortTitle: 'Install Git',
    stage: 'setup',
    os: 'windows', windowsOnly: true, required: false, optional: false,
    explanation: 'Git is required for version control on Windows. macOS users can skip this — Git comes pre-installed with Xcode Command Line Tools.',
    bullets: [
      'Visit <strong>git-scm.com/download/win</strong>',
      'Download the latest <strong>Git for Windows</strong> installer',
      'Run the installer — the default settings are recommended',
      'Open <strong>Git Bash</strong> or PowerShell and run <code>git --version</code> to confirm'
    ],
    osSpecific: null, subSections: null, command: null, hasCopyBtn: false,
    links: [{ text: 'git-scm.com/download/win ↗', url: 'https://git-scm.com/download/win' }],
    tip: null,
    warn: 'If you see this on Mac, check that you selected the correct OS above.'
  },

  /* ── 10 ────────────────────────────────────────────────────── */
  {
    id: 10,
    title: 'Set up the terminal',
    shortTitle: 'Set up terminal',
    stage: 'setup',
    os: 'both', windowsOnly: false, required: false, optional: false,
    explanation: 'Open and configure your terminal — you\'ll need it for the install command in the next step.',
    bullets: [],
    osSpecific: {
      mac: {
        heading: 'On Mac',
        bullets: [
          'Press <kbd>Cmd+Space</kbd> to open <span data-tooltip="macOS built-in search tool — press Cmd+Space to open it">Spotlight</span>',
          'Type <strong>Terminal</strong> and press <kbd>Enter</kbd>',
          'For a better experience, consider <strong>iTerm2</strong> (iterm2.com)',
          'Verify curl: run <code>curl --version</code>'
        ]
      },
      windows: {
        heading: 'On Windows',
        bullets: [
          'Press the <strong>Windows key</strong> → search <strong>Windows Terminal</strong> or <strong>PowerShell</strong>',
          'Right-click → <em>"Run as administrator"</em> if you hit permission errors',
          'Verify <span data-tooltip="curl is a command-line tool for transferring data via URLs">curl</span>: run <code>curl --version</code>',
          '<strong>Git Bash</strong> also works if you installed Git in the previous step'
        ]
      }
    },
    subSections: null, command: null, hasCopyBtn: false, links: [],
    tip: 'Keep your terminal open — you\'ll use it in the next step.',
    warn: null
  },

  /* ── 11 ────────────────────────────────────────────────────── */
  {
    id: 11,
    title: 'Install Claude Code',
    shortTitle: 'Install Claude Code',
    stage: 'setup',
    os: 'both', windowsOnly: false, required: false, optional: false,
    explanation: 'Run the official installer script in your terminal to install the Claude Code <span data-tooltip="CLI = Command-Line Interface. A text-based tool you run in a terminal.">CLI</span>.',
    bullets: [
      'Open your terminal (from the previous step)',
      'Copy and run the install command below',
      'Wait for the installation to complete — this may take a minute',
      'Open a <strong>new terminal window</strong> after installation'
    ],
    osSpecific: null, subSections: null,
    command: 'curl -fsSL https://claude.ai/install.sh | bash',
    hasCopyBtn: true, links: [],
    tip: 'If you see a permission error, try prepending <code>sudo</code> before the command.',
    warn: null
  },

  /* ── 12 ────────────────────────────────────────────────────── */
  {
    id: 12,
    title: 'Verify installation',
    shortTitle: 'Verify installation',
    stage: 'setup',
    os: 'both', windowsOnly: false, required: false, optional: false,
    explanation: 'Confirm Claude Code was installed correctly by checking the version in a fresh terminal window.',
    bullets: [
      'Open a <strong>new terminal window</strong> (this ensures your <span data-tooltip="PATH is a list of directories your system searches when you run a command">PATH</span> is updated)',
      'Run <code>claude --version</code>',
      'You should see a version number, e.g. <code>claude 1.x.x</code>',
      'If not found, restart your terminal and try again'
    ],
    osSpecific: null, subSections: null,
    command: 'claude --version',
    hasCopyBtn: false, links: [],
    tip: null,
    warn: null
  },

  /* ── 13 ────────────────────────────────────────────────────── */
  {
    id: 13,
    title: 'Set Tool access to Auto',
    shortTitle: 'Tool access: Auto',
    stage: 'setup',
    os: 'both', windowsOnly: false, required: false, optional: false,
    explanation: 'Configure Claude Code to automatically use tools without asking for permission on every single action.',
    bullets: [
      'Open Claude Code and run <code>/config</code> or open <strong>Settings</strong>',
      'Find the <strong>Tool access</strong> or <strong>Permissions</strong> section',
      'Set the value to <strong>Auto</strong>',
      'This lets Claude run shell commands, read files, and write code for you'
    ],
    osSpecific: null, subSections: null, command: null, hasCopyBtn: false, links: [],
    tip: null,
    warn: 'Only enable Auto mode in your own development environment — it grants Claude permission to run shell commands on your machine.'
  },

  /* ── 14 ────────────────────────────────────────────────────── */
  {
    id: 14,
    title: 'Connect Google Drive and GitHub',
    shortTitle: 'Connect integrations',
    stage: 'setup',
    os: 'both', windowsOnly: false, required: false, optional: false,
    explanation: 'Link your accounts so Claude can read from your Drive and interact with your GitHub repositories.',
    bullets: [
      'In Claude Desktop, go to <strong>Settings → Integrations</strong>',
      'Click <strong>Connect Google Drive</strong> and complete the <span data-tooltip="OAuth lets you authorise an app without sharing your password">OAuth</span> flow',
      'Click <strong>Connect GitHub</strong> and authorise Claude',
      'Choose which repos and Drive folders to share with Claude'
    ],
    osSpecific: null, subSections: null, command: null, hasCopyBtn: false,
    links: [
      { text: 'drive.google.com ↗', url: 'https://drive.google.com' },
      { text: 'github.com ↗', url: 'https://github.com' }
    ],
    tip: 'These integrations let Claude reference your documents and propose pull requests.',
    warn: null
  },

  /* ── 15 ────────────────────────────────────────────────────── */
  {
    id: 15,
    title: 'Enable desktop-commander extension',
    shortTitle: 'desktop-commander',
    stage: 'setup',
    os: 'both', windowsOnly: false, required: false, optional: false,
    explanation: 'The desktop-commander extension lets Claude control your desktop, manage files, and run local commands.',
    bullets: [
      'Open Claude Desktop',
      'Go to <strong>Extensions</strong> or the plugin marketplace',
      'Search for and enable <strong>desktop-commander</strong>',
      'Restart Claude Desktop if prompted'
    ],
    osSpecific: {
      mac: {
        heading: 'Mac — Permissions',
        bullets: [
          'macOS will prompt for <strong>Accessibility permissions</strong>',
          'Open <strong>System Settings → Privacy & Security → Accessibility</strong>',
          'Find <strong>Claude Desktop</strong> and toggle it <strong>on</strong>',
          'Re-launch Claude Desktop after granting access'
        ]
      },
      windows: {
        heading: 'Windows — Permissions',
        bullets: [
          'Windows may show a <span data-tooltip="UAC = User Account Control. A Windows security prompt that asks permission for elevated actions.">UAC prompt</span> — click <em>Yes</em>',
          'If blocked by antivirus, add Claude to your exceptions list',
          'Check <strong>Windows Defender → App & browser control</strong> if flagged',
          'Restart Claude Desktop if the extension doesn\'t appear'
        ]
      }
    },
    subSections: null, command: null, hasCopyBtn: false, links: [],
    tip: 'desktop-commander unlocks file-system access and terminal control — making Claude a true coding co-pilot.',
    warn: null
  },

  /* ── 16 ────────────────────────────────────────────────────── */
  {
    id: 16,
    title: 'Create a GitHub repository',
    shortTitle: 'Create GitHub repo',
    stage: 'setup',
    os: 'both', windowsOnly: false, required: false, optional: false,
    explanation: 'Set up a GitHub repository to version your project and collaborate with others.',
    bullets: [
      'Go to <strong>github.com</strong> and sign in (or create a free account)',
      'Click <strong>New repository</strong> (green button) at github.com/new',
      'Give it a name, description, and choose Public or Private',
      'Check <em>"Add a README file"</em> then click <strong>Create repository</strong>',
      'Clone it locally: <code>git clone &lt;your-repo-url&gt;</code>'
    ],
    osSpecific: null, subSections: null, command: null, hasCopyBtn: false,
    links: [{ text: 'github.com/new ↗', url: 'https://github.com/new' }],
    tip: 'With desktop-commander active, Claude can propose commits and open pull requests for you.',
    warn: null
  },

  /* ── 17 · UPDATED ───────────────────────────────────────────── */
  {
    id: 17,
    title: 'Choose a Hosting Option (Deployment)',
    shortTitle: 'Choose Hosting',
    stage: 'workflow',
    os: 'both', windowsOnly: false, required: false, optional: true,
    explanation: 'Hosting puts your app on the internet so others can use it. GitHub stores your code — but it does not run your app for users.',
    bullets: [],
    osSpecific: null,
    subSections: [
      {
        heading: '📦 GitHub vs Hosting — Why You May Need Both',
        bullets: [
          '<strong>GitHub</strong> = stores your code, tracks versions, allows collaboration (like Google Drive for code)',
          '<strong>Hosting</strong> = runs your app on servers and gives you a live public URL',
          'You typically use both: GitHub for source control + a host to deploy and serve the app'
        ]
      },
      {
        heading: '🆓 Free / Easy Options (Great for Demos)',
        bullets: [
          '<strong>GitHub Pages</strong> (free) — best for static sites (HTML/CSS/JS only)',
          '<strong>Netlify</strong> (free tier) — easy drag-and-drop deploy, connects to GitHub',
          '<strong>Vercel</strong> (free tier) — popular for modern web apps, connects to GitHub',
          '<strong>Cloudflare Pages</strong> (free tier) — fast global hosting, connects to GitHub'
        ]
      },
      {
        heading: '💳 Paid / More Powerful Options (Databases & Backend)',
        bullets: [
          '<strong>Railway</strong> (paid plans) — easy full-stack hosting, great for apps with databases',
          '<strong>Render</strong> (free/paid) — simple hosting for web services and databases',
          '<strong>Fly.io</strong> (paid) — flexible deployment, closer to production workflows',
          '<strong>AWS / Azure / Google Cloud</strong> (paid) — enterprise-grade, more setup required'
        ]
      },
      {
        heading: '⏩ When You Can Skip This Step',
        bullets: [
          'You are only running the project locally during the workshop',
          'Your project is a prototype and you don\'t need a public URL yet',
          'You already have a preferred hosting provider'
        ]
      }
    ],
    command: null, hasCopyBtn: false,
    links: [
      { text: 'netlify.com ↗', url: 'https://netlify.com' },
      { text: 'vercel.com ↗', url: 'https://vercel.com' },
      { text: 'railway.app ↗', url: 'https://railway.app' }
    ],
    tip: 'Workshop default: If you want the easiest path to a shareable link, pick ONE option (Netlify or Vercel) and connect it to your GitHub repo.',
    warn: null
  },

  /* ── W1 ─────────────────────────────────────────────────────── */
  {
    id: 18,
    title: 'Navigate to your website folder',
    shortTitle: 'Navigate to folder',
    stage: 'workflow',
    os: 'both', windowsOnly: false, required: false, optional: false,
    explanation: 'This workflow demonstrates how to develop and publish a website using Claude Code and GitHub Pages. GitHub is used here because it is one of the most common and beginner-friendly ways to host a website. However, the same development workflow can be used with other hosting platforms such as Netlify, Vercel, Cloudflare Pages, Railway, or traditional hosting providers. The only step that changes is how the site is deployed after development.<br><br>Run this command if your terminal is not already inside the project folder.',
    bullets: [
      'Open your terminal',
      'Run the <code>cd</code> command below, replacing the path with your actual project folder',
      'Then verify the files with <code>ls</code>',
      'Expected files: <code>index.html</code> and <code>.gitignore</code>'
    ],
    osSpecific: null, subSections: null,
    command: 'cd "/Users/yourusername/path-to-your-project-folder"',
    hasCopyBtn: false, links: [],
    tip: 'Run <code>ls</code> after navigating to confirm you can see your project files.',
    warn: null
  },

  /* ── W2 ─────────────────────────────────────────────────────── */
  {
    id: 19,
    title: 'Start Claude Code',
    shortTitle: 'Start Claude Code',
    stage: 'workflow',
    os: 'both', windowsOnly: false, required: false, optional: false,
    explanation: 'Open the AI coding environment inside your project folder.',
    bullets: [
      'Make sure your terminal is inside the project folder (see previous step)',
      'Run the command below to start Claude Code',
      'Give Claude a prompt describing what you want to build or change',
      'Exit Claude Code when done with <kbd>Ctrl+C</kbd>'
    ],
    osSpecific: null, subSections: null,
    command: 'claude',
    hasCopyBtn: true, links: [],
    tip: 'Example prompt: "Improve the design of index.html and add a hero section with a headline and CTA button."',
    warn: null
  },

  /* ── W3 ─────────────────────────────────────────────────────── */
  {
    id: 20,
    title: 'Run a local preview server',
    shortTitle: 'Local preview server',
    stage: 'workflow',
    os: 'both', windowsOnly: false, required: false, optional: false,
    explanation: 'This allows you to view the website in your browser while editing.',
    bullets: [
      'Run the command below in your terminal',
      'Open <strong>http://localhost:8080</strong> in your browser',
      'Refresh the browser after making changes to see updates',
      'Stop the server when done with <kbd>Ctrl+C</kbd>'
    ],
    osSpecific: null, subSections: null,
    command: 'python3 -m http.server 8080',
    hasCopyBtn: true, links: [],
    tip: null, warn: null
  },

  /* ── W4 ─────────────────────────────────────────────────────── */
  {
    id: 21,
    title: 'Upload changes to GitHub',
    shortTitle: 'Push to GitHub',
    stage: 'workflow',
    os: 'both', windowsOnly: false, required: false, optional: false,
    explanation: 'Once you are happy with your changes, publish them to GitHub.',
    bullets: [
      '<code>git add .</code> — stage all changed files',
      '<code>git commit -m "website update"</code> — save a snapshot',
      '<code>git push</code> — upload the changes to GitHub'
    ],
    osSpecific: null, subSections: null,
    command: null, hasCopyBtn: false, links: [],
    tip: null,
    warn: 'This step specifically publishes the site using GitHub Pages. If you are using another hosting provider, you would deploy the site using that platform\'s deployment process instead.'
  },

  /* ── W5 ─────────────────────────────────────────────────────── */
  {
    id: 22,
    title: 'View the live website',
    shortTitle: 'View live site',
    stage: 'workflow',
    os: 'both', windowsOnly: false, required: false, optional: false,
    explanation: 'GitHub Pages will automatically update the live site after you push changes.',
    bullets: [
      'Visit your GitHub Pages URL in a browser',
      'Example URL: <strong>https://yourusername.github.io/your-repository/</strong>',
      'It may take up to a minute for changes to appear',
      'If updates do not appear immediately, do a hard refresh'
    ],
    osSpecific: {
      mac: {
        heading: 'Hard refresh on Mac',
        bullets: [ 'Press <kbd>Cmd+Shift+R</kbd> to force reload the page without cache' ]
      },
      windows: {
        heading: 'Hard refresh on Windows',
        bullets: [ 'Press <kbd>Ctrl+Shift+R</kbd> to force reload the page without cache' ]
      }
    },
    subSections: null, command: null, hasCopyBtn: false, links: [],
    tip: null, warn: null
  },

  /* ── W6 ─────────────────────────────────────────────────────── */
  {
    id: 23,
    title: 'Full Workflow Summary',
    shortTitle: 'Workflow summary',
    stage: 'workflow',
    os: 'both', windowsOnly: false, required: false, optional: false,
    explanation: 'The complete development and publish cycle in one place.',
    bullets: [],
    osSpecific: null,
    subSections: [
      {
        heading: 'Complete cycle',
        bullets: [
          '<code>cd project-folder</code>',
          '<code>claude</code>',
          'Edit the website with Claude\'s help',
          '<kbd>Ctrl+C</kbd> — exit Claude Code',
          '<code>git add .</code>',
          '<code>git commit -m "update"</code>',
          '<code>git push</code>',
          'Refresh your browser to see the live site'
        ]
      }
    ],
    command: null, hasCopyBtn: false, links: [],
    tip: null, warn: null
  },

  /* ── W7 ─────────────────────────────────────────────────────── */
  {
    id: 24,
    title: 'Helpful Commands',
    shortTitle: 'Helpful commands',
    stage: 'workflow',
    os: 'both', windowsOnly: false, required: false, optional: false,
    explanation: 'Useful terminal commands to know during development.',
    bullets: [
      '<code>pwd</code> — check your current folder location',
      '<code>ls</code> — list files in the current folder',
      '<code>open index.html</code> — open the website file directly without a server (Mac)'
    ],
    osSpecific: null, subSections: null,
    command: null, hasCopyBtn: false, links: [],
    tip: null, warn: null
  },

  /* ── W8 ─────────────────────────────────────────────────────── */
  {
    id: 25,
    title: 'Key Idea',
    shortTitle: 'Key idea',
    stage: 'workflow',
    os: 'both', windowsOnly: false, required: false, optional: false,
    explanation: 'Understanding how the pieces connect.',
    bullets: [
      'Claude edits your code locally on your computer',
      'The preview server lets you see changes instantly in the browser',
      '<code>git push</code> publishes the changes online using GitHub Pages'
    ],
    osSpecific: null, subSections: null,
    command: null, hasCopyBtn: false, links: [],
    tip: null, warn: null
  }

]; // END ALL_STEPS


/* ════════════════════════════════════════════════════════════════
   STATE
════════════════════════════════════════════════════════════════ */
let selectedOS    = null;
let selectedStage = 'presetup';
let filteredSteps = [];   // steps for current OS + stage
let currentIndex  = 0;
let completedSet  = new Set();


/* ════════════════════════════════════════════════════════════════
   SCREEN HELPERS
════════════════════════════════════════════════════════════════ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}


/* ════════════════════════════════════════════════════════════════
   AUTO-DETECT OS
════════════════════════════════════════════════════════════════ */
function autoDetectOS() {
  const plat = navigator.platform || '';
  const ua   = navigator.userAgent || '';
  let detected = null;
  if (/Mac/.test(plat) || /Mac/.test(ua)) detected = 'mac';
  else if (/Win/.test(plat) || /Windows/.test(ua)) detected = 'windows';

  const note = document.getElementById('autodetectNote');
  if (detected && note) {
    const label = detected === 'mac' ? 'Mac' : 'Windows';
    note.textContent = `We detected ${label} — click the button above to confirm, or choose the other.`;
    const btn = document.getElementById(detected === 'mac' ? 'macBtn' : 'winBtn');
    if (btn) btn.classList.add('detected');
  }

  return detected;
}


/* ════════════════════════════════════════════════════════════════
   OS SELECTION
════════════════════════════════════════════════════════════════ */
function selectOS(os) {
  selectedOS = os;
  localStorage.setItem(LS_OS, os);
  loadProgress();
  initWizard();
}

function changeOS() {
  localStorage.removeItem(LS_OS);
  selectedOS = null;
  showScreen('osScreen');
}

/* ════════════════════════════════════════════════════════════════
   OS SWITCH PANEL
════════════════════════════════════════════════════════════════ */
function toggleOsPanel(e) {
  if (e) e.stopPropagation();
  const panel = document.getElementById('osSwitchPanel');
  const item  = document.getElementById('chooseItem');
  if (!panel) return;
  const isOpen = panel.classList.toggle('is-open');
  if (item) item.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  syncOsSwitchBtns();
}

function closeOsPanel() {
  const panel = document.getElementById('osSwitchPanel');
  const item  = document.getElementById('chooseItem');
  if (panel) panel.classList.remove('is-open');
  if (item)  item.setAttribute('aria-expanded', 'false');
}

function syncOsSwitchBtns() {
  const mac = document.getElementById('osSwitchMac');
  const win = document.getElementById('osSwitchWin');
  if (!mac || !win) return;
  mac.classList.toggle('is-active', selectedOS === 'mac');
  win.classList.toggle('is-active', selectedOS === 'windows');
}

function switchOS(os) {
  if (os === selectedOS) { closeOsPanel(); return; }
  selectedOS    = os;
  selectedStage = 'presetup';
  localStorage.setItem(LS_OS, os);
  localStorage.setItem(LS_STAGE, 'presetup');
  loadProgress();
  // Jump to first incomplete presetup step; fall back to step 0
  const stageSteps = getStageSteps('presetup');
  const firstIncomplete = stageSteps.findIndex(s => !completedSet.has(s.id));
  currentIndex = firstIncomplete >= 0 ? firstIncomplete : 0;
  closeOsPanel();
  renderAll();
}


/* ════════════════════════════════════════════════════════════════
   PROGRESS STORAGE
════════════════════════════════════════════════════════════════ */
function getProgKey() { return selectedOS === 'mac' ? LS_PROG_MAC : LS_PROG_WIN; }
function getCurKey()  { return selectedOS === 'mac' ? LS_CUR_MAC  : LS_CUR_WIN;  }

function loadProgress() {
  const raw = localStorage.getItem(getProgKey());
  completedSet = raw ? new Set(JSON.parse(raw)) : new Set();

  const savedStage = localStorage.getItem(LS_STAGE);
  selectedStage = STAGE_ORDER.includes(savedStage) ? savedStage : 'setup';

  filteredSteps = getStageSteps(selectedStage);
  const savedStepId = parseInt(localStorage.getItem(getCurKey()) || '0', 10);
  const idx = filteredSteps.findIndex(s => s.id === savedStepId);
  currentIndex = idx >= 0 ? idx : 0;
}

function saveProgress() {
  localStorage.setItem(getProgKey(), JSON.stringify([...completedSet]));
  const currentStep = filteredSteps[currentIndex];
  if (currentStep) localStorage.setItem(getCurKey(), String(currentStep.id));
  localStorage.setItem(LS_STAGE, selectedStage);
}


/* ════════════════════════════════════════════════════════════════
   WIZARD INIT
════════════════════════════════════════════════════════════════ */
function initWizard() {
  filteredSteps = getStageSteps(selectedStage);
  currentIndex  = Math.min(currentIndex, filteredSteps.length - 1);
  currentIndex  = Math.max(currentIndex, 0);

  document.getElementById('osPill').textContent =
    selectedOS === 'mac' ? 'Mac' : 'Windows';

  showScreen('wizardScreen');
  renderAll();
}

function getStageSteps(stage) {
  return ALL_STEPS.filter(s =>
    (s.os === 'both' || s.os === selectedOS) && s.stage === stage
  );
}

function selectStage(stage) {
  selectedStage = stage;
  filteredSteps = getStageSteps(stage);
  currentIndex  = 0;
  saveProgress();
  renderAll();
}

function renderAll() {
  renderStageNav();
  renderSectionHeader();
  renderSidebar();
  renderDots();
  renderDetail();
  updateNav();
  syncOsSwitchBtns();
}

function renderSectionHeader() {
  const titles = {
    presetup: 'Pre-Setup',
    setup:    'Setup',
    workflow: 'Workflow'
  };
  const subs = {
    presetup: 'Build a website with Claude using local files — no GitHub or hosting needed.',
    setup:    'Get Claude Code installed and ready so you can start building at the workshop.',
    workflow: 'The repeating edit-preview-publish cycle used during the workshop.'
  };
  const titleEl = document.querySelector('.section-title');
  const subEl   = document.querySelector('.section-sub');
  if (titleEl) titleEl.textContent = titles[selectedStage] || 'Setup';
  if (subEl)   subEl.textContent   = subs[selectedStage]   || '';
}


/* ════════════════════════════════════════════════════════════════
   STAGE NAV
════════════════════════════════════════════════════════════════ */
function renderStageNav() {
  const items = {
    presetup: { el: document.getElementById('stagePresetup'), dot: document.getElementById('stageDotPresetup') },
    setup:    { el: document.getElementById('stageSetup'),    dot: document.getElementById('stageDotSetup') },
    workflow: { el: document.getElementById('stageWorkflow'), dot: document.getElementById('stageDotWorkflow') }
  };

  const activeIdx = STAGE_ORDER.indexOf(selectedStage);

  STAGE_ORDER.forEach((stage, i) => {
    const { el, dot } = items[stage];
    if (!el || !dot) return;

    if (i < activeIdx) {
      el.className       = 'stage-item stage-done stage-tab';
      dot.className      = 'stage-dot stage-dot-done';
      dot.textContent    = '\u2713';
    } else if (i === activeIdx) {
      el.className       = 'stage-item stage-active stage-tab';
      dot.className      = 'stage-dot stage-dot-active';
      dot.textContent    = '';
    } else {
      el.className       = 'stage-item stage-tab';
      dot.className      = 'stage-dot stage-dot-upcoming';
      dot.textContent    = '';
    }
  });
}


/* ════════════════════════════════════════════════════════════════
   SIDEBAR (step sub-list)
════════════════════════════════════════════════════════════════ */
function renderSidebar() {
  const list = document.getElementById('stepSubList');
  list.innerHTML = filteredSteps.map((step, i) => {
    const isActive = i === currentIndex;
    const isDone   = completedSet.has(step.id);
    const cls = ['step-sub-item',
      isActive ? 'is-active' : '',
      isDone   ? 'is-done'   : ''
    ].filter(Boolean).join(' ');

    const dotContent = isDone
      ? '✓'
      : `<span style="font-size:.58rem;font-weight:700">${i + 1}</span>`;

    const winBadge = step.windowsOnly
      ? '<span class="sub-win-badge">Win</span>' : '';

    return `
      <li class="${cls}"
          onclick="goToStep(${i})"
          role="button" tabindex="0"
          onkeydown="if(event.key==='Enter'||event.key===' ')goToStep(${i})">
        <span class="sub-dot">${dotContent}</span>
        <span style="flex:1;min-width:0">${step.shortTitle}</span>
        ${winBadge}
      </li>`;
  }).join('');

  // Scroll active item into view
  const active = list.querySelector('.is-active');
  if (active) active.scrollIntoView({ block: 'nearest', behavior: 'smooth' });

  // Update mobile button label
  const mob = document.getElementById('mobStepLabel');
  if (mob) {
    const step = filteredSteps[currentIndex];
    mob.textContent = step ? `Step ${currentIndex + 1}: ${step.shortTitle}` : 'Steps';
  }
}


/* ════════════════════════════════════════════════════════════════
   PROGRESS DOTS
════════════════════════════════════════════════════════════════ */
function renderDots() {
  const row = document.getElementById('progressDots');
  row.innerHTML = filteredSteps.map((step, i) => {
    const isDone    = completedSet.has(step.id);
    const isCurrent = i === currentIndex;
    const cls = ['prog-dot',
      isDone    ? 'dot-done'    : '',
      isCurrent ? 'dot-current' : ''
    ].filter(Boolean).join(' ');
    const title = `Step ${i + 1}: ${step.shortTitle}${isDone ? ' ✓' : ''}`;
    return `<div class="${cls}" onclick="goToStep(${i})" title="${title}" role="button" tabindex="0"></div>`;
  }).join('');

  // Update progress bar and step counter
  const done    = filteredSteps.filter(s => completedSet.has(s.id)).length;
  const total   = filteredSteps.length;
  const pct     = total > 0 ? Math.round(done / total * 100) : 0;
  const fill    = document.getElementById('progressBarFill');
  const label   = document.getElementById('progressLabel');
  const counter = document.getElementById('stepCounter');
  if (fill)    fill.style.width = pct + '%';
  if (label)   label.textContent = `${done} of ${total} completed`;
  if (counter) counter.textContent = `Step ${currentIndex + 1} of ${total}`;
}


/* ════════════════════════════════════════════════════════════════
   DETAIL CARD
════════════════════════════════════════════════════════════════ */
function renderDetail() {
  const step   = filteredSteps[currentIndex];
  const os     = selectedOS;
  const isDone = completedSet.has(step.id);
  let   html   = '';

  /* Badges */
  html += '<div class="card-meta">';
  html += `<span class="badge badge-step">Step ${currentIndex + 1} of ${filteredSteps.length}</span>`;
  if (step.required)    html += '<span class="badge badge-required">Required</span>';
  if (step.optional)    html += '<span class="badge badge-optional">Optional</span>';
  if (step.windowsOnly) html += '<span class="badge badge-win-only">Windows Only</span>';
  html += '</div>';

  /* Title */
  html += `<h2 class="card-title">${step.title}</h2>`;

  /* Explanation */
  html += `<p class="card-explanation">${step.explanation}</p>`;

  /* Shared bullets */
  if (step.bullets && step.bullets.length > 0) {
    html += `<ul class="card-bullets">${step.bullets.map(b => `<li>${b}</li>`).join('')}</ul>`;
  }

  /* OS-specific subsections */
  if (step.osSpecific) {
    const primary    = step.osSpecific[os];
    const otherOS    = os === 'mac' ? 'windows' : 'mac';
    const other      = step.osSpecific[otherOS];
    const otherLabel = otherOS === 'mac' ? 'Mac' : 'Windows';
    const primaryCls = os === 'mac' ? 'mac-section' : 'windows-section';
    const otherCls   = otherOS === 'mac' ? 'mac-section' : 'windows-section';

    if (primary) {
      html += `
        <div class="os-section ${primaryCls}">
          <p class="os-section-heading">${primary.heading}</p>
          <ul>${primary.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
        </div>`;
    }
    if (other) {
      html += `
        <button class="toggle-other-os" onclick="toggleOtherOS(this)">
          Show ${otherLabel} instructions ▾
        </button>
        <div class="os-section ${otherCls} hidden" id="otherOsBlock">
          <p class="os-section-heading">${other.heading}</p>
          <ul>${other.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
        </div>`;
    }
  }

  /* Named sub-sections (e.g. Membership tiers, Hosting types) */
  if (step.subSections && step.subSections.length > 0) {
    step.subSections.forEach(sec => {
      html += `<h4 class="card-sub-heading">${sec.heading}</h4>`;
      html += `<ul class="card-bullets">${sec.bullets.map(b => `<li>${b}</li>`).join('')}</ul>`;
    });
  }

  /* Command block */
  if (step.command) {
    html += `
      <div class="cmd-block">
        <code>${escHtml(step.command)}</code>
        ${step.hasCopyBtn ? '<button class="copy-btn" onclick="copyCommand(this)">Copy</button>' : ''}
      </div>`;
  }

  /* Tip */
  if (step.tip) {
    html += `<div class="tip-box"><span class="box-icon">💡</span><span>${step.tip}</span></div>`;
  }

  /* Warning */
  if (step.warn) {
    html += `<div class="warn-box"><span class="box-icon">⚠️</span><span>${step.warn}</span></div>`;
  }

  /* Links */
  if (step.links && step.links.length > 0) {
    html += '<div class="card-links">';
    step.links.forEach(l => {
      html += `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="card-link">${l.text}</a>`;
    });
    html += '</div>';
  }

  /* Mark as complete */
  html += `
    <hr class="card-divider" />
    <button class="mark-complete-btn ${isDone ? 'is-done' : ''}" onclick="toggleComplete()">
      <span class="mcb-circle">${isDone ? '✓' : ''}</span>
      <span class="mcb-label">${isDone ? 'Completed' : 'Mark as complete'}</span>
    </button>`;

  document.getElementById('stepCard').innerHTML = html;
  document.getElementById('appMain').scrollTop = 0;
}

function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}


/* ════════════════════════════════════════════════════════════════
   TOGGLE OTHER OS SECTION
════════════════════════════════════════════════════════════════ */
function toggleOtherOS(btn) {
  const block      = document.getElementById('otherOsBlock');
  if (!block) return;
  const otherLabel = selectedOS === 'mac' ? 'Windows' : 'Mac';
  const hidden     = block.classList.contains('hidden');
  block.classList.toggle('hidden');
  btn.textContent = hidden
    ? `Hide ${otherLabel} instructions ▴`
    : `Show ${otherLabel} instructions ▾`;
}


/* ════════════════════════════════════════════════════════════════
   NAVIGATION
════════════════════════════════════════════════════════════════ */
function updateNav() {
  const back = document.getElementById('navBack');
  const next = document.getElementById('navNext');
  const isFirstStage = selectedStage === STAGE_ORDER[0];
  const isLastStage  = selectedStage === STAGE_ORDER[STAGE_ORDER.length - 1];
  if (back) back.disabled = (currentIndex === 0 && isFirstStage);
  const isLast = currentIndex === filteredSteps.length - 1 && isLastStage;
  if (next) next.textContent = isLast ? 'Finish ✓' : 'Next →';
}

function prevStep() {
  if (currentIndex > 0) {
    currentIndex--;
    saveProgress();
    renderAll();
  } else {
    // Cross back to previous stage
    const idx = STAGE_ORDER.indexOf(selectedStage);
    if (idx > 0) {
      const prevStage = STAGE_ORDER[idx - 1];
      selectedStage = prevStage;
      filteredSteps = getStageSteps(prevStage);
      currentIndex  = filteredSteps.length - 1;
      saveProgress();
      renderAll();
    }
  }
}

function nextStep() {
  if (currentIndex < filteredSteps.length - 1) {
    currentIndex++;
    saveProgress();
    renderAll();
  } else {
    // Cross forward to next stage
    const idx = STAGE_ORDER.indexOf(selectedStage);
    if (idx < STAGE_ORDER.length - 1) {
      selectStage(STAGE_ORDER[idx + 1]);
    } else {
      showSuccess();
    }
  }
}

function skipStep() {
  if (currentIndex < filteredSteps.length - 1) {
    currentIndex++;
    saveProgress();
    renderAll();
  } else {
    const idx = STAGE_ORDER.indexOf(selectedStage);
    if (idx < STAGE_ORDER.length - 1) {
      selectStage(STAGE_ORDER[idx + 1]);
    } else {
      showSuccess();
    }
  }
}

function goToStep(index) {
  currentIndex = index;
  saveProgress();
  renderAll();
  closeSidebar();
}


/* ════════════════════════════════════════════════════════════════
   MARK AS COMPLETE
════════════════════════════════════════════════════════════════ */
function toggleComplete() {
  const step = filteredSteps[currentIndex];
  if (!step) return;
  if (completedSet.has(step.id)) {
    completedSet.delete(step.id);
  } else {
    completedSet.add(step.id);
  }
  saveProgress();
  renderSidebar();
  renderDots();

  // Re-render just the mark-complete button without losing scroll position
  const isDone = completedSet.has(step.id);
  const btn = document.querySelector('.mark-complete-btn');
  if (btn) {
    btn.classList.toggle('is-done', isDone);
    btn.querySelector('.mcb-circle').textContent = isDone ? '✓' : '';
    btn.querySelector('.mcb-label').textContent  = isDone ? 'Completed' : 'Mark as complete';
  }
}


/* ════════════════════════════════════════════════════════════════
   COPY COMMAND
════════════════════════════════════════════════════════════════ */
function copyCommand(btn) {
  const step = filteredSteps[currentIndex];
  if (!step || !step.command) return;

  const onCopied = () => {
    btn.textContent = '✓ Copied!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2400);
  };

  const fallback = () => {
    const ta = Object.assign(document.createElement('textarea'), {
      value: step.command,
      style: 'position:fixed;opacity:0'
    });
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (_) {}
    document.body.removeChild(ta);
  };

  if (navigator.clipboard && location.protocol !== 'file:') {
    navigator.clipboard.writeText(step.command).then(onCopied).catch(() => { fallback(); onCopied(); });
  } else {
    fallback(); onCopied();
  }
}


/* ════════════════════════════════════════════════════════════════
   SUCCESS SCREEN
════════════════════════════════════════════════════════════════ */
function showSuccess() {
  const step = filteredSteps[currentIndex];
  if (step) completedSet.add(step.id);
  saveProgress();

  document.getElementById('successOsBadge').textContent =
    selectedOS === 'mac' ? 'Mac Setup Complete' : 'Windows Setup Complete';

  showScreen('successScreen');
}

function restartWizard() {
  localStorage.removeItem(getProgKey());
  localStorage.removeItem(getCurKey());
  localStorage.removeItem(LS_OS);
  localStorage.removeItem(LS_STAGE);
  completedSet.clear();
  currentIndex  = 0;
  selectedOS    = null;
  selectedStage = 'presetup';
  filteredSteps = [];
  showScreen('osScreen');
}


/* ════════════════════════════════════════════════════════════════
   START OVER (with confirmation)
════════════════════════════════════════════════════════════════ */
function confirmRestart() {
  const done = completedSet.size;
  const msg  = done > 0
    ? `You have ${done} completed step${done > 1 ? 's' : ''}. Start over and clear progress?`
    : 'Start over from the beginning?';
  if (window.confirm(msg)) restartWizard();
}


/* ════════════════════════════════════════════════════════════════
   MOBILE SIDEBAR TOGGLE
════════════════════════════════════════════════════════════════ */
function toggleSidebar() {
  const sidebar  = document.getElementById('appSidebar');
  const overlay  = document.getElementById('sidebarOverlay');
  const isOpen   = sidebar.classList.contains('is-open');
  sidebar.classList.toggle('is-open', !isOpen);
  overlay.classList.toggle('hidden', isOpen);
}

function closeSidebar() {
  document.getElementById('appSidebar').classList.remove('is-open');
  document.getElementById('sidebarOverlay').classList.add('hidden');
}


/* ════════════════════════════════════════════════════════════════
   KEYBOARD NAVIGATION
════════════════════════════════════════════════════════════════ */
document.addEventListener('keydown', e => {
  if (!document.getElementById('wizardScreen').classList.contains('active')) return;
  const tag = document.activeElement.tagName;
  if (tag === 'INPUT' || tag === 'BUTTON' || tag === 'A' || tag === 'TEXTAREA') return;
  if (e.key === 'ArrowRight') { e.preventDefault(); nextStep(); }
  else if (e.key === 'ArrowLeft') { e.preventDefault(); prevStep(); }
});


/* ════════════════════════════════════════════════════════════════
   BOOT
════════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  const saved    = localStorage.getItem(LS_OS);
  const detected = autoDetectOS();

  if (saved === 'mac' || saved === 'windows') {
    // Previously saved — go straight to wizard
    selectedOS = saved;
    loadProgress();
    initWizard();
  } else if (detected) {
    // First visit but OS detected — skip the choose screen
    selectedOS = detected;
    localStorage.setItem(LS_OS, detected);
    loadProgress();
    initWizard();
  } else {
    // Cannot detect — show the choose screen
    showScreen('osScreen');
  }

  // Close OS panel on outside click
  document.addEventListener('click', (e) => {
    const panel = document.getElementById('osSwitchPanel');
    const item  = document.getElementById('chooseItem');
    if (panel && panel.classList.contains('is-open')) {
      if (!item.contains(e.target) && !panel.contains(e.target)) {
        closeOsPanel();
      }
    }
  });
});
