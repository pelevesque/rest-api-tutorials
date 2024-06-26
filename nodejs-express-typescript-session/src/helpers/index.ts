import crypto from 'crypto'
const config = require('../../config.json')

const SECRET = 'config.auth.secret'

export const random = () => crypto.randomBytes(128).toString('base64')

export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt, password].join('/'))
      .update(SECRET).digest('hex')
}
