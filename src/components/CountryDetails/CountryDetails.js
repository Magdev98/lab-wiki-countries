import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  const { code } = useParams();
  const country = countries.find((el) => el.alpha3Code === code);
  const flag = country.alpha2Code.toLowerCase();

  return (
    <div className="col-7">
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${flag}.png/`}
        alt="flag"
      />
      <h1 key={country._id}>{country.name.common}</h1>
      <table className="table">
        <thead>
          <tr>
            <td style={{ width: '30%' }}>Capital: {country.capital}</td>
          </tr>
          <tr>
            <td>Aera: {country.area} km2</td>
          </tr>
          <tbody>
            <tr>
              <td>Borders:</td>
              <td>
                <ul>
                  {country.borders.map((el) => {
                    const displayBorderName = countries.find(
                      (name) => name.alpha3Code === el
                    );
                    return (
                      <Link to={`/${displayBorderName.alpha3Code}`}>
                        <li style={{ listStyleType: 'none' }}>
                          {displayBorderName.name.common}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </thead>
      </table>
    </div>
  );
};

export default CountryDetails;
