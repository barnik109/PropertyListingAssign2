
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import './PropertyPage.css'

const PropertyPage = () => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);

    useEffect(() => {
       
        fetch('/properties.json')
            .then(response => response.json())
            .then(data => {
                const selectedProperty = data.find(item => item.id === parseInt(id, 10));
                setProperty(selectedProperty);
            })
            .catch(error => console.error('Error fetching property:', error));
    }, [id]);

    return (
        <div>
            {property ? (
                <PropertyCard property={property} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default PropertyPage;
