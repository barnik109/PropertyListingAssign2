import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBath, faHouse, faBed, faArrowsUpDownLeftRight } from '@fortawesome/free-solid-svg-icons';

const PropertyCard = ({ property, redirectToPropertyPage, isPopular }) => (
    <div className="property-card">
        <button className="action-button rent-button">For Rent</button>

        {isPopular && <div className="popular-label">Popular</div>}

        <img src={property.image} alt={property.title} />

        <div className="property-details">
            <p id="postcode">{property.postcode}</p>
            <h2 id="address">{property.address}</h2>
            <div className="property-info">
                <p className='rooms'><span className='rooms-icon'><FontAwesomeIcon icon={faHouse} /></span>{property.rooms} Room</p>
                <p className='beds'><span className='beds-icon'><FontAwesomeIcon icon={faBed} /></span>{property.beds} Beds</p>
                <p className='bath'><span className='bath-icon'><FontAwesomeIcon icon={faBath} /></span>{property.baths} Bath</p>
                <p className='psize'><span className='psize-icon'><FontAwesomeIcon icon={faArrowsUpDownLeftRight} /></span>{property.squareFootage} sft</p>
            </div>
            <div className="price-section">
                <p id='price'>${property.price}<span id='month'>/month</span></p>
                <button className="read-more-button" onClick={() => redirectToPropertyPage(property.id)}>Read More</button>
            </div>
        </div>

        <button className="action-button love-react-button"><FontAwesomeIcon icon={faHeart} style={{ color: "#437ee5" }} /></button>
    </div>
);

export default PropertyCard;
