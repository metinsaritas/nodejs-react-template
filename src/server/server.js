const express = require('express')
const path = require('path')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const os = require('os')
const session = require('express-session')
const bodyParser = require('body-parser')

const Opt = require('./options')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('./src/client/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(session({
    secret: 'ASfagaji238fsajf',
    saveUninitialized: true,
    resave: false
}))


app.use('/', require('./routers'))

io.on('connection', (socket) => {
    
    console.log(`[${socket.id}] Someone is connected`)

    socket.emit("welcome", {info: os.userInfo().username})
})

server.listen(Opt.PORT, () => console.log(`Server is listening on port: ${Opt.PORT}`))