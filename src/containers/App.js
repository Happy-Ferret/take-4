import React, { Component, PropTypes}  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BrowserPage from './../components/BrowserPage';
import BrowserTabBar from './../components/BrowserTabBar';

import Widget_AwesomeBar from './../components/Widget_AwesomeBar';
import Widget_Button from './../components/Widget_Button';

import * as Actions from './../actions/actions'

import InContentRoutes from './../data/inContentRoutes';

class App extends Component {


  render() {
    
    const { state, actions } = this.props;

    const getDisplayedTab = (el,index,array) => {
      if (el.isActive) {
        return el
      }
    }

    const displayedTab = state.tabs.find(getDisplayedTab);
    const showForward = (displayedTab.currentHistoryIndex + 1 < displayedTab.history.length);
    const currentPath = displayedTab.history[displayedTab.currentHistoryIndex].url;

    return (
      <div id="outer-flex-wrapper">
        <div id="app">

          <BrowserTabBar 
            tabs={state.tabs}
            switchTab={actions.switchTab}
            closeTab={actions.closeTab}>
            <Widget_Button id="create-new-tab" action={actions.addTab} param="new tab" />
            </BrowserTabBar>

          <div id="browser-tool-bar">
            <div id="browser-tool-bar-custom-area" className="custom-area">
              <Widget_AwesomeBar 
                path = {currentPath}
                showForward = {showForward}
                pushNewURLToTab = {actions.pushNewURLToTab}
                navigateBack = {actions.navigateBack}
                navigateForward = {actions.navigateForward}
              />
            </div>
            <div className="widget" data-type="button" />
          </div>


          <BrowserPage path={currentPath}/>

        </div>
      </div>
    )
  }
}

App.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
