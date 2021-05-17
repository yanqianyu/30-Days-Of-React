import React from 'react';

const NumBlock = (props) => {
    let wrapper = {
        flex: '0 0 12%',
        height: '50px'
    }
    let style = {
        backgroundColor: props.color,
        color: 'white',
        textAlign: 'center'
    }
    return (
        <div className='numblock-wrapper' style={wrapper}>
            <div style={style}>{props.number}</div>
        </div>
    )
}

export default NumBlock;