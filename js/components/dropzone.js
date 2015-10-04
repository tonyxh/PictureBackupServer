import React from 'react'
import {Thumbnail} from 'react-bootstrap'
var Dropzone = require('react-dropzone');

var DropzoneComponent = React.createClass({
    getInitialState: function() {
    return {files: []};
  },

    onDrop: function (files) {
      this.setState({
        files: files
      });
    },

    onOpenClick: function () {
      this.refs.dropzone.open();
    },

    render: function () {
      var content = <div />;
      if(this.state.files.length != 0){
        content = <div>
                  <h2>Uploaded {this.state.files.length} files...</h2>
                  <div>{this.state.files.map((file) => <Thumbnail src={file.preview} />)}</div>
                  </div>;
      }
      return (
          <div>
            <Dropzone ref="dropzone" onDrop={this.onDrop} >
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
            <button type="button" onClick={this.onOpenClick}>
                Open Dropzone
            </button>
            <div>{content}</div>
          </div>
      );
    }
});

export default DropzoneComponent;
