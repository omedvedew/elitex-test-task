import React from 'react';
import { Route } from 'react-router';
import AddMoviePage from './AddMoviePage';
import MoviesList from './MoviesList';

const Main = ({
    newMovie,
    handleNewMovieTitle,
    handleNewMovieImage,
    handleNewMovieDescription,
    onSend,
    scrollUp,
}) => {
    return (
        <main className="main">
            <Route path="/" exact component={MoviesList}/>
            <Route path="/add-movie-page" render={() => 
                <AddMoviePage
                    newMovie={newMovie}
                    handleNewMovieTitle={handleNewMovieTitle}
                    handleNewMovieImage={handleNewMovieImage}
                    handleNewMovieDescription={handleNewMovieDescription}
                    onSend={onSend}
                    scrollUp={scrollUp}
                />
            }/>
        </main>
    )
};

export default Main;