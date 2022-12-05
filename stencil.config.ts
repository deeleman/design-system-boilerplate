import { Config } from '@stencil/core';

export const config: Config = {
  // Update the namespace value with your project name (kebab-case)
  namespace: 'design-system',
  // Change this to any other location where you want to store global CSS settings for all web components
  globalStyle: 'src/shared/css/global.css',
  // Probs you don't want to change these below.
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
