var React = require('react');
var utils = require('../utils/helpers');
var {getDate} = utils;

function DayItem (props) {
  var date = getDate(props.day.dt);
  var icon = props.day.weather[0].icon;
  var image = require('../images/weather-icons/' + icon + '.svg');

  return (
    <div onClick={props.onClick} className="dayContainer">
      <img className="weather"
        src={`${image}`}
        alt="Weather" />
      <h2 className="subheader">{date}</h2>
    </div>
  );
}

module.exports = DayItem;
