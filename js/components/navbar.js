import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, NavItem, Nav, Grid, Row, Col} from 'react-bootstrap'
import DropzoneComponent from './dropzone'

var NavbarInstance = React.createClass({
  render: function(){
  	var content = <div/>;
      switch(this.props.activePageId) {
        case "1":
            content = <DropzoneComponent />;
            break;
        case "2":
            content = <div />;
            break;
        default:
            content = <div/>;
            break;
        }
  	return(
	  	<div>
	  	  <Grid>
			  <Navbar brand="React-Bootstrap">
			    <Nav>
			      <NavItem>Pictures</NavItem>
			      <NavItem>Videos</NavItem>
			    </Nav>
			  </Navbar>
			  <Col xs={4} md={4} />
			  <Col xs={4} md={4}>
				  <div>
				    	{content}
				  </div>
			  </Col>
			  <Col xs={4} md={4} />
		  </Grid>
		</div>
	  )
	}
});

export default NavbarInstance;