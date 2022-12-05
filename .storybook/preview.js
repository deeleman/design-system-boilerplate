import { defineCustomElements } from '../loader';

defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: '^on.*|clicked' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
