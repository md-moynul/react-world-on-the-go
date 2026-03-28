import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedCountriesFlags, setVisitedCountriesFlags] = useState([]);
    const countries = countriesData.countries;
    const handleVisitedCountries = (country) => {
        console.log('visited clicked', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)

    }
    const handleVisitedCountriesFlags = (country) => {
        const newVisitedCountriesFlag = [...visitedCountriesFlags, country];
        setVisitedCountriesFlags(newVisitedCountriesFlag)

    }

    return (
        <div>
            <h1>Countries are : {countries.length}</h1>
            <h3>Visited Countries : {visitedCountries.length}</h3>
            <h3>Visited Countries Flag :{visitedCountriesFlags.length}</h3>
            <div className='flag-container'>
                {
                    visitedCountriesFlags.map(country => <img src={country.flags.flags.png} alt={country.flags.flags.alt} />)
                }
            </div>
            <ol>
                {visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)}
            </ol>
            <div className='countries'>
                {
                    countries.map(
                        country => <Country
                            key={country.cca3.cca3}
                            country={country}
                            handleVisitedCountries={handleVisitedCountries}
                            handleVisitedCountriesFlags={handleVisitedCountriesFlags}
                        ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;