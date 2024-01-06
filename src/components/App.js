import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios';
import AddMovie from './AddMovie';

class App extends React.Component {

  state = {
    movies: [],
    searchQuery: ""
  }

  /* async componentDidMount() {
    const baseURL = "http://localhost:3002/movies";
    const response = await fetch(baseURL);  // Fetch is promise-based and returns a promise to us
    const data = await response.json();
    this.setState({ movies: data });
  } */

  async componentDidMount() {
    const response = await axios.get("http://localhost:3002/movies/")
    this.setState({ movies: response.data });
  }

  // deleteMovie = (movie) => {
  //   const newMovieList = this.state.movies.filter(
  //     m => m.id !== movie.id
  //   );

  //   /*  this.setState({     // If we didn't have any data
  //      movies: newMovieList
  //    }); */

  //   this.setState(state => ({     // We take the existing state as a parameter
  //     movies: newMovieList
  //   }))
  // }

  /* Fetch api */
  /* deleteMovie = async (movie) => {
    const baseURL = `http://localhost:3002/movies/${movie.id}`;
    await fetch(baseURL, {
      method: "DELETE"
    });

    const newMovieList = this.state.movies.filter(
      m => m.id !== movie.id
    );

    this.setState(state => ({     // We take the existing state as a parameter
      movies: newMovieList
    }))
  } */

  /* Axios */
  deleteMovie = async (movie) => {
    axios.delete(`http://localhost:3002/movies/${movie.id}`);
    const newMovieList = this.state.movies.filter(
      m => m.id !== movie.id
    );

    this.setState(state => ({     // We take the existing state as a parameter
      movies: newMovieList
    }))
  }

  searchMovie = (event) => {
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
            <AddMovie />

      </div>
    );
  }
}

export default App;
