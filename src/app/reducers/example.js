import { SET_VALUE } from '../actions/types'

const initialState = {
  value: []
}

export default (state = initialState, action = {}) => {
  const { type, payload = {} } = action
  const { value } = payload

  const typeToFunc = {
    [SET_VALUE]: () => ({ ...state, value })
  }

  const actionHandler = typeToFunc[type] || (() => state)
  return actionHandler()
}
