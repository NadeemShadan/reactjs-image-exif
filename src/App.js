import React, { Component } from 'react';
import './App.css';
import Webcam from "react-webcam";
import Input from '@material-ui/core/Input';
// import TextField from '@material-ui/core/TextField';
import * as loadImage from 'blueimp-load-image'


class ImgReader extends Component {
  workWorkWork(e) 
  {
    let files=e.target.files;
    loadImage.parseMetaData(files[0], (data) => {
      if(data.exif){
        console.log('data: ', data.exif.getAll());
      }
    })
  }
  render() {
    return (
      <div>
        <div>
          <Input type="file" onChange={(e)=>this.workWorkWork(e)}/>
        </div>
        <Webcam audio={false} />
      </div>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>EXIF DATA READER</h1>
          <ImgReader />
      </div>
    );
  }
}

export default App;
