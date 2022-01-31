// Global variables
const aside = document.getElementsByTagName("aside")[0] 
const closeBtn = document.getElementById('close')
const openBtn = document.getElementById('open')

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