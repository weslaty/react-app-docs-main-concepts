import React from 'react';
import Welcome from './Welcome';
import Clock from './Clock';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import MailBox from './MailBox';
import MapRender from './MapRender'
import NameForm from './forms/NameForm'
import Calculator from './Calculator'
import WelcomeDialog from './composition/WelcomeDialog'
import SplitPane from './composition/SplitPane'
import SignUpDialog from './specialisation/SignUpDialog'
import './App.css';

function App() {
  const messages = ['Message 1', 'Message 2', 'Message 3']
  return (
    <div className="App">
      <header className="App-header">
        <table>
          <tbody>
            <tr>
              <td>
                <p>
                  Edit <code>src/App.js</code> and save to reload.
              </p>
              </td>
              <td>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                  Learn React
              </a>
              </td>
              <td><LoginControl /></td>
              <td><Toggle /></td>
              <td><NameForm /></td>
            </tr>
            <tr>
              <td><Clock />
                <Clock /></td>
              <td><Welcome name="Michel Dupont" /></td>
              <td><MailBox unreadMessages={messages} /></td>
              <td><MapRender numbers={[3, 5, 7, 9, 11]} /></td>
              <td><Calculator /></td>
            </tr>
            <tr>
              <td><WelcomeDialog /></td>
              <td><SplitPane left={<Clock />}
                right={<Welcome name={1 + 2 + "Expression inside another expression"} />}
              />
              </td>
              <td><SignUpDialog/></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
