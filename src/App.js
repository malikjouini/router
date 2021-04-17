import React, { useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import MovieCard from './components/MovieCard'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import ShowMovie from './components/ShowMovie';

const App = (props) => {
  const [state, setState] = useState({
    Card: Card,
    searchfield: ''
  })
  const onSearchChange = (e) => {
    setState({ searchfield: e.target.value })
  }
  const { searchfield } = state;
  const filteredMovies = Card.filter(movie => {
    return movie.Name.toLowerCase().includes(searchfield.toLowerCase());
  })
  return (
    <div className="App">
      <Filter searchChange={onSearchChange} />
      <Router>
        <Route path="/showmovie/:id" render={({ match }) =>  <ShowMovie {...Card.find(m=>m.id==match.params.id)}/> }/>

        <Route exact path="/">
          <MovieList Card={filteredMovies} />
        </Route>
      </Router>

    </div>
  )
}

export default App;
