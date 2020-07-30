import React, { Component } from 'react';
import Like from "./common/like";
import { Link } from 'react-router-dom'
import TableHeader from './common/tableHeader';

class MovieTable extends Component {
    columns = [
        { path: 'title', label: 'Title' },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        { key: 'like' },
        { key: 'delete' },
    ]

    render() {
        const { movies, onLike, onDelete } = this.props;
        return (
            <table className="table">
                <TableHeader columns={this.columns} />
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie._id}>
                            <td>
                                <Link to={`/movies/${movie.title}`} >{movie.title}</Link>
                            </td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <Like
                                    likeToggle={() => onLike(movie)}
                                    liked={movie.liked}
                                />
                            </td>
                            <td>
                                <button
                                    onClick={() => onDelete(movie)}
                                    className="btn btn-danger btn-sm"
                                >
                                    Delete
              </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table >);
    }
};

export default MovieTable;