const express = require('express');
const cors = require('cors')
const port = process.env.PORT || 5000
const app = express();
app.use(cors())

// const courses1 = require('./data/courses1.json');
const category = require('./data/category.json');
const frontEnd = require('./data/frontEnd.json');
const backEnd = require('./data/backEnd.json');
const App = require('./data/app.json')

app.get('/',(req, res)=>{
    const html = `
        <h1>Welcome to learning platform server</h1>
        <li><a href="/courses">Courses Api</a></li>
    `
    res.send(html)
})

app.get('/category',(req, res)=>{
    res.send(category)
})

app.get('/front-end',(req, res)=>{
    res.send(frontEnd)
})

app.get('/back-end', (req, res)=>{
    res.send(backEnd)
})

app.get('/app-development',(req, res)=>{
    res.send(App)
})

app.listen(port,()=>{
    console.log(`server in running in port ${port}`);
})

