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
    case types.PLUGIN50_POST_DATA_G1_CREATE:
    case types.PLUGIN50_POST_DATA_G1_CREATE_SUCCEEDED:
    case types.PLUGIN50_POST_DATA_G1_CREATE_FAILED:
      return Object.assign({}, state, {
        plugin: [...state.plugin, action.response]
      })
    default:
      return state
  }
}
