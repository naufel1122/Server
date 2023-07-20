console.log("This server is express hello world server");


import express from 'express';
const app = express()

// http://:192.168.1.104:3000
app.get('/', (req, res) => {
  console.log('Hello World!',new Date());
    res.send('Hello World!'+new Date())
})
app.get('/profile', (req, res) => {
  console.log('This is profile',new Date());
    res.send('This is Profile!'+new Date())
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Example server listening on port ${PORT}`)
})