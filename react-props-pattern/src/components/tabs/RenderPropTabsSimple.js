import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';


class RenderPropTabsSimple extends Component {
  state = {
    tabs: [
      {
        id: 1,
        title: 'RenderProp Simple Tab 1',
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
        title: 'RenderProp Simple Tab 10',
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
        title: 'RenderProp Simple Tab 11',
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

  renderProps = () => ({
    getActiveTab: this.getActiveTab,
    setActiveTab: this.setActiveTab,
    tabs: this.state.tabs,
  });

  render() {
    return this.props.renderTabs(this.renderProps());
  }
}

RenderPropTabsSimple.propTypes = {
  renderTabs: PropTypes.func.isRequired,
};

export default RenderPropTabsSimple;
