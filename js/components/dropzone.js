import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Thumbnail, ProgressBar} from 'react-bootstrap'
import 'react-spinner/react-spinner.css'
import '../../css/dropzone.css'

import Spinner from 'react-spinner'
var Dropzone = require('react-dropzone');
var request = require('superagent');

var DropzoneComponent = React.createClass({
    getInitialState: function() {
    return {files: [], uploading:false, uploaded:false};
  },

    onDrop: function(files){
        this.setState({files:files, uploading:true, uploaded: false});
        var req = request.post('/upload');
        files.forEach((file) => {
            req.attach(file.name, file);
            });
        req.on('progress', function(e){
              this.setState({finished:e.percent});
              console.log('Percentage done:', e.percent);
        }.bind(this));
        req.end(function(){
          console.log('uploaded');
          this.setState({uploading: false, uploaded: true});
        }.bind(this));
    },

    onOpenClick: function () {
      this.refs.dropzone.open();
    },

    onCleanClick: function () {
      this.setState({files:[]});
    },

    render: function () {
      var content = <div />;
      if(this.state.uploading === true){
        content=<ProgressBar now={this.state.finished} />;
      }
      if(this.state.uploaded === true){
          content = ( <div>
                      <h2>Uploaded {this.state.files.length} files!</h2>
                      <div>{this.state.files.map((file) => <Thumbnail src={file.preview} />)}</div>
                      </div> );
      }
      return (
          <div>
            <Dropzone className="dropzone" ref="dropzone" onDrop={this.onDrop} >
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
            <div>
            <Button bsStyle="primary" bsSize="large" onClick={this.onOpenClick}>
                Open IMG
            </Button>
            <Button bsStyle="info" bsSize="large" onClick={this.onCleanClick}>
                Clean
            </Button>
            </div>
            <div margin="auto">{content}</div>
          </div>
      );
    }
});

export default DropzoneComponent;
