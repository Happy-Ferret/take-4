export function focus(el) {
  return {type: 'FOCUS', el}
}

export function blur() {
  return {type: 'BLUR'}
}

export function pushNewURLToTab(url) {
  return {type: 'PUSH_NEW_URL_TO_TAB', url}
}

export function navigateBack() {
  return {type: 'NAVIGATE_BACK'}
}

export function navigateForward() {
  return {type: 'NAVIGATE_FORWARD'}
}

export function closeTab(key, isActive) {
  return {type: 'CLOSE_TAB', key: key, isActive: isActive}
}

export function switchTab(key) {
  return {type: 'SWITCH_TAB', key}
}

export function addTab(route) {
  return {type: 'ADD_TAB',route}
}


