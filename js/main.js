let nav=document.querySelector("nav");

let up=document.querySelector(".up");

let data=document.querySelector(".data");

window.onscroll=()=>{
    if (window.scrollY<740){
        nav.setAttribute("data",'yas');
        up.style.display="none ";
    }
    else{
        nav.removeAttribute("data");
        nav.setAttribute("date",'no');
        up.style.display="flex";
    }
}

let date=new Date();

data.innerHTML=date.getFullYear();