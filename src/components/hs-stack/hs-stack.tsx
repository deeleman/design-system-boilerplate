import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
import { SpacingLarge, SpacingSmall } from '../../design-tokens/js/variables.js';

/**
 * The `<hs-stack>` component is a layout component providing horizontal and vertical
 * flow capabilities for all its children components and elements.
 * 
 * ### Example
 * ```html
 * <hs-stack orientation="vertical" gap="small">
 *  <img src="test.png" />
 *  <button>Save</button>
 * </hs-stack>
 * ```
 */
@Component({
  tag: 'hs-stack',
  styleUrl: 'hs-stack.css',
  shadow: false,
  scoped: true,
})
export class HsStack {
  /**
   * The `orientation` property sets the direction for the flow,
   * either vertical or horizontal.
   */
  @Prop({ reflect: true })
  orientation: Orientation  = 'vertical';

  /**
   * The `gap` property sets the spacing in between elements, and has no effect
   * in the leading or trailing element.
   */
  @Prop({ reflect: true })
  gap: 'large' | 'small' | 'none' = 'small';

  stackStyle = css`
    gap: ${this.gap === 'large' ? SpacingLarge.bottom : this.gap === 'small' ? SpacingSmall.bottom : 0}px;
    flex-direction: ${this.orientation === 'horizontal' ? 'row' : 'column'};
  `;

  render() {
    return (
      <div class={this.stackStyle}>
        <slot></slot>
      </div>
    );
  }

}
