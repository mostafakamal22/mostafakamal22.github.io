/**
 * Define Global Variables
 *
 */
 let navbarList = document.getElementById('navbar__list');
 let anchorsNames = [];
 let secs = document.getElementsByTagName('section');
 let anchors = document.getElementsByClassName('menu__link');
 let sectionContentContainers = document.getElementsByClassName("landing__container");
 let navbarContainer = document.getElementsByClassName('page__header');
 let coll = document.getElementsByClassName("collapsible");
 /**
  * End Global Variables
  * Start Helper Functions
  *
  */
 
 // get anchorsNames function
 function getanchors() {
     for (let i = 0; i < secs.length; i++) {
         anchorsNames[i] = secs.item(i).getAttribute('data-nav');
     }
     return anchorsNames;
 }
 // check If Section Contains Active class and remove it 
 function checkIfSectionContainActive(){
  for (let i=0 ; i<secs.length; i++){
    let check=secs[i].classList.contains("your-active-class");
    if (check){
      secs[i].classList.remove("your-active-class");
      anchors[i].classList.remove("active");
    }
  }
}
 // back to top button
 //first creating the btn 
 function buildStickyButton() {
     const fragment = document.createDocumentFragment();
     const button = document.createElement('button');
     button.innerText = "Top";
     button.setAttribute("onclick", "backToTop()");
     button.setAttribute("id", "topBtn");
     button.setAttribute("title", "back to top");
     fragment.appendChild(button);
     document.getElementById('main').appendChild(fragment);
 }
 buildStickyButton();
 //adding the 'back to top' function to the button
 function backToTop() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
 }
 //make the button visible when scrolling
 window.onscroll = function() {
     scroll()
 };
 
 function scroll() {
     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
         topBtn.style.display = "block";
     } else {
         topBtn.style.display = "none";
     }
 }
 // make the fixed navbar hide when scroll stops
 var isScrolling;
 window.addEventListener('scroll', function() {
     // make nabvar visible when scrolling
     navbarContainer[0].style.display = "block";
     window.clearTimeout(isScrolling);
     isScrolling = setTimeout(function() {
         // hide navbar after 2sec of stop scrolling
         navbarContainer[0].style.display = "none";
     }, 2000);
 }, false);
 
 // collapsable section
 
 for (let i = 0; i < coll.length; i++) {
     coll[i].addEventListener("click", function() {
         this.classList.toggle("active");
         let collapsibleContents = [];
         collapsibleContents[0] = coll[i].nextElementSibling.nextElementSibling;
         collapsibleContents[1] = coll[i].nextElementSibling;
         for (collapsibleContent of collapsibleContents) {
             if (collapsibleContent.style.display === "block") {
                 collapsibleContent.style.display = "none";
                 secs[i].style.minHeight = "auto";
             } else {
                 collapsibleContent.style.display = "block";
             }
         }
     });
 }
 
 /**
  * End Helper Functions
  * Begin Main Functions
  *
  */
 
 // build the nav
 
 function BuildNav() {
     const fragment = document.createDocumentFragment();
 
     for (let i = 0; i < secs.length; i++) {
         const newElement1 = document.createElement('li');
         const newElement2 = document.createElement('a');
         newElement2.innerText = anchorsNames[i];
         newElement2.classList.toggle('menu__link');
         newElement1.appendChild(newElement2);
         fragment.appendChild(newElement1);
     }
 
     navbarList.appendChild(fragment);
 }
 // Add class 'active' to section when near top of viewport
 function isSectionInView() {
     let inViewChecker = function(element) {
         let elementBounding = element.getBoundingClientRect();
         return (
             elementBounding.top <= 50 &&
             elementBounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
             elementBounding.right <= (window.innerWidth || document.documentElement.clientWidth)
         );
     };
 
     for (let i = 1; i < sectionContentContainers.length + 1 ; i++) {
         let sectionInFullView = document.getElementById("section" + i);
         window.addEventListener("scroll", function() {
                 if (inViewChecker(sectionInFullView)) {
                     checkIfSectionContainActive();
                     sectionInFullView.classList.add("your-active-class");
                     anchors[i-1].classList.add("active");
                 } else {
                     sectionInFullView.classList.remove("your-active-class");
                     anchors[i-1].classList.remove("active");
                 }
             },false);
     }
 }
 
 // Scroll to anchor ID using scrollTO event
 function scrollToSection() {
     for (let i = 0; i < anchors.length; i++) {
         anchors[i].addEventListener("click", function() {
             secs[i].scrollIntoView({
                 behavior: 'smooth'
             });
         });
     }
 }
 
 /**
  * End Main Functions
  * Begin Events
  *
  */
 
 // Build menu
 getanchors();
 document.addEventListener("DOMContentLoaded", BuildNav);
 // Scroll to section on link click
 document.addEventListener("DOMContentLoaded", scrollToSection);
 // Set sections as active
 isSectionInView();