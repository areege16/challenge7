let iconHamburger = document.querySelector(".icon-hamburger");
let Nav = document.querySelector(".nav");


iconHamburger.addEventListener("click", ()=>{
    //way 1 
    // Nav.style.display==="block"? Nav.style.display="none": Nav.style.display="block"
 
    //way2 
    Nav.classList.toggle("active");
});
