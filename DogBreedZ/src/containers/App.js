import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SeachBox';
import Scroll from '../components/Scroll';
import { dogs } from '../dogs';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      dogs: dogs,
      searchfield: ''
    }
  }

  // componentDidMount() {
  //   fetch()
  //   .then(response=> response.json())
  //   .then(dogs => {this.setState({dogs: dogs})})
  // }

  onSearchChange = (event) => {
    console.log(event);
    this.setState({ searchfield: event.target.value });
  }
  render() {
    const { dogs, searchfield } = this.state;
    const filteredDogs = dogs.filter(dog => {
      return dog.country.toLowerCase().includes(searchfield.toLowerCase());
    })
    console.log(filteredDogs);
    return (
      <div className='tc'>
        <h1 className='f1'>Dog breedZ</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList dogs={filteredDogs} />
        </Scroll>
      </div>
    );
  }

}

export default App;