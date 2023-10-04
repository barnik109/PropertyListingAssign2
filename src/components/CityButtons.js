
import React, { useState, useEffect } from 'react';
import './CityButtons.css';

const CityButtons = ({ onCityClick, activeCity, properties }) => {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const uniqueCities = [...new Set(properties.map(property => property.city))];
        setCities(uniqueCities);
    }, [properties]);

    return (
        <div className="citybuttons">
            {cities.map(city => (
                <button
                    key={city}
                    className={city === activeCity ? 'active' : ''}
                    onClick={() => onCityClick(city)}
                >
                    {city}
                </button>
            ))}
        </div>
    );
};

export default CityButtons;
