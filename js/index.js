//calculo el valor random de la computadora
function selectRandom() {
  //calculo para el  numero aleatorio
  const bot = Math.floor(Math.random() * 3 + 1);
  var response;
  //le asigno un valor a cada numero que entregara el bot con el numero aleatorio
  if (bot === 1) {
    response = "piedra";
  } else if (bot === 2) {
    response = 'papel';
  } else if (bot === 3) {
    response = 'tijera';
  }
  return response;
}
//iterador para recorrer el ciclo for
var i = 1;

//indico al usuario cuantas rondas desea que tenga esta partida
var countRound = prompt('Indique cuantas veces desea jugar en esta partida');
//le asigno una variable al valor random que devuelve la función
for (i = 1; i <= countRound; i++) {
  countSelectedUser = 0;
  countSelectedRandom = 0;

  var optionRandom = selectRandom();
  //le digo al usuario que seleccione una opción
  var optionSelected = prompt('indique una opcion: ¿piedra?, ¿papel? o ¿tijera?');
  //indico el numero de la ronda
  document.write(i + ' ronda <br>');
  //verifico cual es el ganador de la ronda
  //comienza el calculo para ver quien gana
  if (optionRandom === optionSelected) {
    alert('Esto es un empate!!! ambos escogieron : ' + optionSelected);
    document.write(` Empate con: ${optionSelected} <br>`)
    countSelectedRandom += 1;
    countSelectedUser += 1;

  } else if ((optionRandom == 'piedra') && (optionSelected == 'tijera')) {
    alert('Lo siento perdiste! : ' + optionRandom + ' le gana  a ' + optionSelected);
    document.write(` Gana el computador con: ${optionRandom} <br>`)
    countSelectedRandom += 1;

  } else if ((optionRandom == 'piedra') && (optionSelected == 'papel')) {
    alert('Felicidades Ganastee!!! , ' + optionSelected + ' le gana a ' + optionRandom);
    document.write(` Ganaste Tú con: ${optionSelected} <br>`)
    countSelectedUser += 1;

  } else if ((optionRandom == 'papel') && (optionSelected == 'piedra')) {
    alert('Lo siento perdiste! : ' + optionRandom + ' le gana  a ' + optionSelected);
    document.write(` Gana el computador con: ${optionRandom} <br>`)
    countSelectedRandom += 1;

  } else if ((optionRandom == 'papel') && (optionSelected == 'tijera')) {
    alert('Felicidades Ganastee!!! , ' + optionSelected + ' le gana a ' + optionRandom);
    document.write(` Ganaste Tú con: ${optionSelected} <br>`)
    countSelectedUser += 1;

  } else if ((optionRandom == 'tijera') && (optionSelected == 'papel')) {
    alert('Lo siento perdiste! : ' + optionRandom + ' le gana  a ' + optionSelected);
    document.write(` Gana el computador con: ${optionRandom} <br>`)
    countSelectedRandom += 1;

  } else if ((optionRandom == 'tijera') && (optionSelected == 'piedra')) {
    alert('Felicidades Ganastee!!! , ' + optionSelected + ' le gana a ' + optionRandom);
    document.write(` Ganaste Tú con: ${optionSelected} <br>`);
    countSelectedUser += 1;
  }
  //muestro la jugada y a quien pertenece
  document.write(optionRandom + ' => ' + countSelectedRandom + ' // cpu ' + '<br>');
  document.write(optionSelected + '=> ' + countSelectedUser + ' // Tú ' + '<br>');
  document.write('<br>');
}

//otra forma
// var opciones = ["Piedra", "Papel", "Tijera"];

//       do {
//         var cantidadDePartidas = +prompt(`Ingrese la cantidad de partidas:`);
//       } while (isNaN(cantidadDePartidas) || cantidadDePartidas < 0);

//       if (cantidadDePartidas > 0) {
//         var ptsPlayer = 0;
//         var ptsComputer = 0;
//         for (i = 1; i <= cantidadDePartidas; i++) {
//           do {
//             var decisionDelPlayer = +prompt(`

//           Partida N°: ${i}
//           Ingrese su opción:

//           - 1 ) Piedra
//           - 2 ) Papel
//           - 3 ) Tijera

//           `);
//           } while (
//             isNaN(decisionDelPlayer) ||
//             decisionDelPlayer < 1 ||
//             decisionDelPlayer > 3
//           );

//           const decisionComputer = Math.floor(Math.random() * 3 + 1);
//           alert(
//             "El computador eligió la opción: " + opciones[decisionComputer - 1]
//           );
//           var p = decisionDelPlayer;
//           var c = decisionComputer;

//           if (p == c) alert("EMPATE PO COMPADRE!"), ptsComputer++, ptsPlayer++;
//           else if (p == 1 && c == 2) alert("El computador ganó"), ptsComputer++;
//           else if (p == 1 && c == 3) alert("El jugador ganó"), ptsPlayer++;
//           else if (p == 2 && c == 3) alert("El computador ganó"), ptsComputer++;
//           else if (p == 2 && c == 1) alert("El jugador ganó"), ptsPlayer++;
//           else if (p == 3 && c == 1) alert("El computador ganó"), ptsComputer++;
//           else if (p == 3 && c == 2) alert("El jugador ganó"), ptsPlayer++;
//         }

//         alert(`
//         Puntaje final:
//             - Jugador: ${ptsPlayer}
//             - Computadora: ${ptsComputer};
//       `);
//       } else {
//         alert("Bueno chao");
//       }