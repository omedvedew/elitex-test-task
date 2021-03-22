import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MoviesListItem extends Component {
    render () {

        const {
            title,
            image,
            description,
        } = this.props;

        return (
            <>
                <h2 className="m-m-i_title">{title}</h2>
                <div className="m-m-i_image" style={{backgroundImage: `url(${image})`}}></div>
                <p className="m-m-i_description">{description}</p>
            </>
        )
    }
};

MoviesListItem.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
};

MoviesListItem.defaultProps = {
    title: 'No movie title',
    image: '/elitex-test-task/images/movies-lib-logo.png',
    description: 'No description',
};

export default MoviesListItem;