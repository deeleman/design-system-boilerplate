import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import { radioButtonGroupStore } from "./hs-radio-button-group.store";

@Component({
  tag: 'hs-radio-button-group',
  styleUrl: 'hs-radio-button-group.css',
  shadow: false,
  scoped: true,
})
export class HsRadioButtonGroup {

  @Prop({ reflect: true })
  name;

  @Event({ eventName: 'valueChange' })
  valueChange: EventEmitter;

  componentWillLoad() {
    radioButtonGroupStore.onChange('selectedValue', (newValue) => {
      this.valueChange.emit(newValue);
    })
  }

  render() {
    return (
      <Host>
        <hs-stack orientation="horizontal" gap="none">
          <slot></slot>
        </hs-stack>
      </Host>
    );
  }

}
