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

      function cartaSiguiente()
      {
          cartas.sort(function(a,b){            
              return a.getAttribute("data-indice") - b.getAttribute("data-indice");
          });
          if(cartas[0].style.animation!="")
          {
              cartas[0].style.animationPlayState="running";
              //cartas[0].style.WebkitAnimationPlayState="running";
              return;
          }
        cartas[0].style.animation="pasa_carta 1.5s linear infinite";
        //cartas[0].style.WebkitAnimation="pasa_carta_wk 1.5s linear infinite";
        /*cartas[0].addEventListener("webkitAnimationIteration",function() {
            this.style.WebkitAnimationPlayState="paused";
            temp=cartas.shift();
            cartas.push(temp);
            for (i = 0;i < cartas.length;i++)
            {
                cartas[i].style.transform="translateZ("+(-i*1)+"px)";
                cartas[i].style.WebkitTransform="translateZ("+(-i*1)+"px)";
                cartas[i].setAttribute("data-indice",i);
            }
			console.log(cartas[0]);
          });*/            
        cartas[0].addEventListener("animationiteration",function() {
            this.style.animationPlayState="paused";
            temp=cartas.shift();
            cartas.push(temp);
            for (i = 0;i < cartas.length;i++)
            {
                cartas[i].style.transform="translateZ("+(-i*1)+"px)";  
                cartas[i].setAttribute("data-indice",i);
            }
			console.log(cartas[0]);
          });            
      }

