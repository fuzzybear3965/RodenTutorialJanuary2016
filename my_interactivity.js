var pretty_texts = document.getElementsByClassName("pretty-text");

for (var i = 0; i < pretty_texts.length; i++) {
   var pretty_text = pretty_texts[i];
   pretty_text.style.color = "blue";
   if (i == 0) {
      pretty_text.addEventListener("click", turnMeRed);
   }
}

function turnMeRed() {
   this.style.color = "red";
}
