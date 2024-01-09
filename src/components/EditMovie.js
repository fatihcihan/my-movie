import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditMovie = () => {

    /*   state = {
          name: "",
          rating: "",
          overview: "",
          imageUrl: ""
      } */

    const [movie, setMovie] = useState({
        name: "",
        rating: "",
        overview: "",
        imageURL: ""
    });

    console.log(movie);

    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const getMovie = async () => {
            const response = await axios.get(`http://localhost:3002/movies/${id}`);
            console.log(response, 'res');
            const movie = response.data;
            console.log(movie, 'movie');

            setMovie({
                name: movie.name,
                rating: movie.rating,
                overview: movie.overview,
                imageURL: movie.imageURL,
            })
        };
        getMovie();
    }, [id])

    // onSubmit={this.handleFormSubmit}

    /*  handleFormSubmit = (e) => {
         e.preventDefault();
         // navigate('/');
     } */

    const onInputChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
    }


    return (

        <div className="container" >
            <form className="mt-5">
                <input className="form-control" id="disabledInput" type="text" placeholder="Edit The Form To Update A Movie.." disabled />
                <div className="form-row">
                    <div className="form-group col-md-10">
                        <label htmlFor="inputName">Name</label>
                        <input type="text"
                            className="form-control"
                            name="name"
                            value={movie.name}
                            onChange={onInputChange} />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputRating">Rating</label>
                        <input
                            type="text"
                            className="form-control"
                            name="rating"
                            value={movie.rating}
                            onChange={onInputChange} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Image URL</label>
                        <input
                            type="text"
                            className="form-control"
                            name="imageURL"
                            value={movie.imageURL}
                            onChange={onInputChange} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="overviewTextarea">Overview</label>
                        <textarea
                            className="form-control"
                            name="overview" rows="5"
                            value={movie.overview}
                            onChange={onInputChange}></textarea>
                    </div>
                </div>
                <input type="submit"
                    className="btn btn-danger btn-block"
                    value="Add Movie" />
            </form>
        </div >
    );
}


export default EditMovie;