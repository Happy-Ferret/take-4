import React from 'react';

class Widget_Button extends React.Component {

  handleClick(event) {
    this.props.action(this.props.param);
  }


  render() {
    return (
      <div id={this.props.name} className="button-container widget">
        <button onClick={this.handleClick.bind(this)}>+</button>
      </div>
    )
  }
}

export default Widget_Button;
