import React from 'react'

export default class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: 'KARAKOUZ', description: 'MDA3MECH' }
    }

    handleChange = (event) => {
        const inputName = event.target.name
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value.toUpperCase()
        this.setState({ [inputName]: value })
    }

    handleSubmit = (event) => {
        alert('Le nom a été soumis : ' + JSON.stringify(this.state))
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nom :
                    <input name="name" value={this.state.name} onChange={this.handleChange} />
                </label>
                <label>
                    Nom :
                    <input name="prenom" value={this.state.prenom} onChange={this.handleChange} />
                </label>
                <label>
                    Description :
                    <textarea name="description" value={this.state.description} onChange={this.handleChange} />
                </label>
                <label>
                    Participe :
                    <input type="checkbox" name="participe" value={this.state.participe} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        )
    }
}