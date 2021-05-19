import React from 'react'
import axios from 'axios'

class Cat extends React.Component {
    state = {
        data: []
    }
    componentDidMount() {
        this.getData();
    }

    getData = async() => {
        const url = 'https://api.thecatapi.com/v1/breeds';
        try {
            const resp = await axios.get(url);
            const data = await resp.data;
            this.setState({
                data
            })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div className='cat-wrapper'>
                {this.state.data.map((e) => (
                    <p>{e.toString()}</p>
                ))}            
            </div>
        )
    }
}

export default Cat;