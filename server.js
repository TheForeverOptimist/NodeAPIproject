const express = require('express')
const app = express()
const port = 3000

//routes

app.get('/', (req,res) => {
    res.send('Hello NODE API!')
})

app.get('/blog', (req, res) => {
    res.send('Hello Blog')
})

app.listen(port, () => {
    console.log(`Node API app listening on port ${port}`)
})