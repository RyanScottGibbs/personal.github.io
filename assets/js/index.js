document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("year").innerHTML = new Date().getFullYear();
});



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
    document.querySelector('.navbar').classList.add('navbar-light');
    document.querySelectorAll('.bg-dark').forEach(item => {
        item.classList.toggle('bg-light');
        item.classList.toggle('bg-dark');
    });
}

function setDark() {
    document.querySelector('.navbar').classList.add('navbar-dark');
    document.querySelector('.navbar').classList.remove('navbar-light');
    document.querySelectorAll('.bg-light').forEach(item => {
        item.classList.toggle('bg-dark');
        item.classList.toggle('bg-light');
    });
}