const express = require('express')
const MongoClient = require('mongodb').MongoClient
const app = express()

app.use(express.json())
var database

app.get('/', (req, resp) => {
    resp.send('Welcome to mongodb api')
})
const uri = "mongodb+srv://ronnaksaxena:Federer132001%21@testing.0coh3qi.mongodb.net/?retryWrites=true&w=majority";

app.listen(8080, () => {
    MongoClient.connect( uri, {useNewURLParser: true}, (error, result) => {
        if (error) throw error
        database = result.db('Mormon')
        console.log('Connection sucessful')
    })
})


