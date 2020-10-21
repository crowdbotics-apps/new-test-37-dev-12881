import * as types from "./constants"
export const plugin50_get__read = () => ({ type: types.PLUGIN50_GET__READ })
export const plugin50_get__readSucceeded = (response, starter) => ({
  type: types.PLUGIN50_GET__READ_SUCCEEDED,
  response,
  starter
})

export const plugin50_get__readFailed = (error, starter) => ({
  type: types.PLUGIN50_GET__READ_FAILED,
  error,
  starter
})

export const plugin50_get_data_g1_list = () => ({
  type: types.PLUGIN50_GET_DATA_G1_LIST
})

export const plugin50_get_data_g1_listSucceeded = (response, starter) => ({
  type: types.PLUGIN50_GET_DATA_G1_LIST_SUCCEEDED,
  response,
  starter
})

export const plugin50_get_data_g1_listFailed = (error, starter) => ({
  type: types.PLUGIN50_GET_DATA_G1_LIST_FAILED,
  error,
  starter
})
