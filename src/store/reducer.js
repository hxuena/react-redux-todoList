const defaultState = {
  inputValue: 'ss',
  list: []
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  if(action.type === 'change_input_value') {
    newState.inputValue = action.value
  }
  return newState
}