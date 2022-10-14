// sticky menu
// Listen for the scroll event and apply a Sticky class
//  to the header navbar after 
// the document is currently scrolled vertically from the origin.
window.addEventListener("scroll",function(){
    const header=document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

