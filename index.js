document.addEventListener("DOMContentLoaded", function() {
    var corpo = document.getElementById("corpo");
    var square1 = document.getElementsByClassName("square1")[0];
    var square2 = document.getElementsByClassName("square2")[0];
  
    corpo.addEventListener("click", function() {
      square1.classList.toggle("square1--pos");
      square2.classList.toggle("square2--pos");
      square1.classList.toggle("square1");
      square2.classList.toggle("square2");
    }); 
  });