function media_query(x) {
  if (x.matches) { // If media query matches
    parent2.insertBefore(h_player, parent1);

  } else {
    parent1.insertBefore(h_player, null);
  }
}

var parent1 = document.getElementById("p1");
var parent2 = document.getElementById("p2");
var h_player = document.getElementById("hero_player");
var x = window.matchMedia("(max-width: 600px)")
media_query(x) // Call listener function at run time
x.addListener(media_query) // Attach listener function on state changes