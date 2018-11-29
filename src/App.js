import React, { Component } from 'react';
import './App.css';
import ImgReader from './components/ImgReader'
import DataTable from './components/DataTable'
import Filter from './components/Filter'
class App extends Component {
  constructor() {
    super();
    this.state = { imageInfo: {}, searchKeyWord: '' };
  }
  dudeChill(data) {
    this.setState({ imageInfo: data.exif.getAll() })
  }
  render() {
    return (
      <div className="App">
        <h1>EXIF DATA READER</h1>
        <ImgReader calmaDown={this.dudeChill.bind(this)} />
        {this.state && Object.keys(this.state.imageInfo).length > 0 && <Filter onTextChange={text => {
          this.setState({ searchKeyWord: text })
        }
        } />}
        {this.state && Object.keys(this.state.imageInfo).length > 0 && <DataTable searchTerm={this.state.searchKeyWord} imageInfo={this.state.imageInfo} />}
      </div>
    );
  }
}
export default App;
