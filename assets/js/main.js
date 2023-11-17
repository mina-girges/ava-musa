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




var defaultFontSize = 17;

// تعريف دالة لتغيير حجم الخط بنسبة معينة
function changeFontSize(ratio) {
  // الحصول على جميع العناصر داخل الجسم
  var elements = document.body.getElementsByTagName("p");
  var elements = document.body.getElementsByTagName("h3");
  var elements = document.getElementById("font");

  // تكرار على كل عنصر
  for (var i = 0; i < elements.length; i++) {
    // الحصول على حجم الخط الحالي للعنصر
    var currentFontSize = parseFloat(window.getComputedStyle(elements[i]).fontSize);
    // حساب حجم الخط الجديد بالضرب في النسبة
    var newFontSize = currentFontSize * ratio;
    // تعيين حجم الخط الجديد للعنصر
    elements[i].style.fontSize = newFontSize + "px";
  }
}

function resetFontSize() {
  var elements = document.body.getElementsByTagName("*");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.fontSize = defaultFontSize + "px";
  }
}


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
  currentSize = 20;
  document.getElementById("fontSize").style.fontSize = currentSize + "px";
}
