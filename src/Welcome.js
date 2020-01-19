import React from 'react';

function sum(a, b) {
    return a + b;
}

function withdraw(account, amount) {
    account.total -= amount;
    return account;
}
 

class Welcome extends React.Component {
    handleClick(e){
        e.preventDefault()
        console.log("Click done" + this)
    }

    render() {
        const a = 1.2;
        const b = 2.1;
        const account = {
            id: 1000,
            total: 100
        };
        this.handleClick = this.handleClick.bind(this);
        return <div>
            <a href="www.google.com" onClick={this.handleClick}>
                <h6>Bonjour , {this.props.name}</h6>
            </a>
            <h6>Sum {a} + {b} = {sum(a, b)}</h6>
            <h6>account = {withdraw(account, 23).total}</h6>
            <h6>account = {account.total}</h6>
        </div>
    }
}

export default Welcome;