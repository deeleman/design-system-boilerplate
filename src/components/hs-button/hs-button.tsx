import { Component, h, Prop, Event } from '@stencil/core';

@Component({
  tag: 'hs-button',
  styleUrl: 'hs-button.css',
  shadow: false, // Disable Shadow DOM to benefit from global styles defined in Design Tokens
})
export class HsButton {

  @Prop()
  variant = "neutral";

  @Prop()
  size = "medium";

  @Event({})
  clicked;

  clickHandler(e) {
    this.clicked.emit(e);
  }

  render() {
    return (
      <button class={`${this.variant} ${this.size}`} onClick={(e) => this.clickHandler(e)}>
        <slot></slot>
      </button>
    );
  }

}
