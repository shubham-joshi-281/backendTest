import express from "express";
import dotenv from 'dotenv'
const app = express()

dotenv.config()

app.get('/', (req, res) => {
  res.json({
    message: "hello"
  })
})


app.get('/login', (req, res) => {
  res.json({
    message: "this is login"
  })
})



app.listen(process.env.PORT, () => {
  console.log(`Server Running at ${process.env.PORT} Port`)
})