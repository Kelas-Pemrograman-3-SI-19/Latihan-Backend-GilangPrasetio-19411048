const express = require ('express')
const app = express()
const mongoose = require('mongoose')

//ini koding untuk konek ke database
mongoose.connect('mongodb://localhost:27017/Latihan', {
useCreateIndex: true,
useNewUrlParser: true,
useUnifiedTopology: true
}).then(() => console.log('Berhasil Konek Ke Database'))
.catch((err) => console.log('Gagal Konek Ke Database'))

app.use(express.json({
    extended: true,
    limit: '20mb'
}))

app.use(express.urlencoded({
    extended: true,
    limit: '20mb'
}))

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

// app.get('/profile/:username/:id',(req, res) => {
//     console.log(req.params)
// })

// app.post('/register', (req, res) => {
//     console.log(req.body)
// })

app.use('/kegiatan', require('../routes/kegiatan'))

app.listen(3000, () => {
    console.log('server started')
})