const express = require('express')
const MongoClient = require('mongodb').MongoClient

const app = express()

app.use(express.json())
var database

app.get('/', (req, resp) => {
    resp.send('Welcome to mongodb api')
})

app.listen(8000, () => {
    MongoClient.connect('mongodb://localhost:27017', {useNewURLParser: true}, (error, result) => {
        if (error) throw error
        database = result.db('Mormon')
        console.log('Connection sucessful')
    })
})