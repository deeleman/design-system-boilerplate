import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';

@Component({
  tag: 'hs-stack',
  styleUrl: 'hs-stack.css',
  shadow: false,
  scoped: false,
})
export class HsStack {

  @Prop({ reflect: true })
  orientation: 'vertical' | 'horizontal' = 'vertical';

  @Prop({ reflect: true })
  gap: 'small' | 'large' = 'small';

  render() {

    const stackStyles = css`
      flex-direction: ${this.orientation === 'vertical' ? 'column' : 'row'};
      gap: ${this.gap === 'small' ? '10px' : '30px'};
    `;

    return (
      <div class={`hs-stack ${stackStyles}`}>
        <slot></slot>
      </div>
    );
  }

}
