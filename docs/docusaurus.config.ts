import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: 'Llama Stack',
  tagline: 'The open-source framework for building generative AI applications',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://reluctantfuturist.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/llama-stack/',

  // GitHub pages deployment config.
  organizationName: 'reluctantfuturist',
  projectName: 'llama-stack',
  trailingSlash: false,

  onBrokenLinks: 'warn', // Change to 'throw' after migration is complete
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
          editUrl: 'https://github.com/meta-llama/llama-stack/tree/main/docs/',
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: false, // Disable blog for this project
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/llama-stack.png',
    navbar: {
      title: 'Llama Stack',
      logo: {
        alt: 'Llama Stack Logo',
        src: 'img/llama-stack-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API Reference',
        },
        {
          href: 'https://github.com/llamastack/llama-stack',
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
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'Concepts',
              to: '/docs/concepts',
            },
            {
              label: 'API Reference',
              to: '/docs/api',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/llama-stack',
            },
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/llamastack/llama-stack/discussions',
            },
            {
              label: 'Issues',
              href: 'https://github.com/llamastack/llama-stack/issues',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/llamastack/llama-stack',
            },
            {
              label: 'PyPI',
              href: 'https://pypi.org/project/llama-stack/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Meta Platforms, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        'ruby',
        'csharp',
        'php',
        'java',
        'powershell',
        'json',
        'bash',
        'python',
        'yaml',
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    // Language tabs for API documentation
    languageTabs: [
      {
        highlight: "python",
        language: "python",
        logoClass: "python",
      },
      {
        highlight: "bash",
        language: "curl",
        logoClass: "curl",
      },
      {
        highlight: "javascript",
        language: "nodejs",
        logoClass: "nodejs",
      },
      {
        highlight: "java",
        language: "java",
        logoClass: "java",
      },
    ],
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          llamastack: {
            specPath: "static/llama-stack-spec.yaml",
            outputDir: "docs/api",
            downloadUrl: "https://raw.githubusercontent.com/meta-llama/llama-stack/main/docs/static/llama-stack-spec.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],
};

export default config;
