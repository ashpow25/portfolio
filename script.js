let link = document.getElementById("nav");

console.log(link);


// This handler will be executed every time the cursor
// is moved over a different list item
link.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.style.color = "#3B9cb9";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);

