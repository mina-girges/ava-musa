// Dark Mood

var darkMode = document.getElementById("dark-mode");
darkMode.onclick = function(){
    document.body.classList.toggle("dark-mode-theme");
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode-theme");
}


window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");
})





var currentSize = 20;
function increaseFontSize() {
  currentSize += 5;
  document.getElementById("fontSize").style.fontSize = currentSize + "px";
}

function decreaseFontSize() {
  currentSize -= 5;
  document.getElementById("fontSize").style.fontSize = currentSize + "px";
}

function resetFontSize() {
  currentSize = 18;
  document.getElementById("fontSize").style.fontSize = currentSize + "px";
}
