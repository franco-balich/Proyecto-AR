var buttons = document.querySelectorAll('button');

function ButtonC(msg){
    alert(msg);
}

buttons.forEach((item)=>{
    item.addEventListener('click', ()=>{
        ButtonC("Ejemplo de funcion");
    });
});
