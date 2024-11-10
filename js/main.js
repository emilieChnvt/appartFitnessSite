const button = document.getElementById("fixed-btn");

const bottomOfBtn = button.offsetTop;


function fixedBtn(){
    if(window.scrollY >= bottomOfBtn){
        document.body.classList.add("fixed-btn");
    }else{
        document.body.classList.remove("fixed-btn");
    }
}
window.addEventListener("scroll", fixedBtn);