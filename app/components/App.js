var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var {Route, Switch} = ReactRouter; 
var SearchBox = require('./SearchBox');
var Forecast = require('./Forecast');
var Detail = require('./Detail');


class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="container">
					<Route render={function (props) {
						return (
							<div className="header-bar">
								<h1 className="title">Weather App</h1>
								<SearchBox direction="row" 
									onSubmitButton={function (city) {
										props.history.push({
											pathname: '/forecast',
											search: '?city=' + city
										});
									}} />
							</div>
						);
					}} />
					<Switch>
						<Route exact path="/" render={function (props) {
							// Using render to inline component 
							// This way we can trigger a redirect if button
							// is clicked on
							return (
								<section className="home-container" 
									style={{backgroundImage: 
										'url(\'app/images/pattern.svg\')'}}>
									<h1 className="header">
										Enter a City and State
									</h1>
									<SearchBox onSubmitButton={function (city) {
										// onSubmitButton will be triggered in
										// Searchbox component when button is
										// clicked. history.push allows us to
										// redirect url to new specified url
										props.history.push({
											pathname: '/forecast',
											search: '?city=' + city
										});
									}} />
								</section>
							);
						}} />
						<Route path="/forecast" component={Forecast} />
						<Route path="/details/:city" component={Detail} />
					</Switch>
				</div>
			</Router>
		);
	}
}

module.exports = App;