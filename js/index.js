window.addEventListener("load", function (e) {
  const app = document.getElementById("app");

  class Jugador {
    constructor(casillas, nombre,marca) {
      this.casillas = casillas;
      this.nombre = nombre;
      this.marca = marca;
    }
  }

  const validar = () => {};

  let marca = "x";
  let turno = 1;
  const player1 = new Jugador(
    [false, false, false, false, false, false, false, false, false],
    "jugador 1 ",
    "x"
  );
  const player2 = new Jugador(
    [false, false, false, false, false, false, false, false, false],
    "jujador 2 ",
    "o"
  );

  for (let i = 1; i <= 9; i++) {
    app.innerHTML += `<div class='casillas' id='${i}'  ></div>`;
  }

  document.querySelectorAll(".casillas").forEach((c) =>
    c.addEventListener("click", (e) => {
      if (e.target.innerHTML === "") {
        
        if(turno===1){
            e.target.innerHTML += player1.marca;
            marca = player2.marca;
            turno = 2;

        }else{
            e.target.innerHTML += player2.marca;
            marca = player1.marca;
            turno = 1;
        }
      }
    })
  );
});
