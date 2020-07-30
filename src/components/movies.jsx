import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import paginate from "./utils/paginate";

class Movies extends Component {
  state = {
    movies: getMovies(),
    currentPage: 1,
  };

  delete = (movie) => {
    const movies = this.state.movies.filter((m) => m !== movie);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePagination = (page) => {
    this.setState({ currentPage: page });
  };
  //main Render
  render() {
    if (this.state.movies.length === 0) {
      return <p className="mt-2">There are No Movies !!</p>;
    }

    const movies = paginate(this.state.movies, this.state.currentPage, 4);
    return (
      <main className="container">
        <p>There Are {this.state.movies.length} Movies in DB</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    likeToggle={() => this.handleLike(movie)}
                    liked={movie.liked}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.delete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          totalMovies={this.state.movies.length}
          pageSize={4}
          currentPage={this.state.currentPage}
          paginate={this.handlePagination}
        />
      </main>
    );
  }
}

export default Movies;
