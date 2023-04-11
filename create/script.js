// 1>Modify the script.js to create a new <section> with a random background-color for each learner in your group.
// 2>This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>
// 3>If the background is dark the text should be white, if the background is light the text should be black
// 4> Find a way so that everytime you load the page the order of the elements changes!

// 1>
const article = document.querySelector('article');
const learners = ["Abel Fortunati", "Anthony Denayer", "Bruno Lafont","Delphine Lecorney","Emilien Volkaert","Ethen Dias Marques","Julien Arnould","Louka Cadau","Nikko Di Bernardo","Willy Seghers","Alexandra Petit","Benjamin Mayeur","Ismaël Mesmoudi","Jodie Addis","Loïc Lion","Luciano Ciarrocchi","Marine Fassin","Noa Cayphas","Steve Grard","Sylvain Jacobs","Thomas M"];
    // function to generate a random color
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
   
// create a new section for each learner
for (let i = 0; i < learners.length; i++) {
     const section = document.createElement('section');
      
    // set the background color of the section
    const bgColor = randomColor();
        section.style.backgroundColor = bgColor;
      
    // determine if the text should be white or black based on the background color
    const textColor = isLight(bgColor) ? 'black' : 'white';
    section.style.color = textColor;
      
//2>  create a paragraph element with the learner's name
    const learnerName = document.createTextNode(learners[i]);
    const p = document.createElement('p');
    p.appendChild(learnerName);
      
    // append the paragraph element to the section element
    section.appendChild(p);
      
    // append the section element to the article element
    article.appendChild(section);
}
  // set the background color of the section
const bgColor = randomColor();
section.style.backgroundColor = bgColor;

//3>   determine if the text should be white or black based on the background color
const textColor = isLight(bgColor) ? 'black' : 'white';
section.style.color = textColor;
  
  // function to determine if a color is light or dark
function isLight(color) {
    const [r, g, b] = color.match(/\d+/g);
    const brightness = ((parseInt(r) * 299) + (parseInt(g) * 587) + (parseInt(b) * 114)) / 1000;
    return brightness > 128;
  }

// 4> Find a way so that everytime you load the page the order of the elements changes!
  // shuffle the learners array randomly
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffleArray(learners);




