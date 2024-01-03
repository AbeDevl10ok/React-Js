import { Squared } from "./components/Squared.jsx";
import { useApp } from "./hooks/useApp.js";

function App() {
  const { TURN, board, turn, handleBoard,handleReset } = useApp();

  return (
    <>
      <header className="header">
        <h1>TA-TE-TI</h1>
      </header>
      <main className="board">
          <button onClick={handleReset}>reset juego</button>
        <section className="game">
          {board.map((cuad, index) => {
            return (
              <Squared key={index} index={index} handleBoard={handleBoard}>
                {cuad}
              </Squared>
            );
          })}
        </section>
      </main>
      <div className="turn">
        <Squared isSelected={turn === "X"}>{TURN.X}</Squared>
        <Squared isSelected={turn === "O"}>{TURN.O}</Squared>
      </div>
    </>
  );
}

export default App;
