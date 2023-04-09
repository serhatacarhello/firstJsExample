
//Add greeting
const today = new Date();
const hourNow = today.getHours();

let greeting;

if (hourNow > 18) {
  greeting = 'Good evening!';
} else if (hourNow > 12) {
  greeting = 'Good afternoon!';
} else if (hourNow > 0) {
  greeting = 'Good morning!';
} else {
  greeting = 'Welcome!';
}

document.querySelector('h2').textContent = greeting;

// adding items to start and end of list
var list = document.getElementsByTagName('ul')[0];// Get the <ul> element

//add new item to end of list
let newItemLast = document.createElement('li'); // Create element
let newTextLast = document.createTextNode('cream'); // Create text node
newItemLast.appendChild(newTextLast); // Add text node to element
list.appendChild(newItemLast); // Add element end of list parent.appentChild(newItem);

// add new item to start of list 
let newItemFirst = document.createElement('li'); // Create element
let newTextFirst = document.createTextNode('Spring Water'); // Create text Node
newItemFirst.appendChild(newTextFirst); // Add text node to element
list.insertBefore(newItemFirst, list.firstChild); // Add element to list parent.insetBefore(newItem, target);

var listItems = document.querySelectorAll('li'); // All <li> elements
// Add a class of cool to all list items
let i; // counter variable
for (i = 0; i < listItems.length; i++) { // Loop through elements
    listItems[i].className = 'cool'; // Change class to cool
}

// Add number of items in the list to the heading

let heading = document.querySelector('#shoppingList'); // Heading of list
let headingText = heading.firstChild.nodeValue; // Heading text
let totalItems = listItems.length; // No. of <li> elements
let newHeading = headingText + '<span>' + totalItems + '</span>'; // Content
heading.innerHTML = newHeading;
