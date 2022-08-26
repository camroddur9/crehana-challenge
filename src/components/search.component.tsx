import React from 'react'
import logoCrehana from './../UI/logos/logo-crehana.svg'

const SearchComponent = ({
    search,
    continentFilter,
    currencyFilter,
    searchInput, 
    handleSearch, 
    currencyArray, 
    continentsArray, 
    currencyInput, 
    handleChangeCurrency, 
    continentInput, 
    handleChangeContinent,
    handleClearFilters
}: any) => {
    return(
        <div className='search'>
            <img src={logoCrehana} alt="logo-creahan" title="logo-crehana" className='logo-crehana'/>
            <div className='filter-container'>
            <input type="text" value={search} ref={searchInput} onChange = {() => {handleSearch()}}></input>
                <div className='currency-dropdown'>
                    <select name="currency" ref={currencyInput} id="currency" onChange={() => {handleChangeCurrency()}}>    
                        <option value="none" selected hidden disabled>Filter by currency:</option>
                    {
                        currencyArray.map((currencies: any) => 
                            <option value={currencies}>{currencies}</option>
                        )
                    }
                    </select>
                </div>
                <div className='continents-dropdown'>
                    <select name="currency" ref={continentInput} id="continent" onChange={() => {handleChangeContinent()}}>    
                        <option value="none" selected hidden disabled>Filter by continent:</option>
                        {
                            continentsArray.map((continents: any) => 
                                <option value={continents}>{continents}</option>
                            )
                        }   
                    </select>
                </div>
                {
                    search !== "" || continentFilter !== "" || currencyFilter !== "" ?
                    <div className="clear-all" onClick={() => {handleClearFilters()}}>
                        Clear all filters
                    </div>:null
                }
            </div>
        </div>
    )
}

export default SearchComponent