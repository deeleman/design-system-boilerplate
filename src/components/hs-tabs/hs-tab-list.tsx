import { Component, h } from '@stencil/core';
import { css } from '@emotion/css';

@Component({
  tag: 'hs-tab-list',
  shadow: false,
})
export class HsTabList {
  render() {
    const tabListStyles = css`
      box-shadow: inset 0px -18px 0px -17px #CCC;
    `;

    return (
      <div class={tabListStyles}>
        <hs-stack orientation="horizontal" gap="small">
          <slot />
        </hs-stack>
      </div>
    )
  }
}
