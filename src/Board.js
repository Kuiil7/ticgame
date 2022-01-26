import React from 'react';
import Square from './Square'

const Board = ({ squares, onClick }) => (


  <div className='columns is-justify-content-center'>
    <div className='column is-6 '>
    <div className='columns is-gapless is-multiline is-mobile has-background-primary'>
		{squares && squares.map((square, i) => (
        <div key={i} className="column is-one-third  ">


<Square
      className='is-size-1'
 value={square} onClick={() => onClick(i)} /></div>


		))}
	</div>

    </div>
  </div>


);
export default Board;