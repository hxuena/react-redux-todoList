import React, { Component, Fragment } from 'react';
import {Input, Button, List} from 'antd';

class TodoListUI extends Component {
  render() {
    return (
      <div style={{margin: '10px'}}>
        <Input placeholder="Basic usage" 
          style={{width: '300px', marginRight:'10px'}}
          value={this.props.inputValue}/>
        <Button type="primary" onClick={this.props.addItem}>提交</Button>
        <List
          style={{marginTop: '10px', width: '300px'}}
          size="small"
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (<List.Item onClick={(index) => {this.props.deleteItem(index)}} > {item}</List.Item>)}
        /> 
      </div>
    )
      
  }
}
export default TodoListUI