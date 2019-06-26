import React, {Component} from 'react';
import './App.css';
import {Header} from './components/Header';

class App extends Component {
  state = {
    theme: 'light'
  };

  changeTheme = (theme) => {
    this.setState({
      theme,
    })
  };

  render() {
    const {theme} = this.state;
    return (
      <>
        <div className={theme}>
          App Component
          <Header theme={theme}/>
        </div>
        <div>
          Change Theme To:
          <button className="button" onClick={() => this.changeTheme('dark')}>Dark</button>
          <button className="button" onClick={() => this.changeTheme('light')}>Light</button>
        </div>
      </>
    );
  }
}

export default App;
