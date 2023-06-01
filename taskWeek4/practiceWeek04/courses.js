// courses.js
// Create an object literal to represent a course. It should include the course name and course number.
const aCourse = {
    // What you have inside are objects
    code: "CSE121b",
    name: "Javascript Language",
    // This is an object made as an array to have more sections
    sections: [ 
        { 
          sectionNum: 1,
          roomNum: 'STC 353', 
          enrolled: 26, 
          days: 'TTh', 
          instructor: 'Bro Thompson'
        },
        { 
            sectionNum: 2, 
            roomNum: 'STC 347', 
            enrolled: 28, 
            days: 'TTh', 
            instructor: 'Sis Ambert'
        },
    ],
};
// Create a function to set the name and number of the course in the HTML, to get the values
function getCourseInfo(course){
    const courseName = document.querySelector("#courseName");
    const courseNumb = document.querySelector("#courseCode");
    
    courseName.textContent = course.name;
    courseNumb.textContent = course.code;
}
/* This function will output the sections into the table using the map method to loop in the object literal that contains
an array named sections*/
function displaySection(sections){
    const html = sections.map((section) => 
    `<tr>
     <td>${section.sectionNum}</td>
     <td>${section.roomNum}</td>
     <td>${section.enrolled}</td>
     <td>${section.days}</td>
     <td>${section.instructor}</td>
    </tr> `)
    // display all the html variable info into #sections, the join() method is use to remove comas and spaces in the array list
    document.getElementById("sections").innerHTML = html.join(" ");
}

getCourseInfo(aCourse);
displaySection(aCourse.sections);

`<li>${food[0]}</li>
<li>${food[1]}</li>
<li>${food[2]}</li>
<li>${food[3]}</li>`
