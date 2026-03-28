import React, { useState } from 'react';
import './country.css'

const Country = ({ country, handleVisitedCountries ,handleVisitedCountriesFlags}) => {
    const [visited, setVisited] = useState(false)
    

    // console.log(country.capital.capital[0]);
    const handleVisit = () => {
        // if(visited){
        //     setVisited(false)
        // }else{
        //     setVisited(true)
        // }
        // setVisited(visited ? false : true)
        setVisited(!visited)
        handleVisitedCountries(country)
    }

    return (
        <div className={`country  ${visited ? 'visited' : 'notVisited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name : {country.name.common}</h3>
            <h4>Capital : {country.capital.capital[0] ? country.capital.capital[0] : 'unknown'}</h4>
            <p>Population : {country.population.population}</p>
            <button onClick={handleVisit}>{visited ? 'Visited' : 'Not Visited'}</button>
            <button onClick={()=>{handleVisitedCountriesFlags(country)}}>Visited flag</button>
        </div>
    );
};

export default Country;