document.getElementById("goUp").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", function() {
    let button = document.getElementById("goUp");
    if (window.scrollY > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});

document.getElementById("goDown").addEventListener("click", function() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", function() {
    let button = document.getElementById("goDown");
    if (window.scrollY < document.body.scrollHeight - window.innerHeight - 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});