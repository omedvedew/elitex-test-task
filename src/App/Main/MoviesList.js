import React from 'react';
import movies from './movies';
import MoviesListItem from './MoviesListItem';

const MoviesList = () => {
    return (
        <div className="main__movies-list">
            {
                movies.map(({id, title, image, description}) => (
                    <div className="main__movies-list__item" key={id}>
                        <MoviesListItem
                            title={title}
                            image={image}
                            description={description}
                        />
                    </div>
                ))
            }
        </div>
    )
};

export default MoviesList;