import axios from "axios"
import {} from "react-native-dotenv"
const plugin = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/7235/storyboard/8355/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function plugin50_get__read(action) {
  return plugin.get(`/`)
}
function plugin50_get_data_g1_list(action) {
  return plugin.get(`/data/g1`)
}
export const apiService = { plugin50_get__read, plugin50_get_data_g1_list }
