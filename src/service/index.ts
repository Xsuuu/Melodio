import { TIME_OUT } from './config'
import HYRequest from './request'
import { BASE_URL } from './config'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default hyRequest
