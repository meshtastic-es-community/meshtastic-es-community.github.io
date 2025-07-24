import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import mdiIconify from './src/remark/mdi-iconify';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Comunidad Meshtastic España',
  tagline: 'Sitio web y documentación para la comunidad de Meshtastic en España',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  // url: 'https://meshtastic-es-community.github.io',
  url: 'https://meshtastic.es',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'meshtastic-es-community', // Usually your GitHub org/user name.
  projectName: 'meshtastic-es-community.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/meshtastic-es-community/meshtastic-es-community.github.io/tree/main/',
          beforeDefaultRemarkPlugins: [mdiIconify],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/meshtastic-es-community/meshtastic-es-community.github.io/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/meshtastic-es-social-card.jpg',
    metadata: [
      { name: 'description', content: 'Sitio web y documentación para la comunidad de Meshtastic en España' },
      { property: 'og:title', content: 'Comunidad Meshtastic España' },
      { property: 'og:description', content: 'Sitio web y documentación para la comunidad de Meshtastic en España' },
      { property: 'og:image:alt', content: 'Logo Comunidad Meshtastic España' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Comunidad Meshtastic España' },
      { name: 'twitter:description', content: 'Sitio web y documentación para la comunidad de Meshtastic en España' },
      { name: 'twitter:image:alt', content: 'Logo Comunidad Meshtastic España' },
    ],
    navbar: {
      title: 'Comunidad Meshtastic España',
      logo: {
        alt: 'Logo Meshstastic España',
        src: 'img/favicon.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentación',
        },
        { to: '/docs/buenas-practicas', label: 'Buenas Prácticas', position: 'left' },
        { to: '/docs/preguntas-frecuentes', label: 'Preguntas Frecuentes', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/meshtastic-es-community',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentación',
          items: [
            {
              label: 'Introducción',
              to: '/docs/introduccion',
            },
            {
              label: 'Primeros pasos',
              to: '/docs/primeros-pasos',
            },
            {
              label: 'Configuración inicial',
              to: '/docs/guias-basicas/configuracion-inicial',
            },
            {
              label: 'Buenas prácticas',
              to: '/docs/buenas-practicas',
            },
            {
              label: 'Preguntas frecuentes',
              to: '/docs/preguntas-frecuentes',
            }
          ],
        },
        {
          title: 'Communidad',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/meshtastic_esp',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/meshtastic-es-community',
            },
            {
              label: 'Ko-Fi',
              href: 'https://ko-fi.com/quixotesystems',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Herramientas',
          items: [
            {
              label: 'Mapa',
              href: 'https://mapa.meshtastic.es',
            },
            {
              label: 'Meshview',
              href: 'https://meshview.meshtastic.es',
            },
            {
              label: 'Malla',
              href: 'https://malla.meshtastic.es',
            },
            {
              label: 'Status',
              href: 'https://status.meshtastic.es/status/servicios/',
            },
          ],
        },
      ],
      copyright: `Comunidad Meshtastic España. Hecho con Docusaurus.`,
      logo: {
        alt: 'Logo Meshtastic Powered',
        src: 'img/m_pwrd.png',
        href: 'https://meshtastic.org/',
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }   satisfies Preset.ThemeConfig,

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,

        // For Docs using Chinese, it is recomended to set:
        // language: ["en", "zh"],

        // If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
        // forceIgnoreNoIndex: true,
      }),
    ]
  ]
};

export default config;
