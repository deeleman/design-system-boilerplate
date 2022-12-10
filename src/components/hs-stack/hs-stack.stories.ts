
export default {
  title: 'Components/Stack',
  // Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls#annotation
  argTypes: {
    orientation: { control: 'radio', options: ['vertical', 'horizontal'] },
    gap: { control: 'radio', options: ['large', 'small'] },
  }
};

const Template = (args) => `
  <style>
    .stack-item { display: inline-block; width: 150px; height: 50px; }
    .stack-item:nth-child(even) { background-color: brown; }
    .stack-item:nth-child(odd) { background-color: cornflowerblue; }
  </style>
  <hs-stack orientation="${args.orientation}" gap="${args.gap}">
    <span class="stack-item span-1"></span>
    <span class="stack-item span-2"></span>
    <span class="stack-item span-3"></span>
    <span class="stack-item span-4"></span>
    <span class="stack-item span-5"></span>
    <span class="stack-item span-6"></span>
    <span class="stack-item span-7"></span>
    <span class="stack-item span-8"></span>
    <span class="stack-item span-9"></span>
    <span class="stack-item span-10"></span>
  </hs-stack>
`;

export const StackStory = Template.bind({});
StackStory.args = {
  orientation: 'vertical',
  gap: 'small',
};
