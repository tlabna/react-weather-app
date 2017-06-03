var React = require('react');
var Home = require('./Home');

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<nav>Navbar</nav>
				<Home />
			</div>
		);
	}
}

module.exports = App;