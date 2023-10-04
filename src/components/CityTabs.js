
import React from 'react';

const CityTabs = ({ cities, activeCity, onTabClick }) => (
    <div className="city-tabs">
        {cities.map((city) => (
            <div
                key={city}
                className={`tab ${city === activeCity ? 'active' : ''}`}
                onClick={() => onTabClick(city)}
            >
                {city}
            </div>
        ))}
    </div>
);

export default CityTabs;
