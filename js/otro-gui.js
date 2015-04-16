var cartas = new Array();
var i = 0;
function generar() {
    var seleccion = document.querySelectorAll(".mazo>section");
    for (i = 0; i < seleccion.length; i++) {
        seleccion[i].style.transform = "translateZ("+ (-i * 1) + "px)"; 
        seleccion[i].style.WebkitTransform = "translateZ("+ (-i * 1) + "px)";
        seleccion[i].setAttribute("data-indice",i);
        cartas.push(seleccion[i]);
        }
      }
function cartaSiguiente(){
    cartas[0].style.transform = "translateX(100vw)";
    cartas[0].style.WebkitTransform = "translateX(100vw)";
    setTimeout(function(){
        temp = cartas.shift();
        cartas.push(temp);
        for (i = 0; i < cartas.length; i++) {
            cartas[i].style.transform = "translateZ("+ (-i * 1) + "px)"; 
            cartas[i].style.WebkitTransform = "translateZ("+ (-i * 1) + "px)";
            cartas[i].setAttribute("data-indice",i);
            }
    },1000);    
}
