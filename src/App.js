import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertyList from './components/PropertyList';
import PropertyPage from './pages/PropertyPage';
import CityButtons from './components/CityButtons';
import ShowMoreButton from './components/ShowMoreButton';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeCity, setActiveCity] = useState('New York');
  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    fetch('/properties.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      });
  }, []);

  useEffect(() => {
    setFilteredData(
      activeCity ? data.filter((property) => property.city === activeCity) : data
    );
    setVisibleItems(3);
  }, [activeCity, data]);

  const headingText = 'Featured Listed Property';
  const introText =
    'Real estate can be bought, sold, or rented, and can be a valuable investment opportunity. The value of real estate can be...';

  const handleCityClick = (city) => {
    if (city !== activeCity) {
      setActiveCity(city);
    }
  };

  const handleShowMoreClick = () => {
    if (visibleItems < filteredData.length) {
      setVisibleItems((prevCount) => prevCount + 3);
    }
  };

  const redirectToPropertyPage = (propertyId) => {
    window.location.href = `/property/${propertyId}`;
  };

  return (
    <Router>
      <div className="App" style={{ backgroundColor: '#f5f7fa', color: 'white', minHeight: '100vh' }}>
        <h1 style={{ textAlign: 'center', margin: '20px 0', color: 'black' }}>{headingText}</h1>
        <p style={{ fontSize: '16px', color: '#333', marginLeft: '483px', marginRight: '475px' }}>{introText}</p>

        <CityButtons onCityClick={handleCityClick} activeCity={activeCity} properties={data} />

        <Routes>
          <Route
            path="/"
            element={<PropertyList properties={filteredData.slice(0, visibleItems)} activeCity={activeCity} redirectToPropertyPage={redirectToPropertyPage} />}
          />
          <Route path="/property/:id" element={<PropertyPage />} />
        </Routes>

        {visibleItems < filteredData.length && <ShowMoreButton onClick={handleShowMoreClick} />}
      </div>
    </Router>
  );
};

export default App;
