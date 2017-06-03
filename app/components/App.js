var React = require('react');
var Home = require('./Home');
var Header = require('./Header');


class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Header />
				<Home />
			</div>
		);
	}
}

module.exports = App;