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
   if (this.className.search("rotate180") == -1) {
      this.classList.add("rotate180");
   }
}
