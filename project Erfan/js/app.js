// var myVar = document.querySelector(#icon);
// function NavigationAct(){
//     myVar = 
// }
const logoNav = document.querySelector(".logo-nav");
const navigation = document.querySelector(".navigation");

logoNav.addEventListener("click",() => {
    navigation.classList.toggle("open");
});
