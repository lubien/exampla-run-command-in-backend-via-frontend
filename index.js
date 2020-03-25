const express = require('express')
const {exec} = require('child_process')
const app = express()
const port = 3000

app.use(express.static('public'))
app.get('/outro', (req, res) => {
    exec(`python3 main.py`, (err, stdout, stderr) => {
        res.send({
            err, stdout, stderr
        })
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))