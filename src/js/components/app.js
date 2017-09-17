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
					<li><a href="#"><i className="fa fa-circle-o"></i>HOME</a></li>
					<li><a href="#">BOOKS</a></li>
					<li><a href="#">MY DICTIONARY</a></li>
				</ul>
				<div className="app__body">
					<div className="app__body__book-header">
						<div className="app__body__book-header--image" >
							<img src="http://img-fotki.yandex.ru/get/9836/89721587.22c/0_d3cca_d5219616_XXXL.jpg"/>
						</div>
						<div className="app__body__book-header--info">
							INFO
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App;
