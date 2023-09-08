var darkMode = document.getElementById("dark-mode");
darkMode.onclick = function(){
    document.body.classList.toggle("dark-mode-theme");
}

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");
})



// تعريف متغير لحفظ حجم الخط الافتراضي
var defaultFontSize = 16;

// تعريف دالة لتغيير حجم الخط بنسبة معينة
function changeFontSize(ratio) {
  // الحصول على جميع العناصر داخل الجسم
  var elements = document.body.getElementsByTagName("p");
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

// تعريف دالة لإعادة حجم الخط إلى الافتراضي
function resetFontSize() {
  // الحصول على جميع العناصر داخل الجسم
  var elements = document.body.getElementsByTagName("*");
  // تكرار على كل عنصر
  for (var i = 0; i < elements.length; i++) {
    // تعيين حجم الخط الافتراضي للعنصر
    elements[i].style.fontSize = defaultFontSize + "px";
  }
}
