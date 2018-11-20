import * as loadImage from 'blueimp-load-image'
import Webcam from "react-webcam";
import React, { Component } from 'react';
import Input from '@material-ui/core/Input';

class ImgReader extends Component {
    parseInfo(e) 
    {
      let files=e.target.files;
      loadImage.parseMetaData(files[0], (data) => {
        if(data.exif){
          this.props.calmaDown(data);
        }
      })
    }
    render() {
      return (
        <div>
          <div>
            <Input type="file" onChange={(e)=>this.parseInfo(e)}/>
          </div>
          {/* <Webcam audio={false} /> */}
        </div>
      )
    }
  }
  export default ImgReader;