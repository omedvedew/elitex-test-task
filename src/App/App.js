import React, { Component } from 'react';

import '../common/styles/style.css';

import Header from './Header/Header';
import Main from './Main/Main';
import movies from './Main/movies';

class App extends Component {

  state = {
    newMovie: {
      title: '',
      image: '',
      description: '',
      isDataEntered: false,
    },
  };

  handleNewMovieTitle = (e) => {
    this.setState((prevState) => ({
      newMovie: {
        ...prevState.newMovie,
        title: e.target.value,
      }
    }));
  };

  handleNewMovieImage = (e) => {
    this.setState((prevState) => ({
      newMovie: {
        ...prevState.newMovie,
        image: e.target.value,
      }
    })); 
  };

  handleNewMovieDescription = (e) => {
    this.setState((prevState) => ({
      newMovie: {
        ...prevState.newMovie,
        description: e.target.value,
      }
    }));
  };

  onSend = (e) => {
    e.preventDefault();
    let newMovieItem = {};

    if (this.state.newMovie.title !== '') {
      newMovieItem.title = this.state.newMovie.title
    }

    if (this.state.newMovie.image !== '') {
      newMovieItem.image = this.state.newMovie.image
    }

    if (this.state.newMovie.description !== '') {
      newMovieItem.description = this.state.newMovie.description
    }

    newMovieItem.id = movies.length + 1;
    movies.push(newMovieItem);
    console.log(movies);

    this.setState(() => ({
      newMovie: {
        title: '',
        image: '',
        description: '',
        isDataEntered: true,
      }
    }));
  };

  scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  render () {    
    console.log(this.state.newMovie);
    return (
      <>
        <Header
          scrollUp={this.scrollUp}
        />
        <Main
          newMovie={this.state.newMovie}
          handleNewMovieTitle={this.handleNewMovieTitle}
          handleNewMovieImage={this.handleNewMovieImage}
          handleNewMovieDescription={this.handleNewMovieDescription}
          onSend={this.onSend}
          scrollUp={this.scrollUp}
        />
      </>
    )
  }
};

export default App;
