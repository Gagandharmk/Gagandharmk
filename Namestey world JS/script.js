/*document.addEventListener("DOMContentLoaded",function(){*/
let namstebtn = document.querySelector('button');
namstebtn.addEventListener('click',inputmsz);

function inputmsz(){
    let name = prompt('Enter Name Of  Student');
    namstebtn.textContent = 'Roll No. 1:' + name ;
}
/*});*/