import React from 'react'
import ReactDOM from 'react-dom'

import NumBlock from '../src/Components/NumBlock';

// importing data

import { countriesData } from './data/countries'
import { tenMostHighestPopulations } from './data/ten_most_highest_populations'

const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]

// Country component
const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  )
}

// countries component
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => (
    <Country key={country.name} country={country} />
  ))
  return <div>{countryList}</div>
}

function isPrime(index) {
  if (index <= 1) {
    return false;
  }
  if (index === 2) {
    return true;
  }
  for(let i = 2; i * i <= index; i++) {
    if (index % i === 0) {
      return false;
    }
  }
  return true;
}

function getColor(index) {
  if (isPrime(index)) {
    return 'red';
  }
  else if (index % 2 === 0) {
    return 'green';
  }
  else {
    return 'yellow';
  }
}

let blockStyle = {
  width: '96%',
  display: 'flex',
  flexDirecttion: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
}
const Block = () => {
  let arr = new Array(32).fill(0);
  const block = arr.map((e, index) => 
    <NumBlock color={getColor(index)} number={index} key={index}></NumBlock>
  )
  return (
    <div className='block' style={blockStyle}>
      {block}
    </div>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  return (
    <div className='app'>
      <div>
        <h1>Countries List</h1>
        <Countries countries={countries} />
        <Block/>
      </div>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
