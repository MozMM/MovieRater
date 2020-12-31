import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header'
import AllMovieResults from './AllMovieResults';
import MovieDetail from './MovieDetail';
import NotFoundPage from './NotFoundPage';

export class Routes extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={ AllMovieResults } />
          <Route path="/movie/:id" component={ MovieDetail } />
          <Route path="*" component={ NotFoundPage } />
        </Switch>
      </div>
    )
  }
}

