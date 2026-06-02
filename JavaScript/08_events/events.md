# JavaScript Events - Complete Study Notes

## Table of Contents

1. Introduction to Events
2. Event Flow
3. Event Handling Methods
4. Event Object
5. Common Event Types
6. Mouse Events
7. Keyboard Events
8. Form Events
9. Window Events
10. Clipboard Events
11. Drag and Drop Events
12. Touch Events
13. Event Propagation
14. Event Delegation
15. preventDefault()
16. stopPropagation()
17. Useful Event Properties
18. Interview Questions
19. Practice Examples

---

# 1. What is an Event?

An Event is an action or occurrence that happens in the browser and can be detected by JavaScript.

Examples:

- User clicks a button
- User types in an input field
- Page loads
- Mouse moves
- Form submits
- Key is pressed

JavaScript can listen for these events and execute code when they occur.

---

## Real Life Analogy

Imagine a doorbell.

- Event = Someone presses the bell
- Event Listener = Device waiting for the bell press
- Event Handler = Action performed when bell rings

```js
button.addEventListener("click", () => {
  console.log("Button clicked");
});
```

---

# 2. Event Handling Methods

## Inline Event Handling

```html
<button onclick="sayHello()">Click Me</button>
```

```js
function sayHello() {
  alert("Hello");
}
```

Not recommended.

---

## DOM Property Method

```js
const btn = document.querySelector("button");

btn.onclick = function () {
  console.log("Clicked");
};
```

---

## addEventListener() (Recommended)

```js
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  console.log("Clicked");
});
```

Advantages:

- Multiple listeners
- Better code organization
- Modern approach

---

# 3. Syntax of addEventListener()

```js
element.addEventListener(eventType, callbackFunction, useCapture);
```

Example:

```js
button.addEventListener("click", function () {
  console.log("Button clicked");
});
```

---

# 4. Event Object

Whenever an event occurs, JavaScript automatically creates an Event Object.

```js
button.addEventListener("click", function (event) {
  console.log(event);
});
```

OR

```js
button.addEventListener("click", (e) => {
  console.log(e);
});
```

`e` and `event` are commonly used names.

---

# 5. Important Event Properties

## type

```js
button.addEventListener("click", (e) => {
  console.log(e.type);
});
```

Output:

```txt
click
```

---

## target

Returns actual element that triggered event.

```js
button.addEventListener("click", (e) => {
  console.log(e.target);
});
```

---

## currentTarget

Returns element on which listener is attached.

```js
console.log(e.currentTarget);
```

---

## timeStamp

```js
console.log(e.timeStamp);
```

Shows time event occurred.

---

## clientX and clientY

Mouse coordinates.

```js
document.addEventListener("click", (e) => {
  console.log(e.clientX);
  console.log(e.clientY);
});
```

---

## screenX and screenY

Coordinates relative to screen.

```js
console.log(e.screenX);
console.log(e.screenY);
```

---

## altKey

```js
console.log(e.altKey);
```

Returns true if Alt key pressed.

---

## ctrlKey

```js
console.log(e.ctrlKey);
```

---

## shiftKey

```js
console.log(e.shiftKey);
```

---

# 6. Mouse Events

## click

```js
button.addEventListener("click", () => {
  console.log("Clicked");
});
```

---

## dblclick

```js
button.addEventListener("dblclick", () => {
  console.log("Double Clicked");
});
```

---

## mousedown

Mouse button pressed.

```js
button.addEventListener("mousedown", () => {
  console.log("Mouse Down");
});
```

---

## mouseup

Mouse button released.

```js
button.addEventListener("mouseup", () => {
  console.log("Mouse Up");
});
```

---

## mousemove

```js
document.addEventListener("mousemove", (e) => {
  console.log(e.clientX, e.clientY);
});
```

---

## mouseenter

```js
div.addEventListener("mouseenter", () => {
  console.log("Entered");
});
```

---

## mouseleave

```js
div.addEventListener("mouseleave", () => {
  console.log("Left");
});
```

---

## contextmenu

Right-click event.

```js
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
```

---

# 7. Keyboard Events

## keydown

Occurs when key is pressed.

```js
document.addEventListener("keydown", (e) => {
  console.log(e.key);
});
```

---

## keyup

Occurs when key released.

```js
document.addEventListener("keyup", (e) => {
  console.log(e.key);
});
```

---

## keypress (Deprecated)

Avoid using.

---

## Important Keyboard Properties

```js
e.key;
```

Example:

```txt
a
Enter
Escape
```

---

```js
e.code;
```

Example:

```txt
KeyA
Enter
ArrowUp
```

---

# 8. Form Events

## submit

