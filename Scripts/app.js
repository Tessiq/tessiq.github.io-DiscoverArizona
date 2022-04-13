const navSlide= () =>{
const burger= document.querySelector('.burger');
const nav=document.querySelector('.nav-links');
const navLinks=document.querySelectorAll('.nav-links li')
burger.addEventListener('click' , () =>{
//this will toggle the nav
    nav.classList.toggle('nav-active');

//this will animate the links
navLinks.forEach((link,index) =>{

if (link.style.animation){
link.style.animation='';

} else{
    link.style.animation=  `navLinkFade 0.5s ease fowards ${index /7 + 0}`
}
});
//burger animation
burger.classList.toggle('toggle')

});
}

navSlide();
  