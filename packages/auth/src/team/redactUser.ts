import { redactUser as _redactUser, UserWithSecrets } from 'crdx'
import { Member } from './types'

export const redactUser = (user: UserWithSecrets): Member => {
  return {
    ..._redactUser(user),
    roles: [],
  }
}
