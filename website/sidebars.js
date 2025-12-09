/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Architecture',
      link: {
        type: 'generated-index',
        description: 'Explore the structural design and decision records of NovaEco.',
      },
      items: [
        'architecture/overview',
        'architecture/adr-001-core-services',
        'architecture/adr-002-auth',
        'architecture/adr-003-api-gateway',
        'architecture/adr-004-docs-site',
        'architecture/adr-005-internal-grpc',
        'architecture/adr-006-federated-ui',
        'architecture/adr-template',
      ],
    },
    {
      type: 'category',
      label: 'Requirements',
      link: {
        type: 'generated-index',
      },
      items: [
        'requirements/functional',
        'requirements/non-functional',
        'requirements/sustainability',
      ],
    },
    {
      type: 'category',
      label: 'Use Cases',
      link: {
        type: 'generated-index',
        description: 'Real-world scenarios across four levels of complexity.',
      },
      items: [
        'usecases/level-1-onboarding',
        'usecases/level-2-easy',
        'usecases/level-3-medium',
        'usecases/level-4-complex',
        'usecases/usecase-template',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      link: {
        type: 'generated-index',
      },
      items: [
        'api/overview',
        'api/auth',
        'api/gateway',
        'api/examples',
        'api/testing',
      ],
    },
    {
      type: 'category',
      label: 'Developers',
      link: {
        type: 'generated-index',
      },
      items: [
        'developers/quickstart',
        'developers/setup',
        'developers/cli',
        'developers/workflows',
        'developers/contribution',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      link: {
        type: 'generated-index',
      },
      items: [
        'guides/dev-guide',
        'guides/best-practices',
        'guides/testing-guide',
        [cite_start]'guides/testing-types', // Added: Was missing from previous list [cite: 342]
        [cite_start]'guides/v-model-guide', // Added: Was missing from previous list [cite: 384]
        'guides/sustainability-guide',
        'guides/style-guide',
        'guides/guide-template',
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-divider" />', // Optional visual separator
    },
    'faq',
    'glossary',
    'changelog',
  ],
};

module.exports = sidebars;