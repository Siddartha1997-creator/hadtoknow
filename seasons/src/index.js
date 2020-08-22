import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './spinner';
class App extends React.Component {

	state={lat:null, err:''};

	componentDidMount(){
	window.navigator.geolocation.getCurrentPosition(

		position=>this.setState({lat: position.coords.latitude}),
		err=> this.setState({err:"please allow the location permission or try running HTTPS:true npm start"})
	);
	}



	renderContent(){
			if(this.state.err && !this.state.lat){
				return <div>Error:{this.state.err}</div>
			}
			if(!this.state.err && this.state.lat){
				return <div><SeasonDisplay lat={this.state.lat} /></div>
			}
			return <Spinner message="Please accept location request" />;


}
	render() {
		return <div>{this.renderContent()}</div>;
	}
}

ReactDOM.render(<App/>, document.querySelector('#root'));
