import React, { Component } from 'react';
import { Header, Grid, Image, Table } from 'semantic-ui-react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
class WeatherList extends Component {
  renderWeather(cityData){
    const temps = cityData.list.map(weather => weather.main.temp)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    return (
      <Table.Row key={cityData.city.name}>
         <Table.Cell>
            <Header as='h3'>{cityData.city.name}</Header>
         </Table.Cell>
         <Table.Cell>
            <Chart data={temps} color="orange" />
         </Table.Cell>
         <Table.Cell>
            <Chart data={pressures} color="green" />
         </Table.Cell>
         <Table.Cell>
            <Chart data={humidities} color="black" />
         </Table.Cell>
      </Table.Row>
    )
  }
  render(){
    return(

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell><Header as='h2'>City</Header></Table.HeaderCell>
              <Table.HeaderCell><Header as='h2'>Temperature</Header></Table.HeaderCell>
              <Table.HeaderCell><Header as='h2'>Pressure</Header></Table.HeaderCell>
              <Table.HeaderCell><Header as='h2'>Humidity</Header></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.weather.map(this.renderWeather)}
          </Table.Body>
        </Table>
    

    );
  }
}
function mapStateToProps ({weather}){
  return {weather};
}

export default connect (mapStateToProps)(WeatherList);
