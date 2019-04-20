import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.delete = this.delete.bind(this)
  }
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }
  render() {
    const {content, test} = this.props
    return (
      <div onClick={this.delete}>{test}-{content}</div>
    )
  }
  delete(){
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
}
TodoItem.propTypes = {
  index: PropTypes.number,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  deleteItem: PropTypes.func,
}
TodoItem.defaultProps = {
  test: 'hello test',
}

export default TodoItem;