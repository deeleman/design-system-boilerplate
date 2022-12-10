# hs-radio-group



<!-- Auto Generated Below -->


## Overview

The `<hs-radio-group />` component is a wrapper for `<hs-radio />` child components
and can be rendered on either horizontal or vertical layouts. The component needs to
be annotated with a `name` attribute that has to be replicated in all its children.

### Example
```html
<hs-radio-group name="my-input" selected-value="5">
  <hs-radio name="my-input" value="1">Option 1</hs-radio>
  <hs-radio name="my-input" value="2">Option 2</hs-radio>
  <hs-radio name="my-input" value="3">Option 3</hs-radio>
  <hs-radio name="my-input" value="4">Option 4</hs-radio>
  <hs-radio name="my-input" value="5">Option 5</hs-radio>
</hs-radio-group>
```

## Properties

| Property        | Attribute        | Description                                                                                                                       | Type                                                                       | Default      |
| --------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------ |
| `name`          | `name`           | Unique name to group these options under. Child radio inputs must feature the same `name` attribute value.                        | `any`                                                                      | `undefined`  |
| `orientation`   | `orientation`    | Based in the `Orientation` ambient type, will display the radio group stacked vertically or horizontally. See {@link Orientation} | `"horizontal" \| "horizontal-reverse" \| "vertical" \| "vertical-reverse"` | `'vertical'` |
| `selectedValue` | `selected-value` | Default value, which will preselect the matching radio element.                                                                   | `any`                                                                      | `null`       |


## Dependencies

### Depends on

- [hs-stack](../hs-stack)

### Graph
```mermaid
graph TD;
  hs-radio-group --> hs-stack
  style hs-radio-group fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