```js
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

---

## input

Fires every time value changes.

```js
input.addEventListener("input", (e) => {
  console.log(e.target.value);
});
```

---

## change

Occurs when field loses focus.

```js
input.addEventListener("change", (e) => {
  console.log(e.target.value);
});
```

---

## focus

```js
input.addEventListener("focus", () => {
  console.log("Focused");
});
```

---

## blur

```js
input.addEventListener("blur", () => {
  console.log("Lost Focus");
});
```

---

# 9. Window Events

## load

```js
window.addEventListener("load", () => {
  console.log("Page Loaded");
});
```

---

## resize

```js
window.addEventListener("resize", () => {
  console.log(window.innerWidth);
});
```

---

## scroll

```js
window.addEventListener("scroll", () => {
  console.log("Scrolling");
});
```

---

# 10. Clipboard Events

## copy

```js
document.addEventListener("copy", () => {
  console.log("Copied");
});
```

---

## cut

```js
document.addEventListener("cut", () => {
  console.log("Cut");
});
```

---

## paste

```js
document.addEventListener("paste", () => {
  console.log("Pasted");
});
```

---

# 11. Drag and Drop Events

## dragstart

```js
element.addEventListener("dragstart", () => {
  console.log("Drag Started");
});
```

---

## drag

```js
element.addEventListener("drag", () => {
  console.log("Dragging");
});
```

---

## dragend

```js
element.addEventListener("dragend", () => {
  console.log("Drag End");
});
```

---

## drop

```js
dropZone.addEventListener("drop", () => {
  console.log("Dropped");
});
```

---

# 12. Touch Events

For mobile devices.

## touchstart

```js
element.addEventListener("touchstart", () => {
  console.log("Touch Started");
});
```

---

## touchmove

```js
element.addEventListener("touchmove", () => {
  console.log("Moving");
});
```

---

## touchend

```js
element.addEventListener("touchend", () => {
  console.log("Touch Ended");
});
```

---

# 13. Event Propagation

How events travel through DOM.

Two phases:

1. Capturing Phase
2. Bubbling Phase

---

# Event Bubbling

Default behavior.

```html
<div>
  <button>Click</button>
</div>
```

```js
div.addEventListener("click", () => {
  console.log("DIV");
});

button.addEventListener("click", () => {
  console.log("BUTTON");
});
```

Output:

```txt
BUTTON
DIV
```

Child → Parent

---

# Event Capturing

```js
div.addEventListener(
  "click",
  () => {
    console.log("DIV");
  },
  true,
);
```

Output:

```txt
DIV
BUTTON
```

Parent → Child

---

# 14. stopPropagation()

Stops bubbling.

```js
button.addEventListener("click", (e) => {
  e.stopPropagation();

  console.log("Button");
});
```

Now parent event won't run.

---

# 15. preventDefault()

Prevents default browser action.

Example:

```js
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

Prevents page reload.

---

# 16. Event Delegation

Attaching one listener to parent instead of many children.

HTML:

```html
<ul id="images">
  <li><img id="one" /></li>
  <li><img id="two" /></li>
</ul>
```

JavaScript:

```js
document.querySelector("#images").addEventListener("click", (e) => {
  console.log(e.target.id);
});
```

Benefits:

- Better performance
- Less memory usage
- Dynamic elements supported

---

# 17. Commonly Used Event Properties

| Property      | Description            |
| ------------- | ---------------------- |
| type          | Event name             |
| target        | Actual clicked element |
| currentTarget | Attached element       |
| clientX       | Mouse X                |
| clientY       | Mouse Y                |
| screenX       | Screen X               |
| screenY       | Screen Y               |
| key           | Key pressed            |
| code          | Physical key           |
| altKey        | Alt key pressed        |
| ctrlKey       | Ctrl key pressed       |
| shiftKey      | Shift key pressed      |
| timeStamp     | Event timestamp        |

---

# 18. Most Asked Interview Questions

## What is Event Bubbling?

Child to parent propagation.

---

## What is Event Capturing?

Parent to child propagation.

---

## Difference Between target and currentTarget?

target:

Actual clicked element.

currentTarget:

Element where listener attached.

---

## Difference Between preventDefault() and stopPropagation()?

preventDefault():

Stops browser default behavior.

stopPropagation():

Stops event propagation.

---

## Why use addEventListener()?

- Multiple handlers
- Cleaner code
- Better flexibility

---

## What is Event Delegation?

Handling child events through parent listener.

---

# 19. Real World Examples

## Button Click

```js
button.addEventListener("click", () => {
  alert("Submitted");
});
```

---

## Form Validation

```js
form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Form Submitted");
});
```

---

## Live Search

```js
search.addEventListener("input", (e) => {
  console.log(e.target.value);
});
```

---

## Keyboard Shortcuts

```js
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();

    console.log("Save");
  }
});
```

---

# Quick Revision

Events = Actions happening in browser.

Most Used Events:

- click
- submit
- input
- change
- keydown
- keyup
- mousemove
- load
- scroll

Most Important Methods:

```js
addEventListener();
preventDefault();
stopPropagation();
```

Most Important Concepts:

- Event Object
- Event Bubbling
- Event Capturing
- Event Delegation
- Event Propagation
