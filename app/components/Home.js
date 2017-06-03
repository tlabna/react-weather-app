var React = require('react');
var SearchBox = require('./SearchBox');

var backgroundImage = {backgroundImage: 'url(\'app/images/pattern.svg\')'};

class Home extends React.Component {
	render() {
		return (
			<section className="home-container" style={backgroundImage}>
				<h1 className="header">Enter a City and State</h1>
				<SearchBox />
			</section>
		);
	}
}

module.exports = Home;