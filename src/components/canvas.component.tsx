import React, { useState, useReducer, useMemo, useRef, useCallback } from 'react'
import { useQuery, gql } from "@apollo/client";
import SearchComponent from './search.component';
import Countries from './countries.component';
import Show from './show.component';

const QUERY = gql
    `query {
    countries {
        code
        name
        phone
        emoji
        emojiU
        capital
        currency
        languages {
            code
            name
        }
        continent {
            code
            name
        }
    }
    }`

const Canvas = () => {

    const { data, loading, error } = useQuery(QUERY);
    const [Search, setSearch] = useState('')
    const [continentFiter, setContinentFilter] = useState('')
    const [currencyFilter, setCurremcyFilter] = useState('')
    const [countryToShow , setCountryToShow] = useState('')
    const searchInput = useRef<HTMLInputElement>(null)
    const currencyInput = useRef<HTMLSelectElement>(null)
    const continentInput = useRef<HTMLSelectElement>(null)

    const handleSearch = useCallback(() => 
        {
            if(searchInput.current != null ){
                setSearch(searchInput.current.value)
            }
        }, []
    )

    const handleSelectCurrency = useCallback(() => {
        if(currencyInput.current != null){
            setCurremcyFilter(currencyInput.current.value)
        }
    }, [])

    const handleSelectContinent= useCallback(() => {
        if(continentInput.current != null){
            setContinentFilter(continentInput.current.value)
        }
    }, [])

    const handleClearFilters = () => {
        setSearch('')
        setContinentFilter('')
        setCurremcyFilter('')
        if(currencyInput.current != null){
            currencyInput.current.value = "none"
        }
        if(continentInput.current != null){
            continentInput.current.value = "none"
        }
    }

    if (loading) return <div>"Loading..."</div>;
    if (error) return <pre>{error.message}</pre>

    const filteredCountries = 
    data.countries.filter((country: any) => {
        return (country.name.toLowerCase().includes(Search.toLowerCase()) 
        && country.continent.name.toLowerCase().includes(continentFiter.toLowerCase()) 
        && country.currency !== null ? country.currency.toLowerCase().includes(currencyFilter.toLowerCase()):"")
    })

    let currencyArray: Array<string> = []

    filteredCountries.forEach((country: any) => {
        if(!currencyArray.includes(country.currency)){
            currencyArray.push(country.currency)
        }
    });

    let continentsArray: Array<string> = []

    filteredCountries.forEach((country: any) => {
        if(!continentsArray.includes(country.continent.name)){
            continentsArray.push(country.continent.name)
        }
    });

    const handleCountryToShow = (payload: any) => {
        setCountryToShow(payload)
    }

    return (
        <div className='canvas-main'>
            <SearchComponent
                search = {Search}
                continentFilter = {continentFiter}
                currencyFilter = {currencyFilter}
                searchInput = {searchInput}
                handleSearch = {handleSearch}
                currencyArray = {currencyArray}
                continentsArray = {continentsArray}
                currencyInput = {currencyInput}
                handleChangeCurrency = {handleSelectCurrency}
                continentInput = {continentInput}
                handleChangeContinent = {handleSelectContinent}
                handleClearFilters = {handleClearFilters}
            />
            <Countries
                data = {filteredCountries}
                handleCountryToShow = {handleCountryToShow}
            />
            <Show
                countryToShow={countryToShow}
                handleCountryToShow = {handleCountryToShow}
            />
        </div>
    )
}

export default Canvas