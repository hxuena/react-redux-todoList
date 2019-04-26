import React, { Component } from 'react';
// import TodoListUI from './TodoListUI'
import {Input, Button, List} from 'antd';
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
      <div style={{ margin: '10px' }}>
        <Input placeholder="Basic usage"
          style={{ width: '300px', marginRight: '10px' }}
          value={this.state.inputValue}
          onChange={this.InputChange} />
        <Button type="primary" onClick={this.addItem}>提交</Button>
        <List
          style={{ marginTop: '10px', width: '300px' }}
          size="small"
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={(index) => { this.deleteItem(index) }} > {item}</List.Item>)}
        />
      </div>
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