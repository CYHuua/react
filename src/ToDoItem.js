import React, {Component} from 'react';
import PropTypes from 'prop-types';
class ToDoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    console.log('child render');
    const {content, test} = this.props;
    return (
      <li onClick={this.props.onClick}>
        {test ? test + ' - ' : ''}{content}
      </li>
    )
  }
}

ToDoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}
ToDoItem.defaultProps = {
  test: ''
  // test: 'hello '
}
export default ToDoItem;