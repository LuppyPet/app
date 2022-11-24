const isProduction = process.env.NODE_ENV === 'production'

export const API_URL = !isProduction
  ? 'https://luppy.herokuapp.com'
  : 'http://localhost:3333'
