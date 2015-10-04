import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Thumbnail, ProgressBar} from 'react-bootstrap'
import 'react-spinner/react-spinner.css'
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
            req
            .attach(file.name, file)
            .on('progress', function(e){
              console.log('Percentage done:', e.percent);
            }.bind(this))
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
      // if(this.state.files.length != 0){
      //   content = <div>
      //             <h2>Uploaded {this.state.files.length} files...</h2>
      //             <div>{this.state.files.map((file) => <Thumbnail src={file.preview} />)}</div>
      //             </div>;
      // }

      if(this.state.uploading === true){
        content=<Spinner />;
      }
      if(this.state.uploaded === true){
          content = ( <div>
                      <h2>Uploaded {this.state.files.length} files...</h2>
                      <div>{this.state.files.map((file) => <Thumbnail src={file.preview} />)}</div>
                      </div> );
      }
      return (
          <div>
            <Dropzone ref="dropzone" onDrop={this.onDrop} >
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
            <Button bsStyle="primary" bsSize="large" onClick={this.onOpenClick}>
                Open IMG
            </Button>
            <Button bsStyle="info" bsSize="large" onClick={this.onCleanClick}>
                Clean
            </Button>
            <div>{content}</div>
          </div>
      );
    }
});

export default DropzoneComponent;
