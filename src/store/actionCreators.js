import {INPUT_CHANGE, ADD_ITEM, DELETE_ITEM, INIT_LIST} from './actionTypes'
import Axios from 'axios';

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
    Axios.get('./list.json').then((res) => {
      const data = res.data
      const action = initListAction(data)
      dispatch(action)
    }).catch(() => {})
  }
}