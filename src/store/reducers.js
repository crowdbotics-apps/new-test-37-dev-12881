import * as types from "./constants"

const initialState = { plugin: [] }

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.PLUGIN50_GET__READ:
    case types.PLUGIN50_GET__READ_SUCCEEDED:
    case types.PLUGIN50_GET__READ_FAILED:
      return Object.assign({}, state, {
        plugin: [...state.plugin, action.response]
      })
    case types.PLUGIN50_GET_DATA_G1_LIST:
    case types.PLUGIN50_GET_DATA_G1_LIST_SUCCEEDED:
    case types.PLUGIN50_GET_DATA_G1_LIST_FAILED:
      return Object.assign({}, state, {
        plugin: [...state.plugin, action.response]
      })
    default:
      return state
  }
}
