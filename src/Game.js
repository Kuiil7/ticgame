import React, {useState } from 'react';
import Board from './Board'
import {calculateWinner} from './helpers';

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber , setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = (i) => {
    const timeInHistory = history.slice(0, stepNumber + 1)
    const current = timeInHistory[stepNumber];
    const squares = [...current];
    if (winner || squares[i]) return;
    squares[i] = xIsNext ? "X" : "O";
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length)
    setXisNext(!xIsNext);
  };

  const jumpTo = step => {
    setStepNumber(step)
    setXisNext(step % 2 === 0)
  }

  const renderMoves = () => (
    history.map((_step, move) => {
      const destination = move ? `Go to move#${move}` : 'Go to start';
      return (
        <ul className='has-text-centered'>
        <li key={move}  className='mb-4'>
  <button className='button is-primary ' onClick={() => jumpTo(move)}>
  {destination}
      </button >
        </li>
        </ul>
      )
    })
  )

  return (
    <>
    <div className='columns is-justify-content-center'>
    <div className='column'>
    <p class="title is-size-1 has-text-primary">Tic Tac Toe </p>
    <p class="subtitle has-text-primary">with react hooks! </p>
    <Board squares={history[stepNumber]} onClick={handleClick} />
    <p className='is-size-1 has-text-centered has-text-primary'>
    {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
    </p>
    {renderMoves()}
    </div>
    </div>
    </>
      );
}

export default Game;