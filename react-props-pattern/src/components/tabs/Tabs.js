import React, {Component} from 'react';
import Tab from './Tab';
import './Tabs.css';
import Notes from "../notes/Notes";


class Tabs extends Component {
  state = {
    tabs: [
      {
        id: 1,
        title: 'Tab 1',
        notes: [
          {
            id: 1,
            title: 'Note I'
          },
          {
            id: 2,
            title: 'Note II'
          }
        ],
        isActive: true,
      },
      {
        id: 2,
        title: 'Tab 10',
        notes: [
          {
            id: 1,
            title: 'Another Note I'
          },
        ],
        isActive: false,
      },

      {
        id: 3,
        title: 'Tab 11',
        notes: [],
        isActive: false,
      },
    ]
  };

  setActiveTab = (id) => () => {
    this.setState({
      tabs: this.state.tabs.map(tab => ({
        ...tab,
        isActive: tab.id === id
      }))
    });
  };

  getActiveTab = () => this.state.tabs.find(tab => tab.isActive);

  render() {
    const {tabs} = this.state;
    const activeTab = this.getActiveTab();

    return (
      <div className="tabs">
        <ul className="tabs__menu">
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              {...tab}
              onSetActiveTab={this.setActiveTab(tab.id)}
            />
          ))}
        </ul>
        <Notes notes={activeTab.notes}/>
      </div>
    );
  }
}

export default Tabs;
