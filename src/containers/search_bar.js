import React, { Component } from 'react';
import { Grid, Form, Button, Icon, Input } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {bindActionCreators} from  'redux';
import {fetchWeather} from '../actions/index';
class SearcBar extends Component {
	constructor (props) {
		super(props);
		this.state = {term: ''};
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	onInputChange(event){
    	this.setState({term: event.target.value});
  	}

  	onFormSubmit(event){
			event.preventDefault();
			this.props.fetchWeather(this.state.term);
			this.setState({term: ''});
  	}
	render(){
		return (
			<Form onSubmit={this.onFormSubmit}>
				<Grid>
		        	<Grid.Column fluid = {true} width={16}>
		        		<Form.Field>
		        			<Input value = {this.state.term}  onChange= {this.onInputChange} fluid = {true} action={{ icon: 'search' }} placeholder='Search...' />
		        		</Form.Field>
		        	</Grid.Column>
		        </Grid>
     		</Form>
     	);
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather},dispatch);
}
export default connect (null,mapDispatchToProps)(SearcBar);
