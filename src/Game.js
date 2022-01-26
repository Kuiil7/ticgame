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
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };


const jumpTo = () => {

}

const renderMoves = () => {
  return <>
  <div class=" has-text-centered">
  <button className='button is-primary ' onClick={() => setBoard(Array(9).fill(null))}>
    Click here to Start Game
  </button >
  </div>
</>
};

  return (
<>
<div className='columns is-justify-content-center'>
<div className='column'>
<p class="title is-size-1 has-text-primary">Tic Tac Toe </p>
<p class="subtitle has-text-primary">with react hooks! </p>
<Board squares={board} onClick={handleClick} />
<p className='is-size-1 has-text-centered has-text-primary'>
{winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")} {renderMoves()}
</p>
</div>
</div>
</>
  );
};
export default Game;