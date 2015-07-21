import React from 'react';

class MessageDisplay extends React.Component{
  render(){
    return(
      <div className="alert alert-info" role="alert">{this.props.msg}</div>
    );
  }
}
MessageDisplay.propTypes = {
  msg: React.PropTypes.string
};
MessageDisplay.defaultProps = {
  msg: ''
};

export default MessageDisplay;
