import { Component, Host, h, Prop } from '@stencil/core';
import radioGroupStore from './hs-radio-group.store';

/**
 * The `<hs-radio-group />` component is a wrapper for `<hs-radio />` child components
 * and can be rendered on either horizontal or vertical layouts. The component needs to
 * be annotated with a `name` attribute that has to be replicated in all its children.
 * 
 * ### Example
 * ```html
 * <hs-radio-group name="my-input" selected-value="5">
 *   <hs-radio name="my-input" value="1">Option 1</hs-radio>
 *   <hs-radio name="my-input" value="2">Option 2</hs-radio>
 *   <hs-radio name="my-input" value="3">Option 3</hs-radio>
 *   <hs-radio name="my-input" value="4">Option 4</hs-radio>
 *   <hs-radio name="my-input" value="5">Option 5</hs-radio>
 * </hs-radio-group>
 * ```
 */
@Component({
  tag: 'hs-radio-group',
  styleUrl: 'hs-radio-group.css',
  shadow: false,
  scoped: true,
})
export class HsRadioGroup {
  /**
   * Based in the `Orientation` ambient type, will display the radio group
   * stacked vertically or horizontally.
   * See {@link Orientation}
   */
  @Prop({ reflect: true })
  orientation: Orientation = 'vertical';

  /**
   * Default value, which will preselect the matching radio element.
   */
  @Prop({ reflect: true })
  selectedValue = null;

  /**
   * Unique name to group these options under. Child radio inputs must
   * feature the same `name` attribute value.
   */
  @Prop({ reflect: true })
  name;

  componentWillLoad() {
    radioGroupStore.radioGroups[this.name] = {
      selectedValue: this.selectedValue,
    }
  }

  disconnectedCallback() {
    delete radioGroupStore.radioGroups[this.name];
  }

  render() {
    return (
      <Host>
        <hs-stack orientation={this.orientation}>
          <slot></slot>
        </hs-stack>
      </Host>
    );
  }
}
