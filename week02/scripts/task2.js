/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name 
const UserName = "Laulin vasquez";
// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = UserName;
// Step 3: declare and instantiate a variable to hold the current year
var CurrentYear = "2023";
// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").innerHTML = CurrentYear;
// Step 5: declare and instantiate a variable to hold the name of your picture
const PictureTitle = "on the mission";
// Step 6: copy your image into the "images" folder: Done
// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("img").setAttribute("src", "images/iguana.JPG");


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
var FavoriteFoods = ["lasagna"," Rice and beans", " fried chicken", " popeyes"];
// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector("#food").innerHTML = FavoriteFoods;
// Step 3: declare and instantiate a variable to hold another favorite food
var AnotherFood = " french fries";
// Step 4: add the variable holding another favorite food to the favorite food array
FavoriteFoods.push(AnotherFood);
// Step 5: repeat Step 2
document.querySelector("#food").innerHTML = FavoriteFoods;
// Step 6: remove the first element in the favorite foods array
delete FavoriteFoods[0];
// Step 7: repeat Step 2
document.querySelector("#food").innerHTML = FavoriteFoods;
// Step 8: remove the last element in the favorite foods array
delete FavoriteFoods[3];
// Step 7: repeat Step 2
document.querySelector("#food").innerHTML = FavoriteFoods;

