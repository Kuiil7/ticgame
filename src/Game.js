import React, {useState } from 'react';
import Board from './Board'
import {calculateWinner} from './helpers';


const styles = {
  width: '200px',
  margin: '20px auto'
}
const Game = () => {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    // If user click an occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
    // Put an X or an O in the clicked square
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };


const jumpTo = () => {

}

const renderMoves = () => {
  return <>

<section class="hero is-primary is-fullheight">
  <div class=" has-text-centered">

  <button className='button is-primary is-inverted ' onClick={() => setBoard(Array(9).fill(null))}>
    Click here to Start Game
  </button >
  </div>
</section>


</>



};



  return (
<>
<section class="hero is-medium is-primary">
  <div class="hero-body">
    <p class="title">
   Tic Tac Toe
    </p>
    <p class="subtitle">
  with react hooks!
    </p>
  </div>
</section>
<Board squares={board} onClick={handleClick} />
<div className='hero is-small is-primary'>
    <p className='is-size-1 has-text-centered'>
      {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
    </p>
    {renderMoves()}
  </div>

</>
  );
};
export default Game;