import { Component, Host, h, Prop } from '@stencil/core';
import radioGroupStore from './hs-radio-group.store';

/**
 * The single `<hs-radio />` element must be used as a child node of a `<hs-radio-group />` element.
 * Please refer to the documentation of the latter for further details.
 * 
 * ### Example
 * ```html
 * <hs-radio-group name="my-input" selected-value="5">
 *   <hs-radio name="my-input" value="1">Option 1</hs-radio>
 *   <hs-radio name="my-input" value="2">Option 2</hs-radio>
 * </hs-radio-group>
 * ```
 */
@Component({
  tag: 'hs-radio',
  styleUrl: 'hs-radio.css',
  shadow: false,
  scoped: true,
})
export class HsRadio {

  /**
   * The particular value of this radio input item.
   */
  @Prop({ reflect: true })
  value;

  /**
   * The unique name of the radio button group. Must match the `name`
   * attribute of its parent `<hs-radio-group />`.
   */
  @Prop({ reflect: true })
  name;

  render() {
    return (
      <Host>
        <label>
          <hs-stack orientation="horizontal">
            <input
              type="radio"
              value={this.value}
              name={this.name}
              checked={this.value === radioGroupStore.radioGroups[this.name].selectedValue}
            />
            <slot />
          </hs-stack>
        </label>
      </Host>
    );
  }
}
