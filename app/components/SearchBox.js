var React = require('react');
var PropTypes = require('prop-types');

class SearchBox extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			address: ''
		};
	}

	render() {
		return (
			<div className="search-box-container" 
				style={{flexDirection: this.props.direction}}>
				<input
					type="text" 
					placeholder="Montreal, Qc"
					className="form-control"
				/>
				<button
					className="btn"
					type="button">
						Get Weather
				</button>
			</div>
		);
	}
}

SearchBox.propTypes = {
	direction: PropTypes.string.isRequired
};

SearchBox.defaultProps = {
	direction: 'column' 
};

module.exports = SearchBox;