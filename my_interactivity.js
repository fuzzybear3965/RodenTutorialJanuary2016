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

function turnMeRed() {
   this.style.color = "red";
}

function turnMeBlackSlowly() {
   this.animate([{ color: "blue"},{ color: "black" }] , {fill: "forwards", duration: 2000});
}
