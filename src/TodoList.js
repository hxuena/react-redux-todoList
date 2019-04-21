import React, { Component, Fragment } from 'react';
import TodoListUI from './TodoListUI'
import store from './store'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.deleteItem = this.deleteItem.bind(this)
    this.addItem = this.addItem.bind(this)
  }
  render() {
    return (
      <TodoListUI
       inputValue={this.state.inputValue}
       list={this.state.list}
       addItem={this.state.addItem}
       deleteItem={this.deleteItem}
      />
    )
  }
  addItem(){
    this.setState((prevState) => {
      list: prevState.list.push(prevState.inputValue)
    })
  }
  deleteItem(index) {
    this.setState((prevState) => {
      list: prevState.list.splice(index, 1)
    })
  }
}
export default TodoList;