
const express = require('express')
const app = express()
const port = 6000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/new', (req, res) => {
    res.send(null.getMessage())
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
