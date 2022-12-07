/**
 * This is a Storybook component Section. Frist you will want to create
 * the default sidebar faceted menu entry below.
 */
export default {
  // this creates a ‘Components’ folder and a 'Button' subfolder in Storybook's side menu
  title: 'Components/Paragraph',
  argTypes: {
    text: {
      description: 'Transcluded text to be injected in the component slot',
      defaultValue:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget',
    },
    fontWeight: {
      options: ['light', 'medium', 'bold'],
      control: { type: 'radio' },
      description: 'Paragraph text weight',
      defaultValue: 'bold',
    },
    theme: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
      description: 'Select between light and dark themes',
      defaultValue: 'light',
    },
    variant: {
      options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
      description: 'Typeface variant selection',
      defaultValue: 'p',
    },
    textstyle: {
      options: ['normal', 'uppercase', 'lowercase', 'underline', 'italics'],
      control: { type: 'select' },
      description: 'Select Paragraph text style',
      defaultValue: 'normal',
    },
    margin: {
      options: [0, 5, 10, 15, 20, 25, 30, 40, 50],
      control: { type: 'select' },
      description: 'Minimum space between paragraph and the component above or below',
      defaultValue: 10,
    },
  },
};

/**
 * Now you can create a reusable template for your component that you
 * can later on customize with different values for its attribute properties and events
 */
const Template = args => `
  <mds-paragraph fontWeight="${args.fontWeight}" theme="${args.theme}" variant="${args.variant}" textstyle="${args.textstyle}" margin="${[args.margin]}">
    ${args.text}
  </mds-paragraph>
`;

/**
 * Now you can leverage the template above to generate multiple snapshots of your component
 * with distinct combinations of property values and event handlers.
 * Names must be PascalCased and Storybook will split names by capitals.
 * IMPORTANT: Remember to export each template binding!
 * Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls
 */
export const Paragraph = Template.bind({});
Paragraph.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget',
  fontWeight: 'medium',
  theme: 'light',
  variant: 'p',
  textstyle: 'italics',
  margin: 10,
};

export const DarkParagraph = Template.bind({});
DarkParagraph.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget',
  fontWeight: 'medium',
  theme: 'dark',
  variant: 'p',
  textstyle: 'italics',
  margin: 10,
};
