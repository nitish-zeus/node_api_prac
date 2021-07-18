const express  = require('express');
const app = express();
const dashboardApi = require('./routes/dashboardApi');
// app.use(express.static('./public'))
const data = require('./data')

app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use('/api/v1/people',dashboardApi)

app.listen(5000,()=>{
    console.log("Server is listening to 5000");
})