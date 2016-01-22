import inContentRoutes from './../data/inContentRoutes';
import UIDGenerator from './../utilities/uidGenerator';
const tabUID = new UIDGenerator(-1);

const INITIAL_STATE = {
  tabs: [
    {
      key: tabUID.gimmeUID(),
      isActive: true,
      currentHistoryIndex: 0,
      history: [
        {url:"tab one"}
      ]
    }
  ]
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case 'PUSH_NEW_URL_TO_TAB': {
      const tabs = state.tabs.map((tab) => {
        if (tab.isActive) {
          if( tab.history.length - 1 != tab.currentHistoryIndex) {
            tab.history.splice(tab.currentHistoryIndex + 1);
          }
          tab.currentHistoryIndex ++;
          tab.history.push({url:action.url})
        }
        return tab;
      })
      return { tabs:tabs }
    }

    case 'NAVIGATE_BACK': {
      const tabs = state.tabs.map((tab) => {
        if (tab.isActive && tab.currentHistoryIndex > 0) {
          tab.currentHistoryIndex -- ;
        }
        return tab
      })
      return { tabs: tabs };
    }

    case 'NAVIGATE_FORWARD': {
      const tabs = state.tabs.map((tab) => {
        if (tab.isActive && tab.currentHistoryIndex + 1 < tab.history.length) {
          tab.currentHistoryIndex ++ ;
        }
        return tab
      })
      return { tabs: tabs }
    }

    case 'SWITCH_TAB': {
      const tabs = state.tabs.map((tab) => {
        if (action.key === tab.key) {
          tab.isActive = true
        } else {
          tab.isActive = false;
        }        
        return tab
      })
      return { tabs: tabs }
    }

    case 'ADD_TAB': {
      const tabs = state.tabs.map((tab) => {
          tab.isActive = false;
        return tab
      })
      const newTab = {
        key: tabUID.gimmeUID(),
        isActive: true,
        currentHistoryIndex: 0,
        history: [
          {url: action.route}
        ]
      }
      tabs.push(newTab);
      return { tabs: tabs }
    }

    case 'CLOSE_TAB': {
      let tabs = [];
      let closingActiveTab = action.isActive;
      let closingIndex;
      if (state.tabs.length === 1) return state;
      for(let i = 0; i < state.tabs.length; i++) {
        if(state.tabs[i].key != action.key) {
          tabs.push(state.tabs[i]);
        }
        else if (state.tabs[i].isActive) {
          closingIndex = i;
        }
      }
      if (closingActiveTab) {
        if (closingIndex === state.tabs.length - 1 ) {
          tabs[tabs.length-1].isActive = true;
        } else {
          tabs[closingIndex].isActive = true;
        }
      }
      return { tabs: tabs }
    }

    default: 
      return state;
  }
}

export default reducer;
