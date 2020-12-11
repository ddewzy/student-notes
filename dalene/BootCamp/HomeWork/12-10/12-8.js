//Create a higher order function called setStyle(property) that will return a function that will set the style property of any DOM Element
//Example:
// const setBackground = setStyle('background');
// setBackround(document.getElementById("root"), "blue");
// result: the document with id of root will have it's background set to blue.
//Now, using setStyle() and the module design pattern from yesterday, create a module function called decorator(element) that will allow you to set various style elements on the element. Implement (at least) the following properties (backgroundColor, fontSize, padding, border).
//Implement these properties (backgroundColor, fontSize, padding, border) as functions that will not only set the corresponding element but also return the decorator, to allow for chaining of function calls.
// Example:
// const rootDecorator = decorator(document.getElementById("root"));
// rootDecorator.backgroundColor("blue").fontSize("5 rem").padding("10px").border("2px solid black");
// result: the element given by id "root" will have a background-color of blue set, with font-size of "5 rem", and so on.
//expecting a css property string = propertyName
function setStyle(propertyName) {
  return function (element, value) {
    element.style[propertyName] = value;
  };
}

function decorator(element) {
  let setBackgroundColor = setStyle("backgroundColor");
  let setFontSize = setStyle("fontSize");
  let setPadding = setStyle("padding");
  let setBorder = setStyle("border");
  return {
    backgroundColor: function (color) {
      setBackgroundColor(element, color);
      return decorator(element);
    },
    fontSize: function (fontValue) {
      setFontSize(element, fontValue);
      return decorator(element);
    },
    padding: function (paddingValue) {
      setPadding(element, paddingValue);
      return decorator(element);
    },
    border: function (borderValue) {
      setBorder(element, borderValue);
      return decorator(element);
    },
  };
}

const rootDecorator = decorator(document.getElementById("body"));
rootDecorator
  .backgroundColor("purple")
  .fontSize("20px")
  .padding("10px")
  .border("5px solid blue");
