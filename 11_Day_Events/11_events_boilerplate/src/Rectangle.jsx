import React from 'react'

const wrapperStyle = {
    width: '500px',
    height: '500px'
}

class Rectangle extends React.Component {
    state = {
        style: {
            transform: 'translate(250px, 250px)'
        }
    }

    changePos = () => {
        let x = Math.round(Math.random()*(200)-100);
        let y = Math.round(Math.random()*(200)-100);
        this.setState({
            style: {
                transform: `translate(${250 + x}px, ${250 + y}px)`
            }
        })
    }

    render() {
        return (
            <div className='rect-wrapper' style={wrapperStyle}>
                <div onMouseEnter={this.changePos} style={this.state.style}>30 Day Of React</div>
            </div>
        )
    }
}

export default Rectangle;