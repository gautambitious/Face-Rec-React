import React from 'react';

const Navigation = ({route, onRouteChanged}) => {
  if(route==='home'){
    return (
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p className='f3 link dim black underline pa3 pointer ma0' onClick={() => onRouteChanged('signin')}>Sign Out</p>
      </nav>
    );
  }
  else if(route==='register'){
    return (
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p className='f3 link dim black underline pa3 pointer ma0' onClick={() => onRouteChanged('signin')}>Sign In</p>
      </nav>
    );
  }
  else{
    return(
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
      </nav>
    );
  }
}

export default Navigation;
