// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('server/db/db.json')
const middlewares = jsonServer.defaults()

server.use('/api', middlewares)
server.use('/api', router)

// server.use(middlewares)
// server.use(router)
const port = 3003
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`)
})