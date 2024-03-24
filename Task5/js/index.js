let home = document.querySelector(".home");
let news = document.querySelector(".news");
let contact=document.querySelector(".contact");
let about=document.querySelector(".about");
let hh1=document.querySelector("#hh1");
let pp1=document.querySelector("#pp1");

let home1=document.querySelector("#home1");
let news1=document.querySelector("#news1");
let contact1=document.querySelector("#contact1");
let about1=document.querySelector("#about1");

let secondclass=document.querySelector(".second");

home.addEventListener("click",function(){
    news1.style.backgroundColor="";
    contact1.style.backgroundColor="";
    about1.style.backgroundColor="";
    home1.style.backgroundColor="red";
    hh1.textContent="Home";
    pp1.textContent="Home is where the heart is..";
    secondclass.style.backgroundColor="red";
   
})
news.addEventListener("click",function(){
    home1.style.backgroundColor="rgb(225, 225, 225)";
    contact1.style.backgroundColor="";
    about1.style.backgroundColor="";
    news1.style.backgroundColor="green";
    hh1.textContent="News";
    pp1.textContent="Some news this fine day!"
    secondclass.style.backgroundColor="green";
   
})
contact.addEventListener("click",function(){
    home1.style.backgroundColor="rgb(225, 225, 225)";
    news1.style.backgroundColor="";
    about1.style.backgroundColor="";
    contact1.style.backgroundColor="blue";
    hh1.textContent="Contact";
    pp1.textContent="Get in touch, or swing by for a cup of coffee.";
    secondclass.style.backgroundColor="blue";
})
about.addEventListener("click",function(){
    home1.style.backgroundColor="rgb(225, 225, 225)";
    news1.style.backgroundColor="";
    contact1.style.backgroundColor="";
    about1.style.backgroundColor="orange";
    hh1.textContent="About";
    pp1.textContent="Who we are and what we do.";
    secondclass.style.backgroundColor="orange";
})


