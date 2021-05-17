import React from 'react'

import css_logo from '../images/css_logo.png';
import html_logo from '../images/html_logo.png';
import react_logo from '../images/react_logo.png';

const style = {
    display: 'flex',
    flexDirection: 'row',
    height: '100px'
}

const Images = () => (
    <div className='images-wrapper' style={style}>
        <img src={css_logo}/>
        <img src={html_logo}/>
        <img src={react_logo}/>
    </div>
)


export default Images;