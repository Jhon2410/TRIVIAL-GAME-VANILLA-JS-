window.addEventListener("load", function (e) {
  const app = document.getElementById("app");

  class Jugador {
    constructor(casillas, nombre, marca) {
      this.casillas = casillas;
      this.nombre = nombre;
      this.marca = marca;
    }
  }

  const validar = (player) => {
    let casillas = player.casillas;
    if (
      (casillas[1] && casillas[2] && casillas[3]) ||
      (casillas[4] && casillas[5] && casillas[6]) ||
      (casillas[7] && casillas[8] && casillas[9]) ||
      (casillas[1] && casillas[4] && casillas[7]) ||
      (casillas[2] && casillas[5] && casillas[8]) ||
      (casillas[3] && casillas[6] && casillas[9]) ||
      (casillas[1] && casillas[5] && casillas[9]) ||
      (casillas[7] && casillas[5] && casillas[3])
    ) {
      return true;
    } else {
      return false;
    }
  };
  let movimientos = 0;
  let turno = 1;
  const player1 = new Jugador(
    [false, false, false, false, false, false, false, false, false,false],
    "jugador 1 ",
    "x"
  );
  const player2 = new Jugador(
    [false, false, false, false, false, false, false, false, false,false],
    "jujador 2 ",
    "o"
  );

  for (let i = 1; i <= 9; i++) {
    app.innerHTML += `<div class='casillas' id='${i}'  ></div>`;
  }

  document.querySelectorAll(".casillas").forEach((c) => {
    c.addEventListener("click", (e) => {
      if (e.target.innerHTML === "") {
        if (turno === 1) {
          e.target.innerHTML += player1.marca;
          player1.casillas[e.target.id] = true;
          marca = player2.marca;
          turno = 2;

          if (validar(player1)) {
            document.querySelector(".main").classList.add("bluer");
            document.getElementById("msg").innerHTML = "jugador 1 'x'";
            setTimeout(() => {
              document.getElementById("resultado").removeAttribute("hidden");
            }, 2000);
            return;
          }
        } else {
          e.target.innerHTML += player2.marca;
          player2.casillas[e.target.id] = true;
          marca = player1.marca;
          turno = 1;
          if (validar(player2)) {
            document.querySelector(".main").classList.add("bluer");
            document.getElementById("msg").innerHTML = "jugador 2 'o'";

            setTimeout(() => {
              document.getElementById("resultado").removeAttribute("hidden");
            }, 2000);

            return;
          }
        }
        movimientos++;

        if (movimientos === 9) {
          document.querySelector(".main").classList.add("bluer");
          document.getElementById(
            "resultado"
          ).innerHTML = `Empate<p id="msg"></p>
            <div class="options">
                <button class="btn" onclick="window.location.reload()">Volver a intentar</button>
            </div>`;

          setTimeout(() => {
            document.getElementById("resultado").removeAttribute("hidden");
          }, 2000);
          return;
        }
      }
    });
  });
});
