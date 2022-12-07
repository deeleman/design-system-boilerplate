# hs-header



<!-- Auto Generated Below -->


## Overview

Heading component, with support for header elements spanning from `H1` to `H6`, and custom alignment.
Its convenience for pointing out document sections makes it one of the most consumed
components in our Design System.
### Example:
```html
<hs-heading level="1" text-align="center">Section name</hs-heading>
```

## Properties

| Property    | Attribute    | Description                                                                                                                | Type                            | Default  |
| ----------- | ------------ | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | -------- |
| `level`     | `level`      | The `level` property allows users to indicate what header hierarchy this element is. It mus take a number from `1` to `6`. | `number`                        | `1`      |
| `textAlign` | `text-align` | Provides support for implementing horizontal alignment to the text contained in the header.                                | `"center" \| "left" \| "right"` | `'left'` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
