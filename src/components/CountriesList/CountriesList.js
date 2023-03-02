import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <div>
      {countries.map((country) => {
        const flag = country.alpha2Code.toLowerCase();
        return (
          <Link key={country.alpha3Code} to={`/${country.alpha3Code}`}>
            <p>{country.name.common}</p>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${flag}.png/`}
              alt="flag"
            />
          </Link>
        );
      })}
    </div>
  );
};

export default CountriesList;
