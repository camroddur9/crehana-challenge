import React from 'react'

interface Props{
    data: any,
    handleCountryToShow: any
}

interface State{
}

class Countries extends React.Component<Props,State>{
    constructor(props: Props){
        super(props);
        this.state = {
        }
    }

    handleCreateCountryStructure = () => {
        return(
            <div className='countries-container'>
                {
                    this.props.data.map((country: any) => 
                        <div className='countries-individual-container' onClick = {() => {this.props.handleCountryToShow(country)}}>
                            <div className='country-flag'>{country.emoji}</div>
                            <div className='country-name'>{country.name}</div>
                        </div>
                    )
                }
            </div>
        )
    }

    render(): React.ReactNode {
        return(
            <div className="countries-main">
                {
                    this.handleCreateCountryStructure()
                }
            </div>
        )
    }
}

export default Countries