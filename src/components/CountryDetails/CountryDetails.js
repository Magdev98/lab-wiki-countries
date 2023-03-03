import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  const { code } = useParams();
  const country = countries.find((el) => el.alpha3Code === code);
  const flag = country.alpha2Code.toLowerCase();

  return (
    <div>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${flag}.png/`}
        alt="flag"
      />
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Aera: {country.area} km2</p>
      <p>Borders:</p>
      <ul>
        {country.borders.map((el) => {
          const displayBorderName = countries.find(
            (name) => name.alpha3Code === el
          );
          return (
            <Link key={country._id} to={`/${displayBorderName.alpha3Code}`}>
              <li>{displayBorderName.name.common}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default CountryDetails;
