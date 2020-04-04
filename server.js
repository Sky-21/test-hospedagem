const express = require('express')

const app = express()

app.get('/' , (req, res) => {
  res.json({ok: true})
})

const port = process.env.PORT || 3000

app.listen(port)
