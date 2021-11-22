let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

windows.oncscroll= () =>{
    menu.classList.remove('fa-times');
    header.classList.remove ('active');
}