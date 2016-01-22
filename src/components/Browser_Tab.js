import React from 'react';

class Browser_Tab extends React.Component {

  handleTabClick(event) {
    if (!event.target.classList.contains('tab-close')) {
      this.props.switchTab(this.props.uid);
    }
  }

  handleCloseClick(event) {
    this.props.closeTab(this.props.uid, this.props.isActive);
  }

  render() {
    return (
      <div className="tab" 
        data-active={this.props.isActive}
        onClick={this.handleTabClick.bind(this)}>
          <div className="tab-start"></div>
          <div className="tab-favicon"></div>
          <div className="tab-copy">{this.props.uid}</div>
          <button className="tab-close" onClick={this.handleCloseClick.bind(this)}>-</button>
          <div className="tab-end"></div>
        </div>
      )
  }
}

export default Browser_Tab;
