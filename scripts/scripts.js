// Global variables
const aside = document.getElementsByTagName("aside")[0] 
const closeBtn = document.getElementById('close')
const openBtn = document.getElementById('open')
const navbar = document.getElementById('navbar')
const aboutSection = document.getElementById('about')

//opening aside when clicking open btn
openBtn.addEventListener("click", ()=>{
    aside.style.visibility= 'visible'
    aside.style.opacity= '1'
})

//hidding aside when clicking close btn
closeBtn.addEventListener("click", ()=>{
    aside.style.visibility= "hidden"
    aside.style.opacity= '0'
})

//detecting about section's top value

const detectTop = ()=> {
    const top = document.getElementById('about').getBoundingClientRect().top
    return top;
}

//changing navbar's style when scrolling
window.addEventListener('scroll',()=>{
    const topValue = detectTop()

    if(topValue<0){
        navbar.classList.add('navbar-active')
    }else{
        navbar.classList.remove('navbar-active')
    }
}) 