import React from 'react'
import NavbarInstance from './components/navbar'


var Portal = React.createClass({
	render: function(){
		return (
					<div>
						<NavbarInstance activePageId="1"/>
					</div>
				)
	}
});

React.render(<Portal />, document.body);
