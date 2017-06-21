var React = require('react');

class Detail extends React.Component {
	render() {
		console.log(this.props.location.state);

		return (
			<div>Details</div>
		);
	}
}

module.exports = Detail;