'use strict';


const switcher = document.querySelector('.btn');


switcher.addEventListener('click', function(){
    document.body.classList.toggle('white-theme');
    document.body.classList.toggle('black-theme');

    const className= document.body.className;
    if (className=='white-theme'){this.textContent="dark" ;   }
    else {this.textContent="light";}

    console.log('current class name: ' +className);
});