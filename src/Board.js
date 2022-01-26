import React from 'react';
import Square from './Square'

const Board = ({ squares, onClick }) => (


  <div className='columns  '>
    <div className='column  '>
    <div className='columns is-gapless is-multiline is-mobile '>
		{squares && squares.map((square, i) => (
    <div key={i} className="column is-one-third  ">
<Square
 value={square} onClick={() => onClick(i)} /></div>
		))}
	</div>

    </div>
  </div>


);
export default Board;