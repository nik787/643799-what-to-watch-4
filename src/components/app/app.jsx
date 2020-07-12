import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {propTypesMovie} from "../../mocks/films.js";


export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: `main`,
      currentMovie: this.props.promoFilm,
    };

    this.handleMovieClick = this.handleMovieClick.bind(this);
  }


  _renderApp() {
    const {promoFilm, films} = this.props;
    const {currentPage, currentMovie} = this.state;

    if (currentPage === `main`) {
      return (
        <Main
          promoSettings={promoFilm}
          films={films}
          openButtonClick={this.handleMovieClick} />
      );
    }

    if (currentPage === `film`) {
      return (
        <MoviePage
          movieCard={currentMovie} />
      );
    }

    return null;
  }

  handleMovieClick(movie) {
    this.setState({
      currentPage: `film`,
      currentMovie: movie,
    });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film">
            <MoviePage
              movieCard={this.state.currentMovie} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  promoFilm: PropTypes.shape(propTypesMovie).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape(propTypesMovie).isRequired).isRequired
};
