import React from 'react'

export default class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: 'KARAKOUZ' , txt: 'MDA3MECH'}
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value.toUpperCase() });
    }

    handleSubmit = (event) => {
        alert('Le nom a été soumis : ' + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nom :
                    <input value={this.state.value} onChange={this.handleChange} />
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        )
    }
}