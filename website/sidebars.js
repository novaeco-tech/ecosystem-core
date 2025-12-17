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
        'architecture/adr-003-hybrid-api-access',
        'architecture/adr-004-docs-site',
        'architecture/adr-005-grpc-protobuf',
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
        description: 'Real-world scenarios across four tiers of complexity.',
      },
      items: [
        'usecases/tier-1-onboarding-and-control',
        'usecases/tier-2-transactional-efficiency',
        'usecases/tier-3-value-chain-coordination-medium',
        'usecases/tier-4-systemic-transformation',
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
        'guides/testing-types',
        'guides/v-model-guide',
        'guides/sustainability-guide',
        'guides/style-guide',
        'guides/guide-template',
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-divider" />',
    },
    'faq',
    'glossary',
    'changelog',
  ],
};

module.exports = sidebars;