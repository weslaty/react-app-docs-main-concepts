import React from 'react'

function UserGreeting(props) {
    return <h5>Bienvenue !</h5>;
}

function GuestGreeting(props) {
    return <h5>Veuillez vous inscrire.</h5>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Connexion
      </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Déconnexion
      </button>
    );
}

export default class LoginControl extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }

    handleLoginClick = () => {
        this.setState({ isLoggedIn: true })
    }

    handleLogoutClick = () => {
        this.setState({ isLoggedIn: false })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        )
    }
}