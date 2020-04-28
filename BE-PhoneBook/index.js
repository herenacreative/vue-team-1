// echoconfig server
const express   = require('express')
const app       = express()
const port      = 3000


app.get('/',(req,res) => {
    res.send("hallo gans..")
})

app.listen(port, () => console.log(`Port localnya adalah : ${port}`))
