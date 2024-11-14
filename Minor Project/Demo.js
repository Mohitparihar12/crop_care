const scroll = new LocomotiveScroll({
   el: document.querySelector('#main'),
   smooth: true
});
let container = document.getElementById('container');

let registerBtn = document.getElementById('register');

let loginBtn =document.getElementById('login');

registerBtn.addEventListener('click' , ()=>{
   container.classList.add("active");
});

loginBtn.addEventListener('click' , ()=>{
    container.classList.remove("active");
 })
 const signin=document.querySelector("#sili");
 signin.addEventListener(onmouseover,{
   alert("Hello");

 })