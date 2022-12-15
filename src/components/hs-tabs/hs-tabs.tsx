import { Component, Host, h, Listen, Element, Prop } from '@stencil/core';

/**
 * The `<hs-tabs />` component provides a convenient wrapper for tabbed navigation,
 * displaying a top nav with tab links that will toggle on or off each corresponding
 * tabbed view matching their index. Eg: clicking on the first tab will display the first
 * panel, and so on. The component supports pre-selecting a tab of your choice. If the index
 * does not match the elements allocated, the pre-selected tab will default to the first one.
 * 
 * ### Example
 * 
 * ```html
 *  <hs-tabs>
 *    <hs-tab-list>
 *      <hs-tab>Tab 1</hs-tab>
 *      <hs-tab>Tab 2</hs-tab>
 *    </hs-tab-list>
 *    <hs-tab-panels>
 *      <hs-tab-panel>
 *        <hs-header>Tab 1 content</hs-header>
 *      </hs-tab-panel>
 *      <hs-tab-panel>
 *        <hs-header>Tab 2 content</hs-header>
 *      </hs-tab-panel>
 *    </hs-tab-panels>
 *  </hs-tabs>
 * ````
 *
 * Annotating the top element as `<hs-tabs selected-index="1">` would have displayed the second tab/panel by default.
 */
@Component({
  tag: 'hs-tabs',
  shadow: false,
})
export class HsTabs {
  tabs = [];
  tabPanels = [];

  /**
   * Configures the tab/panels to select by default upon loading.
   */
  @Prop({ reflect: true })
  selectedIndex = 0;

  @Element()
  el: HTMLElement;

  @Listen('tabClick')
  tabClickHandler(e) {
    this.tabPanels.forEach(async (_, key) => {
      this.tabs[key].toggleSelected(key === e.detail);
      this.tabPanels[key].toggleSelected(key === e.detail);
    });
  }

  componentWillLoad() {
    this.tabs = Array.from(this.el.querySelectorAll('hs-tab'));
    this.tabPanels = Array.from(this.el.querySelectorAll('hs-tab-panel'));

    const selectedTabIndex = this.selectedIndex < this.tabPanels.length ? this.selectedIndex : 0;
    
    this.tabs[selectedTabIndex].toggleSelected(true);
    this.tabPanels[selectedTabIndex].toggleSelected(true);
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
