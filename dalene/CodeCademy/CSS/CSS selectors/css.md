BOX MODEL:

- The box model comprises a set of properties used to create space around and between HTML elements.
- The height and width of a content area can be set in pixels or percentage.
- Borders surround the content area and padding of an element. The color, style, and thickness of a border can be set with CSS properties.
- Padding is the space between the content area and the border. It can be set in pixels or percent.
- Margin is the amount of spacing outside of an element’s border.
- Horizontal margins add, so the total space between the borders of adjacent elements is equal to the sum of the right margin of one element and the left margin of the adjacent element.
- Vertical margins collapse, so the space between vertically adjacent elements is equal to the larger margin.
- margin: 0 auto horizontally centers an element inside of its parent content area, if it has a width.
- The overflow property can be set to display, hide, or scroll, and dictates how HTML will render content that overflows its parent’s content area.
- The visibility property can hide or show elements.

CHANGING THE BOX MODEL:

- In the default box model, box dimensions are affected by border thickness and padding.
- The box-sizing property controls the box model used by the browser.
- The default value of the box-sizing property is content-box.
- The value for the new box model is border-box.
- The border-box model is not affected by border thickness or padding.

DISPLAY & POSITIONING:

- The position property allows you to specify the position of an element in three different ways.
- When set to relative, an element’s position is relative to its default position on the page.
- When set to absolute, an element’s position is relative to its closest positioned parent element. It can be pinned to any part of the web page, but the element will still move with the rest of the document when the page is scrolled.
- When set to fixed, an element’s position can be pinned to any part of the web page. The element will remain in view no matter what.
- The z-index of an element specifies how far back or how far forward an element appears on the page when it overlaps other elements.
- The display property allows you control how an element flows vertically and horizontally a document.
  inline elements take up as little space as possible, and they cannot have manually-adjusted width or height.
- block elements take up the width of their container and can have manually-adjusted heights.
- inline-block elements can have set width and height, but they can also appear next to each other and do not take up their entire container width.
- The float property can move elements as far left or as far right as possible on a web page.
- You can clear an element’s left or right side (or both) using the clear property.
