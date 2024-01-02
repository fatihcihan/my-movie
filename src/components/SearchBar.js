import React from 'react';

class SearchBar extends React.Component {

    state = {
        searchQuery: ""
    }

    handleFormSubmit = (event) => {
        event.preventDefault();     // we stopped the default behavior
    }

    render() {
        console.log(typeof handleFormSubmit);
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className='form-row mb-5'>
                    <div className='col-12'>
                        <input
                            onChange={(event) => this.setState({ searchQuery: event.target.value })}
                            type="text" className="form-control" placeholder="Search a movie"
                            value={this.state.searchQuery} />
                    </div>
                </div>
            </form>
        );
    }
}


export default SearchBar; 