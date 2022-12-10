import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';

@Component({
  tag: 'hs-grid',
  styleUrl: 'hs-grid.css',
  shadow: false,
  scoped: true,
})
export class HsGrid {

  @Prop({ reflect: true })
  columns = 12;

  render() {
    const columnWidth = 100 / this.columns;

    const gridStyle = css`
      > * {
        flex-basis: ${Math.floor(columnWidth)}%;
      }
    `;

    const gridBuffer = css`
      display: block;
      flex-grow: ${100 % this.columns + 1}; 
      flex-basis: ${(columnWidth) * (this.columns - (100 % this.columns))}%;
    `;

    return (
      <div class={`hs-grid ${gridStyle}`}>
        <slot></slot>
        <span class={gridBuffer}></span>
      </div>
    );
  }

}
