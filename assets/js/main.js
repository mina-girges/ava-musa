var darkMode = document.getElementById("dark-mode");
darkMode.onclick = function(){
    document.body.classList.toggle("dark-mode-theme");
}

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");
})
