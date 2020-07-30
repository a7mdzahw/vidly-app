import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import NavBar from "./components/navbar"
import Movies from "./components/movies";
import Home from "./components/home"
import "bootstrap/dist/css/bootstrap.css";
import MovieDetail from "./components/movieDetail";
import { getMovies } from "./services/fakeMovieService";

class App extends Component {
  state = {
    movies: getMovies(),
  }
  render() {
    const { movies } = this.state
    return (
      <div className="fluid-container" >
        <NavBar />
        <Switch>
          <Route path="/movies/:title" render={(props) => <MovieDetail {...props} movies={movies} />} />
          <Route path="/movies" render={(props) => <Movies {...props} movies={movies} />} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
};


export default App;
