import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '포장빵의 개발 블로그',
  tagline: '매일 꾸준하게 성장하기',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://asthtls.github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/dokku-website/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'asthtls', // Usually your GitHub org/user name.
  projectName: 'dokku-website', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',



  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/asthtls/dokku-website/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/asthtls/dokku-website/edit/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '포장빵의 개발 블로그',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: '개발 일지',
        },
        {
          to: '/blog',
          label: '블로그',
          position: 'left'
        },
        {
          type: 'doc',
          docId : 'intro_resource', 
          label: '자료',
          position: 'left'
        },
        {
          to: '/AIProjects',
          label: 'AI 프로젝트',
          position: 'left'
        },
        {
          href: 'https://github.com/asthtls',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '개발 일지',
              to: '/docs/intro', // 링크는 적절하게 수정하세요.

            },
            {
              label: '블로그',
              to: '/blog', // 링크는 적절하게 수정하세요.
            },
            {
              label: '자료',
              to: '/docs/intro_resource', // 링크는 적절하게 수정하세요.
            },
            {
              label: 'AI 프로젝트',
              to: '/AIProjects', // 링크는 적절하게 수정하세요.
              position: 'left',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Old Tistory Blog',
              href: 'http://asthtls.tistory.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/asthtls',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 포장빵의 개발 블로그 `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
