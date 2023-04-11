// Add a title attribute to every element that has the important class, stating This is an important item.
// Tip: adding a title attribute to an element is different from changing the title of a document.
const importantItems = document.querySelectorAll('.important');

importantItems.forEach(item => {
    item.setAttribute('title', 'This is an important item');
});


// Select all the img tags and loop through them. If they have no important class, turn their display property to none
const images = document.querySelectorAll('img');

images.forEach(img => {
    if (!img.classList.contains('important')) {
        img.style.display = "none";
    }
});

// Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well
const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(p => {
    console.log(p.textContent);

    if (p.classList.length > 0) {
        console.log(`Class name: ${p.className}`);
    }
});

// Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.
const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g},${b})`;
};

paragraphs.forEach(p => {
    If (p.classList.length === 0)
     {p.style.color = randomColor()
    }
}); 

