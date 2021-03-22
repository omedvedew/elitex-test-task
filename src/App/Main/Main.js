import React from 'react';
import { Route } from 'react-router';
import MoviesList from './MoviesList';

const Main = () => {
    return (
        <main className="main">
            <Route path="/" exact component={MoviesList}/>
        </main>
    )
};

export default Main;