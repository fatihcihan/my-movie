import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import EditMovie from './EditMovie';
import axios from 'axios';
import AddMovie from './AddMovie';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

  addMovie = async (movie) => {
    await axios.post(`http://localhost:3002/movies/`, movie);
    this.setState(state => ({
      movies: state.movies.concat([movie])
    }))
  }

  editMovie = async (id, updatedMovie) => {
    await axios.put(`http://localhost:3002/movies/${id}`, updatedMovie);
    console.log('2');
    // console.log(id, updatedMovie);
    /*  this.setState(state => ({
       movies: state.movies.concat([movie])
     })) */
  }

  render() {
    let filteredMovies = this.state.movies.filter(
      (movie) => {
        return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1  // If not found, it returns -1
      }
    ).sort((a, b) => {
      return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;  // returns "b" in the first condition and "a" in the second condition
    });


    return (
      <Router>
        <Routes>

          <Route path="/" element={
            <React.Fragment>
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
            </React.Fragment>}>
          </Route>

          <Route path="add" element={
            <AddMovie
              onAddMovie={(movie) => { this.addMovie(movie) }}
            />}>
          </Route>

          <Route path="edit/:id" element={
            <EditMovie
              onEditMovie={(id, movie) => { this.editMovie(id, movie) }}
            />}>
          </Route>

          {/* <Route path="edit/:id" element={<EditMovie />} /> */}                 {/* :id -> dynamic parameter  */}

        </Routes>
      </Router>
    );
  }
}

export default App;
