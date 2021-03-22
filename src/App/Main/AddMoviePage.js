import React from 'react';
import { Link } from 'react-router-dom';

const AddMoviePage = ({
    newMovie,
    handleNewMovieTitle,
    handleNewMovieImage,
    handleNewMovieDescription,
    onSend,
    scrollUp,
}) => {
    const renderMessage = () => {
        return (
            <div className="main__add-movie-page__message">
                <p>Thanks for adding a new movie. You will find it in <Link to="/" onClick={scrollUp}>movies list page</Link>. If needed you can add as much, as you want. Try it up!</p>
            </div>
        )
    }
    return (
        <div className="main__add-movie-page">
            <form className="main__add-movie-page__form" onSubmit={onSend}>
                <h2 className="m-a-f_title">Add new movie here!</h2>
                <div className="m-a-f__input-box">
                    <h3 className="m-a-f__input-box_title">Movie title</h3>
                    <input className="m-a-f__input-box_input" type="text" placeholder="Enter movie title" value={newMovie.title} onChange={handleNewMovieTitle}/>
                </div>
                <div className="m-a-f__input-box">
                    <h3 className="m-a-f__input-box_title">Movie image url</h3>
                    <input className="m-a-f__input-box_input" type="text" placeholder="Enter movie image url" value={newMovie.image} onChange={handleNewMovieImage}/>
                </div>
                <div className="m-a-f__input-box">
                    <h3 className="m-a-f__input-box_title">Movie description</h3>
                    <input className="m-a-f__input-box_input" type="text" placeholder="Enter movie description" value={newMovie.description} onChange={handleNewMovieDescription}/>
                </div>
                <button className="m-a-f__input-box_submit-btn" type="submit">Submit</button>
            </form>
            {
                newMovie.isDataEntered !== false ? renderMessage() : console.log("new movie data is not entered")
            }
        </div>
    )
};

export default AddMoviePage;