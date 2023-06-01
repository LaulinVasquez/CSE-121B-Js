const numbers = ["one", "two", "three"];
const arrayList = numbers.map(function (number) {
  return `<li>${number}</li>`;
});

document.getElementById("myList").innerHTML = arrayList.join();

const grades = ["A", "B", "A"];
// gradeList is a function,  take a look in the function beacuse it works as a for loop
// taking as argument the array list to loop trough it converting the letter into numbers, so
// gradeList() are already numbers
const gradeToPoints = grades.map(function (gpa){
  points = 0
  if (gpa === "A")
  {
    points = 4;
  }
  if (gpa === "B")
  {
    points = 3;
  }
  return points;
});
document.getElementById("myList2").innerHTML = points;
//  reduce function is simple "total" is use to store what "item" will collect from gradeToPoints which is a function that contains
// a array list of the "points" value
const pointsTotal = gradeToPoints.reduce(function(total,item)
{
  return total + item;
});
const oneGPA = pointsTotal / gradeToPoints.length;
document.getElementById("test").innerHTML = oneGPA;
// function with arrow is pretty simple in this case as python you'r looping through the array list with a new variable "fruit" like i
// in python
const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];
const filterFruits = fruits.filter(fruit => fruit.length > 6);

document.getElementById("test2").innerHTML = filterFruits;

// Declare an array to get the lucky number
const ages = [12,34,21,54];
// this one is pretty much the argument that will be verify such as this: I will confirm if 21 is in the list with this variable
const luckyNumber = 21;
// if 21 is in the array list, please give the index of 21; in this case I will use indexOf() to get it
let luckeIndex = ages.indexOf(luckyNumber)

document.getElementById("test3").innerHTML = luckeIndex;
