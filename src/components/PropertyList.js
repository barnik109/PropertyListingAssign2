import React from 'react';
import PropertyCard from './PropertyCard';
import './PropertyList.css';

const PropertyList = ({ properties, activeCity, redirectToPropertyPage }) => {
  
    const filteredProperties = activeCity
        ? properties.filter((property) => property.city === activeCity)
        : properties;

    return (
        <div className="property-list">
            {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} redirectToPropertyPage={redirectToPropertyPage} isPopular={property.price > 250} />
            ))}
        </div>
    );
};

export default PropertyList;
