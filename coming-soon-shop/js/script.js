//global variables
const coverImage = document.getElementById('cover');
const coverContainer= document.getElementById('cover-container');
const emailInput =document.getElementById('email');
const submitBtn= document.getElementById('submit');
const errorMessage= document.getElementById('error');
const errorIcon= document.getElementsByClassName('error-icon');

//replacing cover image at small mobile devices (450px at max)
function changeCover(){
    if(window.innerWidth<=450){
        coverImage.setAttribute('src','./images/hero-mobile.jpg');
        //setting cover container width to 100%
        coverContainer.style.width='100%';
    }
    else if(window.innerWidth<=800){
        coverImage.setAttribute('src','./images/hero-desktop.jpg');
        //setting cover container width to 100%
        coverContainer.style.width='80%';
    }
    else{
        coverImage.setAttribute('src','./images/hero-desktop.jpg');
        //setting cover container width to 100%
        coverContainer.style.width='100%';
    }
}
//Email validation and error message 
function ValidateEmail(){
    let mailformat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailInput.value.match(mailformat)){
        errorMessage.innerHTML="";
        errorIcon[0].style.display="none";
    }
    else{
        errorMessage.innerHTML="please provide a valid email";
        errorIcon[0].style.display="inline-block";
        emailInput.focus();
    }
}
window.addEventListener('DOMContentLoaded',changeCover);
submitBtn.addEventListener('click',ValidateEmail);
window.addEventListener('resize', changeCover);
