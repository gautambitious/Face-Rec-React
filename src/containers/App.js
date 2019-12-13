import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/navigation/Navigation';
import Logo from '../components/logo/Logo';
import ImageLinkForm from '../components/imagelinkform/ImageLinkForm';
import Rank from '../components/rank/Rank';
import Particles from 'react-particles-js';

const particleParams={
  particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }

class App extends Component{

  render(){
  return (
    <div className="App">
      <Particles className='particles'
              params={particleParams}
            />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}}

export default App;
