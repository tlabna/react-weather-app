var React = require('react');
var queryString = require('query-string');
var PropTypes = require('prop-types');
var api = require('../utils/api');
var Loading = require('./Loading');

class Forecast extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			city: '',
			loading: true
		};

		this.requestWeather = this.requestWeather.bind(this);
	}

	componentDidMount() {
		var {city} = queryString.parse(this.props.location.search);

		this.requestWeather(city);
	}

	componentWillReceiveProps(nextProps) {
		var {city} = queryString.parse(nextProps.location.search);

		// Set loading back to true, so on next city submit
		// Loading shows
		this.setState(function () {
			return {
				loading: true
			};
		});

		this.requestWeather(city);
	}

	requestWeather(city) {
		api.getCurrentWeather(city)
			// eslint-disable-next-line consistent-return
			.then(function (results) {
				setTimeout(function () {
					this.setState(function () {
						return {
							city: results.name,
							loading: false
						};
					});
				// eslint-disable-next-line no-magic-numbers
				}.bind(this), 3000);

				console.log(results);
			}.bind(this));
	}

	render() {
		var {loading} = this.state;

		if (loading === true) {
			return <Loading />;
		}

		return (
			<div>Forecast</div>
		);
	}
}

Forecast.propTypes = {
	location: PropTypes.object.isRequired
};

module.exports = Forecast;