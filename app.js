const display = document.getElementById('display');
const btns = document.querySelectorAll('.btn');

let string = "";

btns.forEach(btn =>{
    btn.addEventListener('click',()=>{
        if(btn.innerHTML === "c"){
            string =string.slice(0,string.length -1);
            display.value = string;
        }else if(btn.innerHTML === "Ac"){
            string = "";
            display.value = string;
        }else if(btn.innerHTML === "="){
            display.value = eval(string);
        }else if(btn.innerHTML === "x"){
            string += "*";
            display.value = string;
        }else{
            string += btn.innerHTML;
            display.value = string;
        }
    });
})

