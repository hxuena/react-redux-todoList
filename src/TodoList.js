import React, { Component } from 'react';
import TodoListUI from './TodoListUI'
import store from './store'
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators'


class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.InputChange = this.InputChange.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.addItem = this.addItem.bind(this)
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        InputChange={this.InputChange}
        addItem={this.addItem}
        deleteItem={this.deleteItem}
      ></TodoListUI>
    )
  }
  InputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  storeChange() {
    this.setState( store.getState())
  }
  addItem() {
    const action = getAddItemAction()
    store.dispatch(action)
  }
  deleteItem(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}
export default TodoList;