const express = require('express');
const cors = require('cors')
const port = process.env.PORT || 5000
const app = express();
app.use(cors())

const courses = require('./data/courses.json');
const category = require('./data/category.json');
const frontEnd = require('./data/frontEnd.json');
const backEnd = require('./data/backEnd.json');
const App = require('./data/app.json');
const game = require('./data/game.json');
const fullStack = require('./data/fullStack.json')

app.get('/',(req, res)=>{
    const html = `
        <h1>Welcome to learning platform server</h1>
        <li><a href="/courses">Courses Api</a></li>
    `
    res.send(html)
})

app.get('/courses',(req, res)=>{
    res.send(courses)
})

app.get('/category',(req, res)=>{
    res.send(category)
})

app.get('/courses/front-end',(req, res)=>{
    res.send(frontEnd)
})

app.get('/courses/back-end', (req, res)=>{
    res.send(backEnd)
})

app.get('/courses/app-development',(req, res)=>{
    res.send(App)
})

app.get('/courses/game-development',(req, res)=>{
    res.send(game)
})

app.get('/courses/full-stack',(req, res)=>{
    res.send(fullStack)
})

app.listen(port,()=>{
    console.log(`server in running in port ${port}`);
})

