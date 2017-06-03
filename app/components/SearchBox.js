var React = require('react');

class SearchBox extends React.Component {
	render() {
		return (
			<div className="search-box-container">
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

module.exports = SearchBox;