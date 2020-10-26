const express = require('express')

const server = express()

const path = require('path')

const pages = require('./pages.js')

//inicionado o express
server
//utilizar body do req
.use(express.urlencoded({extended:true}))
//utilizano os arquivos estátios
.use(express.static('public'))
//configurar tamplate engine
.set('views', path.join(__dirname , "views"))
.set('view engine','hbs')
//criar uma rota
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanagePage)
.post('/save-orphanage',pages.saveOrphanage)

server.listen(5500)