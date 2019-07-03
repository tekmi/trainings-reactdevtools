import React, {Component} from 'react';
import './App.css';
import Tabs from "./components/tabs/RenderPropChildrenTabs"
import Tab from "./components/tabs/Tab";
import Notes from "./components/notes/Notes";

class AppRenderPropChildren extends Component {
  render() {
    return (
      <div className="App">
        <Tabs>
          {
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
                    {...tabsProps.getTabNotesProps()}
                    notes={activeTab.notes}/>
                </div>
              );
            }
          }
        </Tabs>
      </div>
    );
  }
}

export default AppRenderPropChildren;
