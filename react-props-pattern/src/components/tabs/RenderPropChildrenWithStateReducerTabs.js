import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';


class RenderPropChildrenWithStateReducerTabs extends Component {
  state = {
    tabs: [
      {
        id: 1,
        title: 'RenderProp Children Reducer Tab 1',
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
        title: 'RenderProp Children Reducer Tab 10',
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
        title: 'RenderProp Children Reducer Tab 11',
        notes: [],
        isActive: false,
      },
    ]
  };

  setActiveTab = (id) => () => {
    if (typeof this.props.stateReducer === "undefined") {
      this.setState(
        () => ({
          tabs: this.state.tabs.map(tab => ({
            ...tab,
            isActive: tab.id === id
          }))
        })
      )
      return;
    }

    this.setState(
      (state) => this.props.stateReducer(id, state)
    );
  };

  getActiveTab = () => this.state.tabs.find(tab => tab.isActive);

  getTabNotesProps = () => ({
    classes: 'importantClass renderPropsClass'
  });

  get renderProps() {
    return {
      getActiveTab: this.getActiveTab,
      setActiveTab: this.setActiveTab,
      tabs: this.state.tabs,
      getTabNotesProps: this.getTabNotesProps,
    }
  };

  render() {
    return this.props.children(this.renderProps);
  }
}

RenderPropChildrenWithStateReducerTabs.propTypes = {
  children: PropTypes.func.isRequired,
  stateReducer: PropTypes.func,
};

export default RenderPropChildrenWithStateReducerTabs;
