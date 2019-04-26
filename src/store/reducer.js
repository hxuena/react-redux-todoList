import {INPUT_CHANGE, ADD_ITEM, DELETE_ITEM, INIT_LIST} from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  if( action.type === INPUT_CHANGE) {
    newState.inputValue = action.value
  }
  if( action.type === ADD_ITEM) {
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
  }
  if( action.type === DELETE_ITEM) {
    newState.list.splice(action.index, 1)
  }
  if( action.type === INIT_LIST) {
    newState.list = action.data
  }
  return newState;
}