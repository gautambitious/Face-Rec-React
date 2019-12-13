import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './Logo.jpg';


const Logo= () => {
  return (
    <div className='ma2 mt0' style={{width: '150px'}}>
    <Tilt className="Tilt br2 shadow-2" options={{ max : 100 }} style={{ height: 110, width: 150 }} >
        <div className="Tilt-inner pa2"><img src={brain} alt='Logo'/></div>
    </Tilt>

    </div>
  );
}

export default Logo;
