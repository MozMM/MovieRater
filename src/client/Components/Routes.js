import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import AllMovieResults from './AllMovieResults'
import MovieDetail from './MovieDetail';

export class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ AllMovieResults } />
        <Route path="/movie/:id" component={ MovieDetail } />
      </Switch>
    )
  }
}

