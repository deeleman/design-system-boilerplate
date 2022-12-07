import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'mds-paragraph',
  styleUrl: 'mds-paragraph.css',
  scoped: true,
})
export class MdsParagraph {
  @Prop()
  theme: string = 'light';

  @Prop()
  fontWeight: string = 'medium';

  @Prop()
  variant: string = 'p';

  @Prop()
  textstyle: string = 'italics';

  @Prop()
  margin: number = 10;

  /**
   * This getter will apply all the necessary classes to the component
   */
  private get applyComponentClasses(): string {
    let classes = '';

    classes += this.theme != undefined ? 'theme-' + this.theme : ' light';
    classes += this.fontWeight != undefined ? ' text-' + this.fontWeight : ' medium';
    classes += this.variant != undefined ? ' text-variant-' + this.variant : ' p';
    classes += this.textstyle != undefined ? ' text-style-' + this.textstyle : ' normal';
    classes += this.margin != undefined ? ' margin-' + this.margin : 10;

    return classes;
  }

  render() {
    return (
      <Host>
        <p class={this.applyComponentClasses}>
          <slot></slot>
        </p>
      </Host>
    );
  }
}
