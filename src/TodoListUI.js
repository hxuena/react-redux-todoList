import React from 'react';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
  return (
    <div style={{ margin: '10px' }}>
      <Input placeholder="Basic usage"
        style={{ width: '300px', marginRight: '10px' }}
        value={props.inputValue}
        onChange={props.InputChange} />
      <Button type="primary" onClick={props.addItem}>提交</Button>
      <List
        style={{ marginTop: '10px', width: '300px' }}
        size="small"
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item onClick={(index) => { props.deleteItem(index) }} > {item}</List.Item>)}
      />
    </div>
  )
}
export default TodoListUI