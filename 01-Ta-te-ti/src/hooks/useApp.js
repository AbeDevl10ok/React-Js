import { useState } from "react";
import { checkEndGame, checkWinner } from "../log/boards.js";
import { TURN } from "../constants.js";
import confetti from "canvas-confetti";

export function useApp() {
  //los estados son asincronos siempre
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    if (boardFromStorage) {
      return JSON.parse(boardFromStorage);
    }
    return Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURN.X;
  });
  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null);

  const handleTurn = () => {
    const newTurn = turn === TURN.X ? TURN.O : TURN.X;
    setTurn(newTurn);
    window.localStorage.setItem("turn", newTurn);
  };

  const handleReset = () => {
    //seteo si tenemos un ganador
    setWinner(null);
    //seteamos el tablero
    const newTablero = Array(9).fill(null);
    window.localStorage.setItem("board", JSON.stringify(newTablero));
    setBoard(newTablero);
    //seteamos el turno
    const newTurn = TURN.X;
    window.localStorage.setItem("turn", newTurn);
    setTurn(newTurn);
  };
  const handleBoard = (index) => {
    // no actualizamos esta posición
    // si ya tiene algo o tenemos ganador
    if (board[index] || winner) return;
    //cambio de turno
    handleTurn();
    //creo un nuevo tablero
    const newBoard = [...board];
    //modifico el contenido y seteo el nuevo tablero
    newBoard[index] = turn;
    setBoard(newBoard);
    window.localStorage.setItem("board", JSON.stringify(newBoard));

    const newWinner = checkWinner(newBoard);
    // console.log(newBoard);
    if (newWinner) {
      confetti();
      setWinner(true);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); //empate
    }
  };

  return {
    TURN,
    board,
    turn,
    handleTurn,
    handleBoard,
    handleReset,
    checkWinner,
    winner,
  };
}
