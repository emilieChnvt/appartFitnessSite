const button = document.getElementById("fixed-btn");
const bottomOfBtn = button.offsetTop;


function fixedBtn(){
    if(window.scrollY >= (bottomOfBtn / 2)){
        document.body.classList.add("fixed-btn");
    }else{
        document.body.classList.remove("fixed-btn");
    }
}
window.addEventListener("scroll", fixedBtn);


const nav = document.getElementById("fixed-nav");
const containerGrosTitre = document.getElementById("containerGrosTitre");
const topOfNav = nav.offsetTop;
const topOfTitre = containerGrosTitre.offsetTop;

function fixedNav(){
    if(window.scrollY >= topOfNav){
        containerGrosTitre.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add("fixed-nav");
    }else{
        document.body.style.paddingTop = 0;
        document.body.classList.remove("fixed-nav");
    }
}
window.addEventListener("scroll", fixedNav);

function darkNav(){
    if(window.scrollY >= topOfTitre){
        nav.classList.add("dark");
    }else{
        nav.classList.remove("dark");
    }
}

window.addEventListener("scroll", darkNav);