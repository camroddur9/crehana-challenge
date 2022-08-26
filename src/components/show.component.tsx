import React from 'react'

import close from './../UI/icons/close.svg'

interface Props {
    countryToShow: any,
    handleCountryToShow: any
}

interface State {
    languages: string
}

class Show extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            languages: ''
        }
    }

    render(): React.ReactNode {
        return(
            <div className={this.props.countryToShow ? "country-to-show fade-in":"caountry-to-show fade-out"}>
                {
                    this.props.countryToShow ?
                    <div className='country-container'>
                        <img src={close} className={'close-btn'} alt="close-btn" title="close-btn" onClick={() => {this.props.handleCountryToShow('')}}/>
                        <div className='country-show-flag'>{this.props.countryToShow.emoji}</div>
                        <div className='country-information-container'>
                            <div>
                                <p className='title'>Code: </p> 
                                {this.props.countryToShow.code}
                            </div>
                            <div>
                                <p className='title'>Name: </p> 
                                {this.props.countryToShow.name}
                            </div>
                            <div>
                                <p className='title'>Capital: </p> 
                                {this.props.countryToShow.capital}
                            </div>
                            <div>
                                <p className='title'>Continent: </p> 
                                {this.props.countryToShow.continent.name}
                            </div>
                            <div>
                                <p className='title'>Currency: </p>  
                                {this.props.countryToShow.currency.replaceAll(",",", ")}
                            </div>
                            <div>
                                <p className='title'>Language: </p> 
                                {
                                    this.props.countryToShow.languages.map((language: any) => 
                                        <li>{language.name}</li>
                                    )
                                }
                            </div>
                            
                        </div>
                    </div>:null
                }
            </div>
        )
    }
}

export default Show