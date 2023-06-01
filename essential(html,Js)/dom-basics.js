const newParagraph = document.createElement("p");
newParagraph.innerText = "Added klk with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement('img');
newImage.setAttribute("src", "https://placeimg.com/200/200/animals");
newImage.setAttribute("alt", "description of image");
document.body.appendChild(newImage);


const newSection = document.createElement("section");
newSection.innerText = "<h2>CSE 121b</h2>";
document.body.appendChild(newSection);

const secondParagraph = document.createElement("p");
secondParagraph.innerHTML = "welcome to Javascript Language";
document.body.appendChild(secondParagraph);