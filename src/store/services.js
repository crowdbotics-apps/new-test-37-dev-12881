import axios from "axios"
import {} from "react-native-dotenv"
const plugin = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/7235/storyboard/8355/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function plugin50_get__read(action) {
  return plugin.get(`/`, null, {
    params: { new_param_2: action.new_param_2, new_param_3: action.new_param_3 }
  })
}
function plugin50_post_data_g1_create(action) {
  return plugin.post(`/data/g1`, null, {
    data: action.data,
    params: { new_param_2: action.new_param_2 }
  })
}
export const apiService = { plugin50_get__read, plugin50_post_data_g1_create }
