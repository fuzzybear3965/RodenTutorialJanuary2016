var pretty_texts = document.getElementsByClassName("pretty-text");

for (var i = 0; i < pretty_texts.length; i++) {
   var pretty_text = pretty_texts[i];
   pretty_text.style.color = "blue";
   if (i == 0) {
      pretty_text.addEventListener("click", turnMeRed);
   }
   if (i == 1) {
      pretty_text.addEventListener("click", turnMeBlackSlowly);
   }
}

var cat_picture = document.getElementById("cat");
cat_picture.addEventListener("click", turnMeUpsideDown);

function turnMeRed() {
   this.style.color = "red";
}

function turnMeBlackSlowly() {
   this.animate([{ color: "blue"},{ color: "black" }] , {fill: "forwards", duration: 2000});
   this.removeEventListener("click", turnMeBlackSlowly)
}

function turnMeUpsideDown() {
   var element_style = window.getComputedStyle(this, null);
   var transform_matrix = element_style.getPropertyValue("transform");

   if (transform_matrix == "none") {
      this.style.transform = "rotate(90deg)";
   } else {
      values = transform_matrix.split('(')[1];
      values = values.split(')')[0]
      values = values.split(',');
      var degrees_rotated = Math.abs(values[1]) == 1 ? Math.asin(values[1])*180/Math.PI : Math.acos(values[0])*180/Math.PI ;
      // Update the degrees rotated
      degrees_rotated = (degrees_rotated + 90) % 360;
      this.style.transform = "rotate(" + degrees_rotated + "deg)";
   }
}
