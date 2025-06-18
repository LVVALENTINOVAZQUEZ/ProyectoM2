const server = require('./src/server');
const dbConfig = require('./src/config/dbConfig');
const router = require('./src/routes/movies');

const PORT = 3000


  server.use(router)
  dbConfig().then(() => {

    server.listen(PORT, () => {
        console.log('server is listening in port', PORT)
    });
  }).catch((error) => console.log(error));