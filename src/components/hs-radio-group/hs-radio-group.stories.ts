export default {
  title: 'Components/RadioGroup',
  // Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls#annotation
  argTypes: {
    // This will create an `args.variant` binding for your component 
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
      description: 'The radio group orientation',
    },
    selectedValue: {
      control: {
        type: 'number',
        min: 1,
        max: 5,
      },
      description: 'The preselected value item',
    },
  }
};

const Template = (args) => `
  <hs-header level="4">
    What is your favorite band of the 70's?
  </hs-header>
  <hs-radio-group name="band" selected-value="${args.selectedValue}" orientation="${args.orientation}">
    <hs-radio name="band" value="1">Rolling Stones</hs-radio>
    <hs-radio name="band" value="2">Beatles</hs-radio>
    <hs-radio name="band" value="3">AC/DC</hs-radio>
    <hs-radio name="band" value="4">Deep Purple</hs-radio>
    <hs-radio name="band" value="5">Black Sabbath</hs-radio>
  </hs-radio-group>
`;

export const RadioGroupStory = Template.bind({});
RadioGroupStory.args = {
  orientation: 'vertical',
  selectedValue: '3',
};