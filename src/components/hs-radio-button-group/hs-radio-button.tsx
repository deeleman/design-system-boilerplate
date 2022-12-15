import { Component, Host, h, Prop, State } from '@stencil/core';
import { radioButtonGroupStore } from "./hs-radio-button-group.store";

@Component({
  tag: 'hs-radio-button',
  styleUrl: 'hs-radio-button.css',
  shadow: true,
})
export class HsRadioButton {
  @State()
  isChecked;

  @Prop({ reflect: true })
  checked;

  @Prop({ reflect: true })
  value;

  clickHandler() {
    radioButtonGroupStore.state.selectedValue = this.value;
  }

  componentWillLoad() {
    this.isChecked = this.checked;

    radioButtonGroupStore.onChange('selectedValue', (newValue) => {
      this.isChecked = this.value === newValue;
    });
  }

  render() {
    return (
      <Host>
        <hs-stack orientation="horizontal" gap="none">
          <label class={this.isChecked && 'selected'}>
            <input type="radio"
              value={this.value}
              onClick={this.clickHandler.bind(this)}
              checked={this.isChecked}
            />
            <slot></slot>
          </label>
        </hs-stack>
      </Host>
    );
  }

}
