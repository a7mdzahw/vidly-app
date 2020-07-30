import React from 'react';


const MovieDetail = ({ movies, match }) => {

    const movie = movies.find(movie => movie.title === match.params.title)
    console.log(movie)
    return (
        <div className="row container m-5 justify-content-center">
            <div className="col">
                <div className="card">
                    <div className="card-header"><h4>{movie.title}</h4></div>
                    <div className="card-body">
                        <li>{movie.numberInStock}</li>
                        <li><strong>{movie.dailyRentalRate}</strong></li>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MovieDetail;