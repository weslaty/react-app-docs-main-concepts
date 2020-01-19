import React from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

export default class TemperatureInput extends React.Component {
    /*constructor(props) {
        super(props)
        //this.state = { temperature: '' }
    }*/

    handleChange = (event) => {
        //this.setState({ temperature: event.target.value })
        this.props.onTemperatureChange(event.target.value)
    }

    render() {
        const temperature = this.props.temperature
        const scale = this.props.scale
        return (
            <fieldset>
                <legend>Saisissez la température en {scaleNames[scale]} :</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange}
                />
            </fieldset>
        )
    }

}