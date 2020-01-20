import React from 'react'
import FancyBorder from '../composition/FancyBorder'
function Dialog(props) {
    return (
      <FancyBorder color="blue">
        <h8 className="Dialog-title">
          {props.title}
        </h8>
        <p className="Dialog-message">
          {props.message}
        </p>
        {props.children}
      </FancyBorder>
    );
  }

export default class SignUpDialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {login: ''}
    }

    render() {
        return (
            <Dialog title="Programme d'exploration de Mars"
            message="Comment devrions-nous nous adresser à vous">
                <input value={this.state.login} onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>
                    Inscrivez-moi !
                </button>
            </Dialog>
        )
    }

    handleChange = (event) => {
        this.setState({login: event.target.value})
    }

    handleSignUp = (event) => {
        alert(`Bienvenue à bord, ${this.state.login} !`)
    }
}