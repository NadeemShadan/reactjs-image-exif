import React, { Component } from 'react';
import './App.css';
import ImgReader from './components/ImgReader'
import DataTable from './components/DataTable'
class App extends Component {
  constructor(){
    super();
    this.state={imageInfo:{}};
  }
  dudeChill(data){
    this.setState({imageInfo:data.exif.getAll()})
  }
  render() {
    return (
      <div className="App">
      <h1>EXIF DATA READER</h1>
          <ImgReader calmaDown={this.dudeChill.bind(this)} />
          {this.state && Object.keys(this.state.imageInfo).length>0 && <DataTable imageInfo={this.state.imageInfo}/>}
      </div>
    );
  }
}

export default App;
