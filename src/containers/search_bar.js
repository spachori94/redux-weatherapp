import React, { Component } from 'react';
import { Grid, Form, Button, Icon, Input } from 'semantic-ui-react'
export default class SearcBar extends Component {
	constructor (props) {
		super(props);
		this.state = {term: ''};
	}
	onInputChange(term){
    	this.setState({term});
  	}

  	onFormSubmit(event){
  		event.preventDefault();
  	}
	render(){
		return (
			<Form onSubmit={this.onFormSubmit}>
				<Grid>
		        	<Grid.Column fluid = {true} width={16}>
		        		<Form.Field>
		        			<Input value = {this.state.term}  onChange={event => this.onInputChange(event.target.value)} fluid = {true} action={{ icon: 'search' }} placeholder='Search...' />
		        		</Form.Field>
		        	</Grid.Column>
		        </Grid>
     		</Form>
     	);
	}
}
