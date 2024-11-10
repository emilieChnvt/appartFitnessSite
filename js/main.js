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