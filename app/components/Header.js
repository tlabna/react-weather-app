var React = require('react');
var SearchBox = require('./SearchBox');

class Header extends React.Component {
	render() {
		return (
			<div className="header-bar">
				<h1 className="title">Weather App</h1>
				<SearchBox direction="row" />
			</div>
		);
	}
}

module.exports = Header;