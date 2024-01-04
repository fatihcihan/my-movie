import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class App extends React.Component {

  state = {
    movies: [],
    searchQuery: ""
  }

  deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter(
      m => m.id !== movie.id
    );

    /*  this.setState({     // If we didn't have any data
       movies: newMovieList
     }); */

    this.setState(state => ({     // We take the existing state as a parameter
      movies: newMovieList
    }))
  }

  searchMovie = (event) => {
    // console.log(event.target.value);
    this.setState({ searchQuery: event.target.value })
  }

  render() {
    let filteredMovies = this.state.movies.filter(
      (movie) => {
        return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1  // If not found, it returns -1
      }
    )
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <SearchBar searchMovieProp={this.searchMovie} />
          </div>
        </div>
        <MovieList
          movies={filteredMovies}
          deleteMovieProp={this.deleteMovie} />
      </div>
    );
  }
}

export default App;
