import {INPUT_CHANGE, ADD_ITEM, DELETE_ITEM, INIT_LIST} from './actionTypes'
import axios from 'axios'

export const getInputChangeAction = (value) => ( {
  type: INPUT_CHANGE,
  value
})
export const getAddItemAction = () => ( {
  type: ADD_ITEM
})
export const getDeleteItemAction = (index) => ( {
  type: DELETE_ITEM,
  index
})
export const initListAction = (data) => ( {
  type: INIT_LIST,
  data
})
export const getTodoList = () => {
  return (dispatch) => {
    axios.get('./list.json').then((res) => {
      const action = initListAction(res.data)
      dispatch(action)
    })
  }
}