import React from 'react';




const Square = ({ value, onClick }) => (


<>
<div onClick={onClick} style={{height:'125px',  border: '5px solid white'}} className=' has-background-primary'>
<p class="title has-text-centered is-size-1 mt-5  has-text-white">
{value}
</p>
</div>


</>







);
export default Square;