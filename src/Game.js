import React, {useState } from 'react';
import Board from './Board'
import {calculateWinner} from './helpers';

const Game = () => {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "x" : "o";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
    }

const jumpTo = () => {

}

const renderMoves = () => {
  return <button onClick={() => setBoard(Array(9).fill(null))}>
    Start Game
  </button >
}

const styles = {
  width: '200px',
  margin: '20px auto'
}

  return (
<>
<div>
  <p>Game Page</p>
<Board
onClick={handleClick}
/>
<div style={styles}>
    <p>
      {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
    </p>
    {renderMoves()}
  </div>
</div>
</>
  );
};
export default Game;