var pretty_texts = document.getElementsByClassName("pretty-text");
console.log(pretty_texts[0]);

for (var i = 0; i < pretty_texts.length; i++) {
   var pretty_text = pretty_texts[i];
   pretty_text.style.color = "blue";
}
