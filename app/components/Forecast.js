var React = require('react');
var queryString = require('query-string');
var PropTypes = require('prop-types');
var api = require('../utils/api');
var utils = require('../utils/helpers');
var {getDate} = utils;
var Loading = require('./Loading');
var DayItem = require('./DayItem');

class Forecast extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			city: '',
			forecastData: [],
			loading: true
		};

		this.requestWeather = this.requestWeather.bind(this);
		this.handleClick = this.handleClick.bind(this);
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

	handleClick(city) {
		this.props.history.push({
			pathname: '/details/' + this.state.city,
			state: city
		});
	}

	requestWeather(city) {
		api.getForecastData(city)
			// eslint-disable-next-line consistent-return
			.then(function (results) {
				var cityData = results.city;
				var forecastData = results.list;

				setTimeout(function () {
					this.setState(function () {
						return {
							city: cityData.name + ', ' + cityData.country,
							forecastData: forecastData,
							loading: false
						};
					});
				// eslint-disable-next-line no-magic-numbers
				}.bind(this), 3000);

				console.log(results);
			}.bind(this));
	}

	render() {
		var {loading, city, forecastData} = this.state;

		return (
			loading === true
				? <Loading />
				: <div>
						<h1 className="forecast-header">{city}</h1>
							<div className="forecast-container">
								{forecastData.map(function (listItem) {
									return (
										<DayItem
											onClick={this.handleClick
												.bind(this, listItem)}
											key={listItem.dt}
											day={listItem} />
									);
								}.bind(this))}
							</div>
					</div>
		);
	}
}

Forecast.propTypes = {
	location: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired
};

module.exports = Forecast;