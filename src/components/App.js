import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class App extends React.Component {

  state = {
    movies: [
      {
        "id": 1,
        "name": "The Flash",
        "rating": 8.3,
        "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
        "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"
      },

      {
        "id": 2,
        "name": "Interstellar",
        "rating": 6.8,
        "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
        "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
      },

      {
        "id": 3,
        "name": "Arrow",
        "rating": 7.9,
        "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
        "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg"
      }
    ],
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
        return movie.name.indexOf(this.state.searchQuery) !== -1  // If not found, it returns -1
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
