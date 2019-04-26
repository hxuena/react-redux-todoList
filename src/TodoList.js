import React, { Component } from "react";
import store from "./store";
import { connect } from "react-redux";

class TodoList extends Component {
  render() {
    return (
      <div>
        <div>
          <input
            value={this.props.inputValue}
            onChange={this.props.inputChange}
          />
          <button onClick={this.props.addItem}>提交</button>
        </div>
        <ul>
          {
            this.props.list.map((item, index) => {
              return (
                <li key={index} onClick={() => {this.props.deleteItem(index)}}>
                  做好三四月，收获八九月{item}
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inputChange(e) {
      const action = {
        type: "change_input_value",
        value: e.target.value
      };
      dispatch(action);
    },
    addItem() {
      const action = {
        type: "add_item"
      };
      dispatch(action);
    },
    deleteItem(index) {
      const action = {
        type: "delete_item",
        index: index
      };
      dispatch(action);
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
