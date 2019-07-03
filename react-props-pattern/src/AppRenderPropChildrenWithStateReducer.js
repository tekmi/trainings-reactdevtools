import React, {Component} from 'react';
import './App.css';
import Tabs from "./components/tabs/RenderPropChildrenWithStateReducerTabs"
import Tab from "./components/tabs/Tab";
import Notes from "./components/notes/Notes";

class AppRenderPropChildrenWithStateReducer extends Component {
  /**
   * This function has been extracted to avoid unnecessary calls in render method.
   *
   * @param tabsProps props coming from Render-Prop Component
   * @return {*}
   */
  renderTabs = tabsProps => {
    const activeTab = tabsProps.getActiveTab();

    return (
      <div className="tabs">
        <ul className="tabs__menu">
          {tabsProps.tabs.map(tab => (
            <Tab
              key={tab.id}
              {...tab}
              onSetActiveTab={tabsProps.setActiveTab(tab.id)}
            />
          ))}
        </ul>
        <Notes
          {...tabsProps.getTabNotesProps()}
          notes={activeTab.notes}/>
      </div>
    );
  };

  stateReducer = (activeTabIndex, previousState) => {
    if (activeTabIndex === 3) {
      alert('Wow, Tab 3 clicked');
    }

    return {
      tabs: previousState.tabs.map(tab => ({
        ...tab,
        isActive: tab.id === activeTabIndex
      }))
    }
  };

  render() {
    return (
      <div className="App">
        <Tabs stateReducer={this.stateReducer}>{this.renderTabs}</Tabs>
      </div>
    );
  }
}

export default AppRenderPropChildrenWithStateReducer;
