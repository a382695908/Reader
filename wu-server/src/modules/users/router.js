import { ensureUser } from '../../middleware/validators'
import * as user from './controller'

export const baseUrl = '/users'

export default [
  {
    method: 'POST',
    route: '/tourists',
    handlers: [
      user.createTourist
    ]
  },
  {
    method: 'POST',
    route: '/register',
    handlers: [
      user.register
    ]
  },
  {
    method: 'GET',
    route: '/captcha',
    handlers: [
      user.getCaptcha
    ]
  }
]

