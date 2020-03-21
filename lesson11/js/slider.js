
  
var slideIndex = 0;
lateStart();

function lateStart() {
  setTimeout(showSlides, 1000);
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("eventDate");
  var slides2 = document.getElementsByClassName("eventInfo");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides2[i].style.display = "none";  
  }

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";
  slides2[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}