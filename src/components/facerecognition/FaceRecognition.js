import React from 'react';
import './FaceRecognition.css';

const FaceRecognition= ({imageURL, box}) => {
  return (
    <div className='center ma0 absolute' style={{left: '50%'}}>
      <div className='mt2 relative' style={{left: '-50%'}}>
        <img id='inputimage' alt='' src={imageURL} width='500px' height='auto'/>
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  );
}

export default FaceRecognition;
