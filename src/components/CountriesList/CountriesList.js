import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      {countries.map((country) => {
        const flag = country.alpha2Code.toLowerCase();
        return (
          <div key={country._id} className="list-group">
            <Link
              className="list-group-item list-group-item-action"
              to={`/${country.alpha3Code}`}
            >
              <p>{country.name.common}</p>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${flag}.png/`}
                alt="flag"
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CountriesList;
