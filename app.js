                     
                     // chap 14-16


// Q1
// var futureStudentNames = [];

// Q2
// var futureStudentNames = new Array();

// Q3
// var stringsArray = ["apple", "banana", "orange"];

// Q4
// var numbersArray = [1, 2, 3, 4, 5];

// Q5
// var booleanArray = [true, false, true, true];

// Q6
// var mixedArray = ["apple", 2, true, "banana", 5];

// Q7
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h2>Educational Qualifications in Pakistan:</h2>")
for (var i = 0; i < qualifications.length; i++) {
        document.write("<ul><li>" + qualifications[i] + "</li></ul>");
    }

// Q8
var students = ["Michael","Jhon","Tony"]
var score = [320,230,480]
for( var a = 0 ; a < students.length ; a++){
    var percentage = (score[a]/500) * 100;
    document.write("<hr><h3>Score of " + students[a] + " is " + score[a] + ". Percentage: " + percentage + "%<br>")
}

// Q9


// Q10
// Q11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2,4);
document.write("<hr>Cities list: <br>" + cities + "<br>Selected Cities Array: <br>" + selectedCities + "<hr>")

// Q12
var myArray = ["This","is","my","cat"];
var myArr = "This is my Cat."
document.write("<h1>" + myArray + "<br> Sring: <br>" + myArr + "<br><hr>")

// Q13
var devices = ["Keyboard","mouse","printer","monitor"]
document.write("<h1>Devices <br>" + devices )
for(i = 0 ; i<devices.length ; i++){
    document.write( "<ul> <li> " + "Out: " + devices[i] + "</li> </ul>")
}

// Q14
// var devices = ["Keyboard","mouse","printer","monitor"]
// for(a = 3 ; a>devices.length ; a--){
//     document.write( "<hr><ul> <li> " + "Out: " + devices[a] + "</li> </ul>")
// }


// Q15
// var mobile = ["Apple","Samsung","Motorola", "Nokia","Sony","Haier"]
// for(b=0 ; b<mobile.length ; b++){
// document.write("<select><option value='' disabled selected>Select a manufacturer </option></select>")
// }
// Array of phone manufacturers

// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// document.write("<option value='' disabled selected>Select a manufacturer</option>");
// manufacturers.forEach(function(manufacturer) {
//     document.write("<option value='" + manufacturer + "'>" + manufacturer + "</option>");
// });
// document.write("</select>");

var mobile = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select><option value='' disabled selected>Select a manufacturer</option>   <option>" + mobile + "<br></option>");



// Chap 17

// Q 01
var myArray = [[]];

// Q 02
var arr = [[0,1,2,3],
           [1,0,1,2],
           [2,1,0,1]];

// Q 03
for( var i = 1 ; i<=10 ; i++ ){
    document.write(i + "<br>")
}

// Q 04
var table = +prompt("Enter any table number.")
var tableLength = +prompt("Enter table length.")
document.write( "<h1> Multiplication table of " + table + " Length " + tableLength 
+ " </h1>")
for (let i = 1; i <= tableLength; i++) {
    document.write(table + " * " + i + " = " + table*i + "<br>");
}

// Q 05
var fruits = ["apple","banana","mango","orange","strawberry"]
console.log("Items of the fruits array:");
console.log( fruits + "<br>");
for (var i = 0; i < fruits.length; i++) {
    console.log("element at " + i + " index is " + fruits[i])
}

// Q 06
// document.write("<h1> Counting: </h1>");
// for(var a = 1 ; a<=15 ; a++){
//     document.write(a + " " )
// }

// document.write("<h1> Reverse Counting: </h1>");
// for(var b = 10 ; b>=0 ; b--){
//     document.write( b + ", " )
// }

// document.write("<h1>Even: </h1>");
// for(var c = 0 ; c>=0 ; c= c+2){
//     document.write( b + ", " )
// }



// Q 07


// Q 08


// Q 09


// Q 10


// Q 11


// Q 12


// Q 13