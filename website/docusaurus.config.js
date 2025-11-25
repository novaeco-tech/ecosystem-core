const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'NovaEco',
    tagline: 'The Operating System for a Circular Economy',
    url: 'https://novaeco.tech',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    favicon: 'img/favicon.ico',
    organizationName: 'novaeco-tech',
    projectName: 'ecosystem-core',

    i18n: { defaultLocale: 'en', locales: ['en'] },

    markdown: {
        hooks: {
            onBrokenMarkdownLinks: 'warn',
        },
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/novaeco-tech/ecosystem-core/tree/main/website/',
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
                { href: 'https://app.novaeco.tech', label: 'Launch App', position: 'right' },
            ],
        },
        footer: {
            style: 'dark',
            links: [],
            copyright: `Copyright © ${new Date().getFullYear()} NovaEco.`,
        },
        prism: { theme: lightCodeTheme, darkTheme: darkCodeTheme },
    },
};

module.exports = config;
