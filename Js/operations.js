/* Strict mode activated */
"use strict"

const btn_pedidos = document.querySelector('.btn-productos');

btn_pedidos.addEventListener('click', function(){
    alert("Ha presionado el boton pedidos");

    let resultado = confirm("¿Desea ser redirigido?");
    
    if(resultado){
        window.location = "http://www.google.com"
    } else{
        alert("Sera redireccionado local");
        window.location = "/components/productos.html"
    }
})