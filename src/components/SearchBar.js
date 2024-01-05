import React from 'react';

class SearchBar extends React.Component {

    handleFormSubmit = (event) => {
        event.preventDefault();     // we stopped the default behavior
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className='row mb-5'>
                    <div className='col-9'>
                        <input
                            onChange={this.props.searchMovieProp}
                            type="text" className="form-control" placeholder="Search a movie"
                        />
                    </div>
                    <div className='col-3'>
                        <button type="button"
                            className="btn btn-danger" style={{ float: 'right' }}>Add Movie</button>
                    </div>
                </div>
            </form>
        );
    }
}


export default SearchBar; 