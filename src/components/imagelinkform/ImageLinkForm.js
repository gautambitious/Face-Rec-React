import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm= ({ onInputChange, onButtonSubmit }) => {
  return( <div className='form center'>
        <p className='f3 center'>Enter a link to a picture to detect faces</p>
        <div className="center shadow-3 ph1 pv5 pattern">
        <input type='text' onChange={onInputChange} className='center w-80 br2' placeholder='Enter Link to the picture'/>
        <button onClick={onButtonSubmit} className="grow br10 w-7 ml1 link white dib bg-blue">Detect</button>
        </div>
        </div>
      );
}

export default ImageLinkForm;
