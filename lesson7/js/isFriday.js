var today = new Date();

if (today.getDay() == 5 ) {
  document.querySelector("aside").style.display = "block";
} else {
  document.querySelector("aside").style.display = "none";
}