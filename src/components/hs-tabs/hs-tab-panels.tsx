import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hs-tab-panels',
  shadow: true,
})
export class HsTabPanels {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}
