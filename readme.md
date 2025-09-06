

<!-- question answer -->
1. getElementById is used whenever you want to select an element using its id. It always returns one element because an id must never be repeated in a page.

getElementsByClassName is used to select elements using their class name. It returns a collection of elements (not one) because different elements might have the same class.

querySelector is more general. It enables you to select the first element that matches a CSS selector. You can use it to search by id (#id) or class (.class) or more complex selectors.

querySelectorAll is identical to querySelector, but it returns all matching elements in a list instead of just the first element.

2. To create a new element in JavaScript, we use document.createElement(). After creating it, we can add text or HTML to it using innerText or innerHTML. Finally, we place it inside the page using methods like appendChild(), append(), or prepend().

3. Event bubbling means that when something happens on a child element, the event does not stop there. Instead, it moves up (or “bubbles up”) to its parent, then to the parent’s parent, and so on, until it reaches the top of the page.

For example, if you click a button inside a div, first the button’s event will run, then the div’s event will also run if it has one, and finally the document’s event may also run.

4. Event delegation is a technique where you do not put event listeners on many small child elements. Instead, you put one event listener on their parent, and then check which child was clicked using event.target.

This is useful because it saves memory (you don’t need many listeners) and it also works for elements that are added to the page later. For example, if you add new buttons to a list, the parent’s single event listener can still handle clicks on them.

5. preventDefault() is used when you want to stop the browser’s default behavior. For example, when you click a link, the browser normally opens a new page. If you use preventDefault(), the link will not open.

stopPropagation() is used when you want to stop the event from bubbling up to parent elements. For example, if you click a button inside a div, normally the event goes to the button first and then the div. If you use stopPropagation(), it will stop at the button and the div’s event will not run.
