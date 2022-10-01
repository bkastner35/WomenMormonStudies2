const { application } = require("express")
const express = require("express")
const cors = require('cors')
const app = express()

const corsOptions = {
    origin: (origin, callback) => {
        callback(null, true)
    },
}
app.options('*', cors(corsOptions))

app.get("/api", (req, res) =>  {
    res.json({"users" : ['userOne', 'userTwo', 'userThree']})
})

app.listen(3000, () => { console.log("Server started on 3000")})