import { Component, h } from '@stencil/core';

@Component({
  tag: 'hs-grid-column',
  styleUrl: 'hs-grid.css',
  shadow: false,
  scoped: false,
})
export class HsGridColumn {

  render() {
    return (
      <div class="hs-grid-column">
        <slot></slot>
      </div>
    );
  }

}