const slideshowElements=document.querySelectorAll(".slideshow-element");
let countElements=1;
setInterval(()=>{
    countElements ++;
    let currentElemet=document.querySelector(".current");
    currentElemet.classList.remove("current");
    if(countElements>slideshowElements.length){
        slideshowElements[0].classList.add("current");
        countElements=1;
    }else {
        currentElemet.nextElementSibling.classList.add("current");
    }
    
},2000);