// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navTogle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navTogle.addEventListener("click", function () {
    //console.log(links.classList);
    //console.log(links.classList.contains('random')); 
    //console.log(links.classList.contains("links")); 
    // add and remove class with add remove methods
    /* if (links.classList.contains("show-links")) {
         links.classList.remove("show-links");
     } else {
         links.classList.add("show-links");
      }*/
    
    // add and remove class with toggle method
    links.classList.toggle("show-links");
    
});
