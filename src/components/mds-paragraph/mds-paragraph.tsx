import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'mds-paragraph',
  styleUrl: 'mds-paragraph.css',
  shadow: true,
})
export class MdsParagraph {

  @Prop()
  theme = "light";

  @Prop()
  fontWeight = "medium";

  @Prop()
  variant = "h3";

  @Prop()
  textstyle = "italics";

  @Prop()
  margin = 20;

  render() {
    return (
      <Host>
        <p class={`theme-${this.theme} text-style-${this.textstyle}`}>
          <slot></slot>
        </p>
      </Host>
    );
  }

}
