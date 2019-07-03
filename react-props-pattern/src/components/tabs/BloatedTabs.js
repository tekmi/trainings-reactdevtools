import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import './Tabs.css';
import Notes from "../notes/Notes";


class BloatedTabs extends Component {
  state = {
    tabs: [
      {
        id: 1,
        title: 'Bloated Tab 1',
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
        title: 'Bloated Tab 10',
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
        title: 'Bloated Tab 11',
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
    let { renderTabsOnTop, renderTabsAs} = this.props;

    const renderAs = ['ul', 'ol'].includes(renderTabsAs) ? renderTabsAs : BloatedTabs.defaultProps.renderTabsAs;
    const activeTab = this.getActiveTab();

    return (
      <div className="tabs">
        {
          renderTabsOnTop && renderAs === 'ul' && (
            <ul className="tabs__menu">
              {tabs.map(tab => (
                <Tab
                  key={tab.id}
                  {...tab}
                  onSetActiveTab={this.setActiveTab(tab.id)}
                />
              ))}
            </ul>
          )
        }
        {
          renderTabsOnTop && renderAs === 'ol' && (
            <ol type="1" className="tabs__menu">
              {tabs.map(tab => (
                <Tab
                  key={tab.id}
                  {...tab}
                  onSetActiveTab={this.setActiveTab(tab.id)}
                />
              ))}
            </ol>
          )
        }
        <Notes notes={activeTab.notes}/>
        {
          !renderTabsOnTop && renderAs === 'ul' && (
            <ul className="tabs__menu">
              {tabs.map(tab => (
                <Tab
                  key={tab.id}
                  {...tab}
                  onSetActiveTab={this.setActiveTab(tab.id)}
                />
              ))}
            </ul>
          )
        }
        {
          !renderTabsOnTop && renderAs === 'ol' && (
            <ol type="1" className="tabs__menu">
              {tabs.map(tab => (
                <Tab
                  key={tab.id}
                  {...tab}
                  onSetActiveTab={this.setActiveTab(tab.id)}
                />
              ))}
            </ol>
          )
        }
      </div>
    );
  }
}

BloatedTabs.propTypes = {
  renderTabsOnTop: PropTypes.bool,
  renderTabsAs: PropTypes.string
};

BloatedTabs.defaultProps = {
  renderTabsOnTop: true,
  renderTabsAs: 'ul'
};

export default BloatedTabs;
