var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');

class SearchBox extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			address: ''
		};

		this.handleUpdateAddress = this.handleUpdateAddress.bind(this);
		this.handleSubmitAddress = this.handleSubmitAddress.bind(this);
	}

	handleSubmitAddress () {
		// api.getForecastData(this.state.address)
		// 	.then(function (result) {
		// 		console.log(result);
		// 	});
		var city = this.state.address;

		this.props.onSubmitButton(city);

		api.getCurrentWeather(city)
			.then(function (result) {
				console.log(result);
			});

		this.setState(function () {
			return {
				address: ''
			};
		});
	}

	handleUpdateAddress (event) {
		var address = event.target.value;

		this.setState(function () {
			return {
				address: address
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
					value = {this.state.address}
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