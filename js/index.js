window.addEventListener("load", function(e) {
    const app = document.getElementById("app");

  
    class Jugador {
        constructor(casillas, nombre){
            this.casillas = casillas;
            this.nombre = nombre;

        }
    }


    let marca = "x";




    for(let i = 1 ; i<= 9; i++){
        app.innerHTML +=  `<div class='casillas' id='${i}'  ></div>`
   
    }

    document.querySelectorAll(".casillas").forEach(c=> c.addEventListener("click",(e)=>{
        if(e.target.innerHTML ===""){
        e.target.innerHTML += marca;

        if(marca==="x"){
            marca = "o"
        }else{
            marca="x"
        }
        }
    }))


    

    const player1 =  new Jugador([],"jhon");


})