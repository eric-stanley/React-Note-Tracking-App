// import faunadb from 'faunadb'

const faunadb = require('faunadb');

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.REACT_APP_FAUNADB_KEY
})

export { q, client } 
