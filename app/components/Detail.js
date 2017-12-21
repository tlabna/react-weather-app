var React = require('react');
var DayItem = require('./DayItem');

class Detail extends React.Component {
  render() {
    // console.log(this.props.location.state);
    var props = this.props.location.state;

    return (
      <div>
        <DayItem day={props} />
        <div className="description-container">
        <p>{props.city}</p>
        <p>{props.weather[0].description}</p>
        <p>min temp: {props.temp.min} degrees</p>
        <p>max temp: {props.temp.max} degrees</p>
        <p>humidity: {props.humidity}</p>
        </div>
      </div>
    );
  }
}

module.exports = Detail;