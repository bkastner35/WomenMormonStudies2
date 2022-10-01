const { application } = require("express")
const express = require("express")
const cors = require('cors')
const app = express()

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}
app.use(cors(corsOptions))

app.get("/api", (req, res) =>  {
    res.json({"users" : ['userOne', 'userTwo', 'userThree']})
})

app.listen(3000, () => { console.log("Server started on 3000")})