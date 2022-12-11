export default {
  title: 'Components/Tabs',
  // Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls#annotation
  argTypes: {
    selectedIndex: {
      options: [0, 1, 2, 3],
      control: { type: 'select' },
      description: 'Tab selected by default',
    },
  }
};


const Template = (args) => `
  <hs-tabs selected-index="${args.selectedIndex}">
    <hs-tab-list>
      <hs-tab>Tab 1</hs-tab>
      <hs-tab>Tab 2</hs-tab>
      <hs-tab>Tab 3</hs-tab>
      <hs-tab>Tab 4</hs-tab>
      <hs-tab>Tab 5</hs-tab>
    </hs-tab-list>
    <hs-tab-panels>
      <hs-tab-panel>
        <hs-header>Tab 1 content</hs-header>
      </hs-tab-panel>
      <hs-tab-panel>
        <hs-header>Tab 2 content</hs-header>
      </hs-tab-panel>
      <hs-tab-panel>
        <hs-header>Tab 3 content</hs-header>
      </hs-tab-panel>
      <hs-tab-panel>
        <hs-header>Tab 4 content</hs-header>
      </hs-tab-panel>
      <hs-tab-panel>
        <hs-header>Tab 5 content</hs-header>
      </hs-tab-panel>
    </hs-tab-panels>
  </hs-tabs>
`;

export const TabsStories = Template.bind({});
TabsStories.args = {
  selectedIndex: 0,
};
