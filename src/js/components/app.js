import React, { Component } from 'react'

class App extends Component {

	state = {};

	render() {
		return (
			<div className="app">
				<header className="header">
					<div className="header__logo">
						<i className="fa fa-bookmark-o"></i>
					</div>
					<ul className="header__nav">
						<li><a href="#"><i className="fa fa-circle-o"></i>HOME</a></li>
						<li><a href="#">BOOKS</a></li>
						<li><a href="#">MY DICTIONARY</a></li>
					</ul>
				</header>
				<div className="content">
					<section className="hero">
						<img src="http://img-fotki.yandex.ru/get/9836/89721587.22c/0_d3cca_d5219616_XXXL.jpg" />
						<div className="hero__content">
							<span className="hero__content__title"><b>Twenty Thousand Leagues Under the Sea</b></span>
							<span className="hero__content__autor">Jules Verne</span>
						</div>
					</section>
				</div>
			</div>
		)
	}
}

export default App;
