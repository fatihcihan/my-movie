import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

class EditMovie extends React.Component {

    state = {
        name: "",
        rating: "",
        overview: "",
        imageUrl: ""
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        // navigate('/');
    }

    async componentDidMount() {
        // await axios.get(`http://localhost:3002/movies/${id}`);
    }

    render() {
        console.log(this.state);
        return (

            <div className="container" >
                <form className="mt-5" onSubmit={this.handleFormSubmit}>
                    <input className="form-control" id="disabledInput" type="text" placeholder="Edit The Form To Update A Movie.." disabled />
                    <div className="form-row">
                        <div className="form-group col-md-10">
                            <label htmlFor="inputName">Name</label>
                            <input type="text"
                                className="form-control"
                                name="name" />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputRating">Rating</label>
                            <input
                                type="text"
                                className="form-control"
                                name="rating" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputImage">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                name="imageURL" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="overviewTextarea">Overview</label>
                            <textarea
                                className="form-control"
                                name="overview" rows="5"></textarea>
                        </div>
                    </div>
                    <input type="submit"
                        className="btn btn-danger btn-block"
                        value="Add Movie" />
                </form>
            </div >
        );
    }
}


export default EditMovie;