import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'
import axios from 'axios'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.inputChange = this.inputChange.bind(this)
    this.btnClick = this.btnClick.bind(this)
    this.getTodoItem = this.getTodoItem.bind(this)
  }
  componentDidMount() {
    // axios.get('/api/todolist')
    //   .then((res) => {
    //     this.setState(() => ({
    //       list: [...res.data]
    //     }))
    //   })
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input" value={this.state.inputValue}
            onChange={this.inputChange}
          />
          <button onClick={this.btnClick}>提交</button></div>
        <ul>{this.getTodoItem()}</ul>
      </Fragment>
    )
  }
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          deleteItem={this.handleDelete.bind(this)}
        />
      )
    })
  }
  inputChange(e) {
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }
  btnClick() {
    this.setState((prevState) => ({
      inputValue: '',
      list: [...prevState.list, prevState.inputValue]
    }))
  }
  handleDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list }
    })
  }
}
export default TodoList;