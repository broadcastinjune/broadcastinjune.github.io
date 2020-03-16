import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import GifResults from './components/GifResults';
import Logo from './images/Giphy-Icon.png';
import request from 'superagent';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      gifs: []
    }
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  // make the API call within the handleTermChange because
  // it's receiving the searchTerm from our SearchBar
  handleTermChange = (searchTerm) => {
    // add a 'regex' to replace any spaces used in the search bar
    // with + when passing the search terms to the Giphy API
    // adding .replace(/\s/g, '+') after using 'searchTerm'
    const url=`https://api.giphy.com/v1/gifs/search?q=${searchTerm.replace(/\s/g, '+')}&api_key=rbs04C2wT5tspQzYZ54fuwQlrTx4GovE`;
    request.get(url, (err, res) => {
      this.setState({gifs: res.body.data})
    });
  }
  render() {
    return (
      <div>
        <h3 id='title'>Giphy Search App</h3>
        {/* <img id="gifLogo" alt="giphyIcon" src={Logo} /> */}
        < SearchForm onTermChange={this.handleTermChange} />     
            {/* Rendering the search bar with event handler */}
        < GifResults gifs={this.state.gifs} />
      </div>
    )
  }
}

export default App;
