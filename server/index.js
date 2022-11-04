const express = require('express')
const path = require('path')
var cors = require('cors')
const MongoClient = require('mongodb').MongoClient
const app = express()
app.use(express.json())
app.use(cors())
var database



app.get("/", (req, res) => {
    res.send("express is here")
})
// To access mormon users
app.get('/api/Experts', (req, resp) => {
    database.collection('Experts').find({}).toArray((err, result) => {
        if (err) throw err
        console.log("sending this to get")
        console.log(resp)
        resp.send(result)
    })
})

const uri = "mongodb+srv://ronnaksaxena:Federer132001%21@testing.0coh3qi.mongodb.net/?retryWrites=true&w=majority";
// if (process.env.NODE_ENV == 'production') {
//     app.use(express.static("client/build"));
//     app.get("*", (req, res) => {
//         res.sendFile(path.resolve(_dirname, "client", "build", "index.html"));
//     });
// }

app.listen(3001, () => {
    MongoClient.connect(uri, {useNewURLParser: true}, (error, result) => {
        if (error) throw error
        database = result.db('Mormon')
        console.log('Connection sucessful')
        // console.log(`Server listening on ${PORT}`);
    })
});

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
//   });

//   app.listen(PORT, () => {
//     console.log(`Server listening on ${PORT}`);
//   });