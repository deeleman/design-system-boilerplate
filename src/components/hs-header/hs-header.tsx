import { Component, h, Prop, Element } from '@stencil/core';
import { css } from '@emotion/css';
import { ColorPrimary, ColorBody, FontHeading1 } from '../../design-tokens/js/variables.js';

/**
 * Use this array as a pivotal collection of Host attributes to remove.
 * Check its use in the componentWillLoad() lifecycle handler below.
 */
const ariaAttributes = [
  'aria-role'
];

/**
 * The component starts with the @Component decorator, part of the TypeScript built-in capabilities
 * and currently an stage 3 proposal in the TC39 committee. More info:
 * https://github.com/tc39/proposal-decorators.
 * 
 * Please check out the comment blocks on top the component and its props. Whatever content we place
 * right above the @Component decorator will become the actual description of teh component in
 * the generated documentation. Such blocks do support markdown syntax, so you can provide rich descriptions
 * right on the code. 
 * 
 * Same applies to @Prop decorators: Whatever text we place right on top of each Prop will eventually be included
 * in the properties output table displayed in the README docs generated upon building the project.
 */

/**
 * Heading component, with support for header elements spanning from `H1` to `H6`, and custom alignment.
 * Its convenience for pointing out document sections makes it one of the most consumed
 * components in our Design System.
 * ### Example:
 * ```html
 * <hs-heading level="1" text-align="center">Section name</hs-heading>
 * ```
 */
@Component({
  // The component decorator object payload is documented at https://stenciljs.com/docs/component
  tag: 'hs-header',
  styleUrl: 'hs-header.css',
  shadow: false,
  scoped: true,
})
export class HsHeader {
  /**
   * A reference to the host element. This is, the actual <hs-header /> tag
   * that wraps the HTML output of this component.
   */
  @Element()
  hostElement: HTMLElement;

  /**
   * Component public properties begin here.
   * These can be recognized by the @Prop decorator. The truthy 'reflect'
   * property of the decorator object payload ensures that such property
   * will be also available in HTML, and not just when consuming Stencil
   * components from other components. 
   */

  /**
   * The `level` property allows users to indicate what header hierarchy this element is.
   * It mus take a number from `1` to `6`.
   */
  @Prop({ reflect: true })
  level: number = 1; // This annotation is a TypeScript union type, defaulting to 1
  
  /**
   * Provides support for implementing horizontal alignment to the text contained in the header.
   */
  @Prop({ reflect: true })
  textAlign: 'left' | 'right' | 'center' = 'left'; // This annotation is a TypeScript union type with a default value set to 'left'

  /**
   * This is a class field. It is not visible as a property since it lacks
   * the @Prop decorator, but can consumed internally from other functions and
   * the JSX template by referring to it as this.headerAriaAttributes.
   */
  headerAriaAttributes = {};

  /**
   * Will trigger just once upon mounting the component on the HTML for the first time.
   */
  componentWillLoad() {
    /**
     * We validate here that the 'level' property, which will be used later to compose a 
     * HTML tag 'on the fly', will only take values from 1 to 6. TypeScript gives us
     * statical type checking on dev time but TypeScript annotations are wiped once the component
     * is traspiled. This conditional check ensures that the component is properly used
     * later on "in the wild".
     */
    if (this.level < 1 || this.level > 6) {
      throw new Error("HsHeader: the level property must be between 1 and 6");
    }

    /**
     * The following block iterates over the aria attributes of the host element
     * and "captures" those which match our 'ariaAttributes' array above. Then the
     * script retrieves the property value, removes the attribute from the host element
     * and extends the (initially empty) 'headerAriaAttributes' class field with this new key/value pair.
     */
    for (let index = 0; index < ariaAttributes.length; index++) {
      const attributeName = ariaAttributes[index];

      if (this.hostElement.hasAttribute(attributeName)) {
        const attributeValue = this.hostElement.getAttribute(attributeName);
        this.headerAriaAttributes[attributeName] = attributeValue;
        this.hostElement.removeAttribute(attributeName);
      }
    }
  }

  render() {
    // We create a JSX tag on the fly
    const Tag = `h${this.level}`;

    /**
     * This is a runtime-generated className object, built via the @emotion/css
     * library. As a JS object, it can embed values (via template strings) coming
     * from our set of Design Tokens traspiled into JS constants. This is a convenient
     * way to implement dynamic CSS based on component logic or external tokens.
     */
    const tagStyles = css`
      color: ${this.level === 1 ? ColorPrimary : ColorBody};
      font-size: ${this.level === 1 ? `${FontHeading1.fontSize}px` : undefined};
      text-align: ${this.textAlign};
    `;
 
    return (
      <Tag className={tagStyles} role="heading">
        <slot></slot>
      </Tag>
    );

    /**
     * Uncomment the code block below and replace with it the return statement above
     * to switch to the pure CSS-driven strategy approach for the component (rather than
     * the CSS-in-JS approach strategy depicted above).
     */
    // return (
    //   <Tag className={`align-${this.textAlign}`} role="heading">
    //     <slot></slot>
    //   </Tag>
    // );
  }
}
