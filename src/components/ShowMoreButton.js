
import React from 'react';
import './ShowMoreButton.css';

const ShowMoreButton = ({ onClick }) => {
    return (
        <div className="show-more-container">
            <button className="show-more-button" onClick={onClick}>
                Show More
            </button>
        </div>
    );
};

export default ShowMoreButton;
