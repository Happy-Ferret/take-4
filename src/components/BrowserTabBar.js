import React from 'react';
import Browser_Tab from './Browser_Tab';
class BrowserTabBar extends React.Component {


  generateTabs() {
    console.log(this.props.tabs);
    const tabs = this.props.tabs.map((tab) => {
      return (
        <Browser_Tab
        isActive={tab.isActive} 
        key={tab.key}
        uid={tab.key}
        url={tab.history[tab.currentHistoryIndex].url} 
        switchTab={this.props.switchTab}
        closeTab={this.props.closeTab} />
      )
    })
    return tabs;
  }

  render() {
    return (
      <div id="browser-tab-bar">
        {this.generateTabs()}
        {this.props.children}

      </div>
    )
  }
}

export default BrowserTabBar;
