import React, {Component} from 'react';

class SearchForm extends Component {    // setting up the constructor
    constructor() {
        super();
        this.state = { searchTerm: '' }   // initializing state
    }
    // set up a method that will fire an onChange event that passes
    // the search term every time there is an input change 
    onInputChange(searchTerm) {
        // use this.setState to signal the state has changed and
        // triggers a re-render of the page.
        this.setState({searchTerm});
        // use onTermChange to pass the handleTermChange property
        // from parent (app.js) to child (searchbar.js)
        this.props.onTermChange(searchTerm);
    }
    render() {
        return (
            <div className="search">
                <h3></h3>
                <input placeholder="Enter your search here"           onChange={e => this.onInputChange(e.target.value)} />
            </div>
        );
    }
}

export default SearchForm;