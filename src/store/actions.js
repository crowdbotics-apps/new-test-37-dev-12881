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

export const plugin50_post_data_g1_create = (new_param, new_param_2, data) => ({
  type: types.PLUGIN50_POST_DATA_G1_CREATE,
  new_param,
  new_param_2,
  data
})

export const plugin50_post_data_g1_createSucceeded = (response, starter) => ({
  type: types.PLUGIN50_POST_DATA_G1_CREATE_SUCCEEDED,
  response,
  starter
})

export const plugin50_post_data_g1_createFailed = (error, starter) => ({
  type: types.PLUGIN50_POST_DATA_G1_CREATE_FAILED,
  error,
  starter
})
