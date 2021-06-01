let link = document.getElementById("nav");

//console.log(link);



link.addEventListener("mouseover", function( event ) {
 
    event.target.style.color = "#3B9cb9";

    setTimeout(function() {
      event.target.style.color = "";
    }, 600);
  }, false);

