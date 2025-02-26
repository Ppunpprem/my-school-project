// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "English";
}

// Create 2 Person objects
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

// Wait for the HTML to fully load before executing
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("demo").innerHTML =
    "My father is " +
    myFather.nationality +
    ". My mother is " +
    myMother.nationality;
});
