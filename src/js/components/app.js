import React, { Component } from 'react'

class App extends Component {

	state = {};

	render() {
		return (
			<div className="app">
				<ul className="app__header">
					<li className="app__header--logo">
						<i className="fa fa-bookmark-o"></i>
					</li>
					<li><a href="#">HOME</a></li>
					<li><a href="#">BOOKS</a></li>
					<li><a href="#">DICTIONARY</a></li>
				</ul>
			</div>
		)
	}
}

export default App;
