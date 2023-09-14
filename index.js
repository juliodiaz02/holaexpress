const express = require('express')
const app = express()

app.get('/', (request, response)=> {
    response.send('Hello world from Express')
})
app.listen(3000, ()=>{
    console.log('listenig on port 3000')
})