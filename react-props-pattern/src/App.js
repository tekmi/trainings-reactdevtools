import React, {Component} from 'react';
import './App.css';
import Tabs from "./components/tabs/Tabs";
// import Tabs from "./components/tabs/BloatedTabs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs />
      </div>
    );
  }
}

export default App;
