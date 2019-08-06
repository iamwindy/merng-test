require('dotenv').config()
export const config = {
  MONGODB: process.env.MONGODB,
  SECRET_KEY: process.env.SECRET_KEY,
}
