//instead of express server we are using json server to run our server

//import json server
const jsonServer = require('json-server')

//create json server app
const server = jsonServer.create() //returns an express server

//set path for db.json
const router = jsonServer.router("db.json")

//returns middleware used json server
const middleware = jsonServer.defaults()

//setup port
const port = process.env.PORT || 4000

// use router,middleware in server
server.use(middleware)
server.use(router)

//app listen
server.listen(port,()=>{
    console.log(`Server running at port ${port}`)
})