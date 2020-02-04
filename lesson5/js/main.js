const hambutton = document.querySelector(".hamburger");

var lastModification = new Date();

// initialize custom date arrays
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/* Assemble date output string*/
let lastModifiedDate = days[lastModification.getDay()] + ", " + lastModification.getDate() + " " + months[lastModification.getMonth()] + " " + lastModification.getFullYear();


document.getElementById("lastMod").innerHTML=lastModifiedDate;

hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
document.querySelector(".navigation").classList.toggle("responsive");
}
