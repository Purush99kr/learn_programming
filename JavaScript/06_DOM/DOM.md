# JavaScript DOM (Document Object Model) - Complete Study Notes

# Table of Contents

1. What is DOM?
2. Why DOM is Useful?
3. Real-Life Analogy
4. How DOM Works
5. DOM Tree Structure
6. DOM Selectors
7. DOM Properties
8. DOM Methods
9. Creating Elements
10. Modifying Elements
11. Traversing DOM
12. Events and DOM
13. Advanced DOM Concepts
14. DOM Performance
15. Interview Questions
16. Real-World Examples
17. Learning Roadmap

---

# 1. What is DOM?

DOM stands for:

```txt
Document Object Model
```

The DOM is a programming interface provided by the browser that represents an HTML document as a tree of objects.

JavaScript uses the DOM to:

- Access HTML elements
- Modify HTML content
- Modify CSS styles
- Add or remove elements
- Handle user interactions

---

## HTML

```html
<body>
  <h1>Hello</h1>
</body>
```

Browser converts it into:

```txt
Document
   |
  HTML
   |
  BODY
   |
  H1
```

This tree structure is called the DOM Tree.

---

# 2. Why DOM is Useful?

Without DOM:

```txt
HTML = Static Website
```

With DOM:

```txt
HTML + JavaScript = Interactive Website
```

Examples:

- Calculator
- To-Do App
- Form Validation
- Image Gallery
- E-commerce Website
- Social Media App

---

# 3. Real-Life Analogy

Imagine:

```txt
House = Website
Rooms = HTML Elements
DOM = Blueprint of House
JavaScript = Person modifying house
```

Example:

```js
document.querySelector("h1");
```

Means:

```txt
Go to house
Find room named h1
Make changes
```

---

# 4. How DOM Works

Step 1:

Browser loads HTML.

Step 2:

Browser parses HTML.

Step 3:

Browser creates DOM Tree.

Step 4:

JavaScript interacts with DOM Tree.

---

# Example

HTML:

```html
<h1 id="title">Hello</h1>
```

JavaScript:

```js
document.getElementById("title").textContent = "Welcome";
```

Result:

```html
<h1 id="title">Welcome</h1>
```

---

# 5. DOM Tree Structure

Example:

```html
<html>
  <body>
    <div>
      <h1>Hello</h1>
      <p>Paragraph</p>
    </div>
  </body>
</html>
```

DOM Tree:

```txt
Document
|
HTML
|
BODY
|
DIV
|----- H1
|----- P
```

---

# Important Terms

## Parent Node

```html
<div>
  <h1>Hello</h1>
</div>
```

DIV = Parent

---

## Child Node

```html
<h1>Hello</h1>
```

H1 = Child

---

## Sibling

```html
<h1>Hello</h1>
<p>Text</p>
```

H1 and P are siblings.

---

# 6. DOM Selectors

Selectors are used to access elements.

---

## getElementById()

```js
document.getElementById("title");
```

---

## getElementsByClassName()

```js
document.getElementsByClassName("box");
```

Returns HTMLCollection.

---

## getElementsByTagName()

```js
document.getElementsByTagName("p");
```

---

## querySelector()

Returns first match.

```js
document.querySelector(".box");
```

---

## querySelectorAll()

Returns NodeList.

```js
document.querySelectorAll(".box");
```

---

# 7. Important DOM Properties

---

## innerHTML

Returns HTML content.

```js
element.innerHTML;
```

Example:

```js
div.innerHTML = "<h1>Hello</h1>";
```

---

## innerText

Returns visible text.

```js
element.innerText;
```

---

## textContent

Returns all text content.

```js
element.textContent;
```

---

## id

```js
element.id;
```

---

## className

```js
element.className;
```

---

## classList

```js
element.classList;
```

Methods:

```js
add();
remove();
toggle();
contains();
```

Example:

```js
element.classList.add("active");
```

---

## style

```js
element.style.color = "red";
```

---

## value

```js
input.value;
```

---

## checked

```js
checkbox.checked;
```

---

## src

```js
image.src;
```

---

## href

```js
link.href;
```

---

# 8. Important DOM Methods

---

## createElement()

```js
document.createElement("div");
```

---

## createTextNode()

```js
document.createTextNode("Hello");
```

---

## appendChild()

```js
parent.appendChild(child);
```

---

## append()

```js
parent.append(child);
```

---

## prepend()

```js
parent.prepend(child);
```

---

## remove()

```js
element.remove();
```

---

## replaceWith()

```js
oldElement.replaceWith(newElement);
```

---

## cloneNode()

```js
element.cloneNode(true);
```

---

## setAttribute()

```js
element.setAttribute("title", "tooltip");
```

