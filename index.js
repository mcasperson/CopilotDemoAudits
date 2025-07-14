
const express = require('express')
const app = express()
const port = 6000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// app.get('/null', (req, res) => {
//     null.send('Hello World!')
// })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
