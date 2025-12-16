const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;
const fs = require('fs');
const path = require('path');

// --- DYNAMIC VERSION LOGIC ---
// Priority 1: Environment Variable (Used in CI/CD for CalVer releases)
// Priority 2: GLOBAL_VERSION file (Used for local dev / component version)
// Priority 3: package.json (Fallback)
let currentVersion = process.env.NOVA_VERSION;

if (!currentVersion) {
    try {
        const globalVersionPath = path.resolve(__dirname, '../GLOBAL_VERSION');
        if (fs.existsSync(globalVersionPath)) {
            currentVersion = fs.readFileSync(globalVersionPath, 'utf8').trim();
        } else {
            currentVersion = require('./package.json').version;
        }
    } catch (err) {
        currentVersion = 'Dev';
    }
}

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'NovaEco',
    tagline: 'The Operating System for a Circular Economy',
    url: 'https://novaeco.tech',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    favicon: 'img/favicon.ico',
    organizationName: 'novaeco-tech',
    projectName: 'novaeco',

    i18n: { defaultLocale: 'en', locales: ['en'] },

    markdown: {
        mermaid: true,
        hooks: {
            onBrokenMarkdownLinks: 'warn',
        },
    },
    themes: ['@docusaurus/theme-mermaid'],

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/novaeco-tech/novaeco/tree/main/website/',
                },
                blog: {
                    showReadingTime: true,
                    onInlineAuthors: 'ignore',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],

    themeConfig: {
        navbar: {
            title: 'NovaEco',
            items: [
                { to: '/docs/intro', label: 'Docs', position: 'left' },
                { to: '/blog', label: 'Blog', position: 'left' },
                { href: 'https://admin.novaeco.tech', label: 'Launch Admin', position: 'right' },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/novaeco-tech',
                        },
                        {
                            label: 'Discussions',
                            href: 'https://github.com/orgs/novaeco-tech/discussions',
                        },
                    ],
                },
                {
                    title: 'Legal',
                    items: [
                        {
                            label: 'Imprint',
                            href: 'https://circular.engineering',
                        },
                    ],
                },
            ],
            // Displays: "System Version: v2026.11.01" in Prod, or "v0.1.0" in Dev
            copyright: `Copyright © ${new Date().getFullYear()} Circular Engineering Nova GmbH. <br/> <span style="font-size: 0.8em; opacity: 0.6;">System Version: ${currentVersion}</span>`,
        },
        prism: { theme: lightCodeTheme, darkTheme: darkCodeTheme },
    },
};

module.exports = config;