---

## getAttribute()

```js
element.getAttribute("title");
```

---

## removeAttribute()

```js
element.removeAttribute("title");
```

---

# 9. Creating Elements Dynamically

```js
const div = document.createElement("div");

div.innerText = "Hello DOM";

document.body.appendChild(div);
```

---

# 10. Modifying Elements

---

## Change Text

```js
heading.innerText = "New Heading";
```

---

## Change HTML

```js
heading.innerHTML = "<span>Hello</span>";
```

---

## Change CSS

```js
heading.style.color = "red";
```

---

## Change Class

```js
heading.className = "active";
```

---

# 11. DOM Traversal

Moving through DOM tree.

---

## parentElement

```js
child.parentElement;
```

---

## children

```js
parent.children;
```

---

## firstElementChild

```js
parent.firstElementChild;
```

---

## lastElementChild

```js
parent.lastElementChild;
```

---

## nextElementSibling

```js
element.nextElementSibling;
```

---

## previousElementSibling

```js
element.previousElementSibling;
```

---

# Example

```html
<ul>
  <li>One</li>
  <li>Two</li>
</ul>
```

```js
const ul = document.querySelector("ul");

console.log(ul.firstElementChild);
```

Output:

```html
<li>One</li>
```

---

# 12. Events and DOM

Events allow interaction.

---

## Click Event

```js
button.addEventListener("click", () => {
  console.log("Clicked");
});
```

---

## Input Event

```js
input.addEventListener("input", (e) => {
  console.log(e.target.value);
});
```

---

## Submit Event

```js
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

---

# 13. Advanced DOM Concepts

---

## Event Bubbling

```txt
Child → Parent
```

---

## Event Capturing

```txt
Parent → Child
```

---

## Event Delegation

Attach one event listener to parent.

```js
document.querySelector("ul").addEventListener("click", (e) => {
  console.log(e.target);
});
```

Benefits:

- Better performance
- Less memory usage

---

# 14. DOM Performance

Bad:

```js
for (let i = 0; i < 1000; i++) {
  document.body.appendChild(newDiv);
}
```

Causes multiple reflows.

---

Good:

Use:

```js
DocumentFragment;
```

Example:

```js
const fragment = document.createDocumentFragment();
```

---

# 15. Most Asked Interview Questions

---

## What is DOM?

Programming interface representing HTML as objects.

---

## Difference Between HTML and DOM?

HTML:

```txt
Static Document
```

DOM:

```txt
Live Object Representation
```

---

## Difference Between innerHTML and innerText?

innerHTML:

Returns HTML.

innerText:

Returns visible text.

---

## Difference Between NodeList and HTMLCollection?

NodeList:

```txt
querySelectorAll()
```

Supports forEach.

HTMLCollection:

```txt
getElementsByClassName()
```

Does not support forEach directly.

---

## Difference Between append() and appendChild()

append:

```txt
Multiple items allowed
Text allowed
```

appendChild:

```txt
Single node only
```

---

# 16. Real-World Examples

---

## Theme Switcher

```js
document.body.style.background = "black";
```

---

## BMI Calculator

```js
result.innerHTML = `BMI = ${bmi}`;
```

---

## Add Dynamic Card

```js
const card = document.createElement("div");
```

---

## Remove Image

```js
image.remove();
```

---

## To-Do App

```js
ul.appendChild(li);
```

---

# 17. DOM Learning Roadmap

## Beginner

- DOM Introduction
- Selectors
- Properties
- Styling
- Events

---

## Intermediate

- Traversal
- Creating Elements
- Removing Elements
- Event Bubbling
- Event Delegation

---

## Advanced

- DocumentFragment
- MutationObserver
- Shadow DOM
- Virtual DOM
- Browser Rendering Process

---

# Quick Revision Sheet

## Selectors

```js
getElementById();
querySelector();
querySelectorAll();
```

---

## Content

```js
innerHTML;
innerText;
textContent;
```

---

## Styling

```js
style;
className;
classList;
```

---

## Attributes

```js
setAttribute();
getAttribute();
removeAttribute();
```

---

## DOM Manipulation

```js
createElement();
appendChild();
append();
prepend();
remove();
replaceWith();
```

---

## Traversal

```js
parentElement;
children;
nextElementSibling;
previousElementSibling;
```

---

## Events

```js
click;
input;
submit;
change;
keydown;
keyup;
```

---

## Advanced

```js
Event Bubbling
Event Capturing
Event Delegation
DocumentFragment
MutationObserver
Shadow DOM
```

---

# Final Definition

DOM is a browser-provided object model that converts HTML into a tree of JavaScript objects, allowing JavaScript to dynamically read, modify, create, delete, and interact with webpage content and user actions.
