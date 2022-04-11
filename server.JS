const express = require('express')
const app = express()
const port = 3000
const path=require('path')
const connectDB=require('./config/db');
var cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get('/', (req, res) => {
  res.send('Hello World!')
})
connectDB();/*connect to mongoose which in turn connect to db*/


app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/viewchat',require('./routes/api/viewChat'));



app.listen(port,()=>console.log('listening on 3000'))//mention port here

