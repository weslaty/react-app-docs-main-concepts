import React from 'react'

export default class MapRender extends React.Component {
    constructor(props) {
        super(props)
        console.info(props.numbers)
        this.state = {
            numbers: props.numbers
        }
        console.info('state = ' + this.state)
    }

    render() {
        return (
            <ul>{this.state.numbers.map((number, index) => <li key={index}>{index} -> {number}</li>)}</ul>
        )
    }
}