import React from 'react'
import {countriesData} from '../src/data/countries';

const buttonStyles = {
    backgroundColor: '#61dbfb',
    padding: 10,
    border: 'none',
    borderRadius: 5,
    margin: 3,
    cursor: 'pointer',
    fontSize: 18,
    color: 'white',
  }

  const imgStyles = {
    width: '100px',
    height: '100px'
  }

class Country extends React.Component {
    state = {
        country: {...countriesData[0]}
    }

    changeCountry = () => {
        let len = countriesData.length;
        let idx = Math.floor(Math.random() * (len));
        this.setState({country: {...countriesData[idx]}});
    }

    render () {
        return (
            <div className='country-wrapper'>
                <div className='country-info'>
                    <img src={this.state.country.flag} style={imgStyles}/>
                    <p>{this.state.country.name}</p>
                    <p>{this.state.country.captial}</p>
                    <p>{this.state.country.languages}</p>
                    <p>{this.state.country.population}</p>
                    <p>{this.state.country.currency}</p>
                </div>
                <button onClick={this.changeCountry} style={buttonStyles}>Select Country</button>
            </div>
        )
    }
}

export default Country;