
const hamburgerBTN = document.querySelector(".hamburger")
const sidebar = document.querySelector(".sidebar-container")

hamburgerBTN.addEventListener("click",()=>{
    sidebar.classList.toggle("seen");
    hamburgerBTN.classList.toggle("slide");
})

///mobile
const topbar=document.querySelector(".topbar-mobile-container")
const dropdownBTN= document.querySelector(".mobile-hamburger")
const dropdownMenu= document.querySelector(".dropdown-menu")
const links=document.querySelectorAll(".links")

dropdownBTN.addEventListener("click",e=>{
        dropdownMenu.classList.toggle("seen")
        dropdownBTN.classList.toggle("spin")
        e.stopPropagation()

})
window.addEventListener("click",e=>{
    if (!e.target.matches(".dropdown-menu")){
        dropdownMenu.classList.remove("seen")
        dropdownBTN.classList.remove("spin")
     }
})
