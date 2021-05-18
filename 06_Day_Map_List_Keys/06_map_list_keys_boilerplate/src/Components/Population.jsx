import React from 'react'

const Popu = (props) => {
    return (
        <div className='popu-wrapper'>
            <span>{props.country} </span>
            <span>{props.number}</span>
        </div>
    )
}

export default Popu;