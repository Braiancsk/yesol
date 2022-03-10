//scripts para o menu hamburger
let burger = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');
let links = document.querySelectorAll('a');
let bg = document.querySelector('.bg')
burger.addEventListener('click',()=>{
    handleCloseMenu()
});



bg.addEventListener('click',()=>{
    handleCloseMenu()
})

const handleCloseMenu = () =>{
    burger.classList.toggle('is-active');
  menu.classList.toggle('menu-active');
  if(menu.classList.contains('menu-active')){
    document.body.style.overflow = 'hidden';
    bg.classList.add('bg-active')
  }else{
    document.body.style.overflow = 'auto';
    bg.classList.remove('bg-active')
  }
}