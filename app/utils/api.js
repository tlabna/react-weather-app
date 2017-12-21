var axios = require('axios');

var APIKEY = 'ee89c8026b83263b3e6920de5722d84a';
var baseURL = 'https://api.openweathermap.org/data/2.5/';

function getQueryStringData (city) {
	return {
		q: city,
		type: 'accurate',
		APPID: APIKEY,
		units: 'metric',
		cnt: 5
	};
}

function prepParams (queryStringData) {
	return Object.keys(queryStringData)
		.map(function (key) {
			return key + '=' + encodeURIComponent(queryStringData[key]);
		})
		.join('&');
}

function prepURL (type, queryStringData) {
	return baseURL + type + '?' + prepParams(queryStringData);
}

function getCurrentWeather (city) {
	var queryStringData = getQueryStringData(city);
	var url = prepURL('weather', queryStringData);

	return axios.get(url)
		.then(function (currentWeatherData) {
			return currentWeatherData.data;
		});
}

function getForecastData (city) {
	var queryStringData = getQueryStringData(city);
	var url = prepURL('forecast/daily', queryStringData);

	return axios.get(url)
		.then(function (forecastData) {
			return forecastData.data;
		});
}

module.exports = {
	getCurrentWeather: getCurrentWeather,
	getForecastData: getForecastData
};