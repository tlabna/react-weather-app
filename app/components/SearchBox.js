var React = require('react');
var PropTypes = require('prop-types');

class SearchBox extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			city: ''
		};

		this.handleUpdateAddress = this.handleUpdateAddress.bind(this);
		this.handleSubmitAddress = this.handleSubmitAddress.bind(this);
	}

	handleSubmitAddress () {
		var {city} = this.state;

		this.props.onSubmitButton(city);

		this.setState(function () {
			return {
				city: ''
			};
		});
	}

	handleUpdateAddress (event) {
		var city = event.target.value;

		this.setState(function () {
			return {
				city: city
			};
		});
	}

	render() {
		return (
			<div className="search-box-container" 
				style={{flexDirection: this.props.direction}}>
				<input
					type="text" 
					placeholder="Montreal, Qc"
					className="form-control"
					onChange = {this.handleUpdateAddress}
					value = {this.state.city}
				/>
				<button
					className="btn"
					type="button"
					onClick={this.handleSubmitAddress}>
						Get Weather
				</button>
			</div>
		);
	}
}

SearchBox.propTypes = {
	direction: PropTypes.string.isRequired,
	onSubmitButton: PropTypes.func.isRequired
};

SearchBox.defaultProps = {
	direction: 'column' 
};

module.exports = SearchBox;