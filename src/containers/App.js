import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/navigation/Navigation';
import Logo from '../components/logo/Logo';
import ImageLinkForm from '../components/imagelinkform/ImageLinkForm';
import Rank from '../components/rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from '../components/facerecognition/FaceRecognition';

const app=new Clarifai.App({
  apiKey: 'a9abbd92fbf945b6a32963e954d1346e'
});

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

  constructor(){
    super();
    this.state = {
      input : '',
      imageURL : '',
      box:{}
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  calculateFaceLoc = (data) => {
    const bounding_box=data.outputs[0].data.regions[0].region_info.bounding_box;
    const image= document.getElementById('inputimage');
    const height = Number(image.height);
    const width = Number(image.width);
    const box={
      topRow: bounding_box.top_row * height,
      leftCol: bounding_box.left_col * width,
      bottomRow: height - (bounding_box.bottom_row * height),
      rightCol: width - (bounding_box.right_col * width)
    };
    this.setState({box: box})
  }

  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      (response) => this.calculateFaceLoc(response))
      .catch((err) =>console.log(err));
  }

  render(){
  return (
    <div className="App">
      <Particles className='particles'
              params={particleParams}
            />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      <FaceRecognition imageURL={this.state.imageURL} box={this.state.box}/>
    </div>
  );
}}

export default App;
