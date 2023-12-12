import {WINNER_COMBOS} from "../constants.js"
    
  //revisamos si tenemos ganador
  export const checkWinner = (tableroCheck) => {
    for (const combo of WINNER_COMBOS) {
      // desestructura la matriz
      const [a, b, c] = combo;
      if (
        tableroCheck[a] &&
        tableroCheck[a] === tableroCheck[b] &&
        tableroCheck[a] === tableroCheck[c]
      ) {
        console.log(tableroCheck[a]);
        return tableroCheck[a];
      }
    }
    // si no hay ganador
    return null;
  };

  export const checkEndGame = (newBoard) => {
    // revisamos si hay un empate
    // si no hay más espacios vacíos
    // en el tablero
    return newBoard.every((square) => square !== null);
  };
