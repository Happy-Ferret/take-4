import React from 'react';
import VerEx from 'verbal-expressions';

class BrowserPage extends React.Component {

  isURL() {
    let pathTest = VerEx()
                  .startOfLine()
                  .then( "http" )
                  .maybe( "s" )
                  .then( "://" )
                  .maybe( "www." )
                  .anythingBut( " " )
                  .endOfLine();
    if (pathTest.test(this.props.path)) return true;
  }

  getURLTitle() {

  }

  render() {
    if (this.isURL()) {
      return (
        <div id="browser-page">
          <iframe id="arbitrary-page" width="100%" height="100%" frameBorder="0" src={this.props.path} />
        </div>
      )
    } else {
      return (
        <div id="browser-page">{this.props.path}</div>
      )
    }
  }
}

export default BrowserPage;
