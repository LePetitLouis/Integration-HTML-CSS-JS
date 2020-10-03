var content1 = document.getElementById('tab1');
var content2 = document.getElementById('tab2');
var content3 = document.getElementById('tab3');

var li1 = document.querySelector('.li1');
var li2 = document.querySelector('.li2');
var li3 = document.querySelector('.li3');

content1.style.display = "grid";

function openTab1(e){
    content1.style.display = "grid";
    content2.style.display = "none";
    content3.style.display = "none";
    li1.classList.add('activeListe');
    li2.classList.remove('activeListe');
    li3.classList.remove('activeListe');
}

function openTab2(){
    content1.style.display = "none";
    content2.style.display = "grid";
    content3.style.display = "none";
    li1.classList.remove('activeListe');
    li2.classList.add('activeListe');
    li3.classList.remove('activeListe');
}

function openTab3(){
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "grid";
    li1.classList.remove('activeListe');
    li2.classList.remove('activeListe');
    li3.classList.add('activeListe');
}


