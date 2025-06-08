const server = require('./src/server')
const router = require('./src/routes/movies')

const PORT = 3000


  server.use(router)
server.listen(PORT, () => {
    console.log('server is listening in port', PORT)
})