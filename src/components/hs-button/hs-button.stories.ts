/**
 * This is a Storybook component Section. Frist you will want to create 
 * the default sidebar faceted menu entry below.
 */
export default {
  // this creates a ‘Components’ folder and a 'Button' subfolder in Storybook's side menu
  title: 'Components/Button',
  argTypes: {
    variant: {
      options: ['neutral', 'error'],
      control: { type: 'radio' },
    },
    size: {
      options: ['medium', 'small', 'large'],
      control: { type: 'radio' },
    },
  }
};

/**
 * Now you can create a reusable template for your component that you 
 * can later on customize with different values for its attribute properties and events
 */
const Template = (args) => `
  <hs-button variant="${args.variant}" size="${args.size}">
    ${args.text}
  </hs-button>
`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers. 
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding!
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const Button = Template.bind({});
Button.args = {
  text: 'Button',
  variant: 'neutral',
  size: 'medium',
};

