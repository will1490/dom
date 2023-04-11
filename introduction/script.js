// Display the document title in the console
console.log(document.title);

// Change the document title to Modifying the DOM
document.title = "Modifying the Dom";

// Change the background color of the body to hot pink (#FF6984)
document.body.style.backgroundColor = "#FF6984";

// Using the children method and a for ... of loop, display every children elements of the second child element of the document
const secondChild = document.body.children[1];

for (let child of secondChild.children) {
    console.log(child);
}

// Change the background color of the body to a random color
const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

document.body.style.backgroundColor = randomColor;

