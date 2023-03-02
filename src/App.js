import './App.css';
import countriesJson from './countries.json';
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState(countriesJson);

  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countries} />
      <Routes>
        <Route path="/:id" element={<CountryDetails countries={countries} />} />
      </Routes>
    </div>
  );
}

export default App;
