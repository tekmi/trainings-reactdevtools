import React, {Component} from 'react';
import './App.css';
import Tabs from "./components/tabs/RenderPropTabsSimple"
import Tab from "./components/tabs/Tab";
import Notes from "./components/notes/Notes";

class AppRenderPropSimple extends Component {
  render() {
    return (
      <div className="App">
        <Tabs renderTabs={
            (tabsProps) => {
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
                    notes={activeTab.notes}/>
                </div>
              );
            }
          }/>
      </div>
    );
  }
}

export default AppRenderPropSimple;
