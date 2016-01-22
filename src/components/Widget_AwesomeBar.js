import React from 'react';

class Widget_AwesomeBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: props.path
    }
  }

  toggleForward() {
    if (this.props.showForward) {
      return (
        <button id="back-arrow" onClick={this.handleForwardClick.bind(this)}/>
      )
    }
  }

  handleFocus(event) {
    event.target.select();
    let el = event.target.getAttribute('data-for');
    //this.props.focus(el);
  }

  handleBlur(event) {
    //this.props.blur();
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.pushNewURLToTab(event.target.value);
    }
  }

  handleBackClick() {
    this.props.navigateBack();
  }

  handleForwardClick() {
    this.props.navigateForward();
  }

//this is slightly non-reduxy, but it makes it a lot easier to replicate
// awesome bar behavior without unncessarily bubbling every key event

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  componentWillReceiveProps(next) {
    this.setState({value: next.path});
  }

  render() {
    return (
      <div id="awesome-bar-wrapper" className="widget">
        <button id="back-arrow" onClick={this.handleBackClick.bind(this)}/>
        { this.toggleForward() }
          <div id="awesome-bar" className={(this.props.currentFocus === "awesome-bar") ? "has-focus":""}>
            <input  tabIndex='1' 
                    type="text" 
                    placeholder="Search or enter address" 
                    data-for="awesome-bar" 
                    onFocus={this.handleFocus.bind(this)} 
                    onBlur={this.handleBlur.bind(this)} 
                    onKeyPress={this.handleKeyPress.bind(this)}
                    onChange={this.handleChange.bind(this)}
                    value = {this.state.value}
                    />
          </div>
      </div>
    )
  }
}

export default Widget_AwesomeBar;
