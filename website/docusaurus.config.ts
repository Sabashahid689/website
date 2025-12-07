import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Physical AI & Humanoid Robotics — Essentials',
  tagline: 'A comprehensive guide to building intelligent physical systems',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // ✅ GitHub Pages URL
  url: 'https://sabashahid689.github.io',

  // ✅ Repo name (tumhara website ka naam)
  baseUrl: '/website/',

  // ✅ GitHub username & repo
  organizationName: 'Sabashahid689',
  projectName: 'website',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'],
    localeConfigs: {
      en: { label: 'English', direction: 'ltr', htmlLang: 'en-US' },
      ur: { label: 'اردو (Urdu)', direction: 'rtl', htmlLang: 'ur-PK' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/Sabashahid689/website/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Physical AI Textbook',
      logo: {
        alt: 'Physical AI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'textbookSidebar',
          position: 'left',
          label: 'Chapters',
        },
        {
          href: 'https://github.com/Sabashahid689/website',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Textbook',
          items: [
            {
              label: 'Chapter 1',
              to: '/docs/chapter-1-introduction-to-physical-ai',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Sabashahid689/website',
            },
          ],
        },
      ],
      copyright:
        `© ${new Date().getFullYear()} Physical AI Textbook`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'typescript', 'yaml', 'bash'],
    },
  },
};

export default config;
