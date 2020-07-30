import React, { Component } from "react";
import MovieTable from "./movieTable"
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService"
import Pagination from "./common/pagination";
import Filter from "./common/filter"
import paginate from "./utils/paginate";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentGenre: {},
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" }
  };

  componentDidMount() {
    const genres = [{ name: "allGenres", }, ...getGenres()]
    this.setState({ movies: getMovies(), genres })
  }


  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m !== movie);
    this.setState({ movies });
    if (movies.length < (this.state.currentPage * 4 - 3)) this.setState({ currentPage: this.state.currentPage - 1 })
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

  handleFilter = (genre) => {
    this.setState({ currentGenre: genre, currentPage: 1 })
  }


  //main Render
  render() {
    const { currentPage, currentGenre, movies: allMovies, genres, sortColumn } = this.state;
    const filteredMovies = currentGenre && currentGenre._id ? allMovies.filter(movie => movie.genre._id === currentGenre._id) : allMovies;
    const movies = paginate(filteredMovies, currentPage, 4);

    return (
      <main className="container row mt-3">
        <div className="col-md-3">
          <Filter genres={genres} filterMovies={this.handleFilter} currentGenre={currentGenre} />
        </div>
        <div className="col-md-9">
          <p>There Are {filteredMovies.length ? filteredMovies.length : "No"} Movies in {currentGenre._id ? `${currentGenre.name} Genre` : "DB"} </p>
          <MovieTable movies={movies} onLike={this.handleLike} onDelete={this.handleDelete} />
          <Pagination
            totalMovies={filteredMovies.length}
            pageSize={4}
            currentPage={currentPage}
            paginate={this.handlePagination}
          />
        </div>
      </main>
    );
  }
}

export default Movies;
