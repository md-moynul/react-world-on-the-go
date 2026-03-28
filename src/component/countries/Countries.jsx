import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const [visitedCountries , setVisitedCountries] = useState([])
    const countries = countriesData.countries;
    const handleVisitedCountries = (country) =>{
        console.log('visited clicked',country);
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries)
        
    }

    return (
        <div>
            <h1>Countries are : {countries.length}</h1>
            <h1>Visited Countries : {visitedCountries.length}</h1>
            <div className='countries'>
                {
                    countries.map(
                        country => <Country
                            key={country.cca3.cca3}
                            country={country}
                            handleVisitedCountries={handleVisitedCountries}
                        ></Country>)
                }
            </div>

        </div>
    );
    };

    export default Countries;