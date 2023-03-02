import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  const { id } = useParams();
  const country = countries.find((el) => el.alpha3Code === id);
  const flag = country.alpha2Code.toLowerCase();

  return (
    <div>
      <Link key={country.alpha3Code} to={`/${country.alpha3Code}`} />
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${flag}.png/`}
        alt="flag"
      />
      <h1>{country.name.common}</h1>
      <p>{country.capital}</p>
      <p>{country.aera}</p>

      {country.borders.map((el) => {
        const displayBorderName = countries.find(
          (name) => name.alpha3Code === el
        );
        return <p>{displayBorderName.name.common}</p>;
      })}
    </div>
  );
};

export default CountryDetails;
