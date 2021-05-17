import React from 'react'
import asabenehImage from './images/asabeneh.jpg'

// import css_logo from './images/css_logo.png';
const imgStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%'
}

const wrapperStyle = {
    color: 'white',
}

const spanStyle = {
    background: 'green',
    fontSize: '11px',
    fontWeight: 'bold',
    padding: '5px 7px',
    border: '1px solid #999',
    borderRadius: '30px',
    margin: '1px',
    lineHeight: '30px'
}

const userCard = (
    <div className='card-wrapper'>
        <img src={asabenehImage} style={imgStyle}/>
        <p>Asabeneh Yetayeh</p>
        <p>Senior Developer, Finland</p>
        <h3>Skills</h3>
        <div className='skill-wrapper' style={wrapperStyle}>
            <span style={spanStyle}>HTML</span>
            <span style={spanStyle}>CSS</span>
            <span style={spanStyle}>Sass</span>
        </div>
    </div>
)

export default userCard;