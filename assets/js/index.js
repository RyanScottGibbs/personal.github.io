// Theme toggle button.
document.querySelector(".btn-toggle").addEventListener("click", function () {

    if (document.body.classList.contains("dark-theme")) {  
        setLight();
    } else {
        setDark();
    }

    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
});

function setLight() {
    document.querySelector('.navbar').classList.remove('navbar-dark');
    document.querySelector('.navbar').classList.remove('bg-dark');
    document.querySelector('.navbar').classList.add('navbar-light');
    document.querySelector('.navbar').classList.add('bg-light');
}

function setDark() {
    document.querySelector('.navbar').classList.add('navbar-dark');
    document.querySelector('.navbar').classList.add('bg-dark');
    document.querySelector('.navbar').classList.remove('navbar-light');
    document.querySelector('.navbar').classList.remove('bg-light');
}