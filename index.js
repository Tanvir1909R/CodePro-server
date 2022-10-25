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

app.get('/courses/',(req, res)=>{
    res.send(courses)
})

app.get('/courses/:id',(req, res)=>{
    const ID = req.params.id;
    const course = courses.find(c => c.id === ID);
    res.send(course)
})

app.get('/category',(req, res)=>{
    res.send(category)
})

app.get('/courses/front-end',(req, res)=>{
    res.send(frontEnd)
})

app.get('/courses/front-end/:id',(req, res)=>{
    const ID = req.params.id;
    const course = frontEnd.find(c => c.id === ID);
    res.send(course)
})

app.get('/courses/back-end', (req, res)=>{
    res.send(backEnd)
})

app.get('/courses/back-end/:id', (req, res)=>{
    const ID = req.params.id;
    const course = backEnd.find(c => c.id === ID);
    res.send(course)
})

app.get('/courses/app-development',(req, res)=>{
    res.send(App)
})

app.get('/courses/app-development/:id',(req, res)=>{
    const ID = req.params.id;
    const course = App.find(c => c.id === ID);
    res.send(course)
})

app.get('/courses/game-development',(req, res)=>{
    res.send(game)
})

app.get('/courses/game-development/:id',(req, res)=>{
    const ID = req.params.id;
    const course = game.find(c => c.id === ID);
    res.send(course)
})

app.get('/courses/full-stack',(req, res)=>{
    res.send(fullStack)
})

app.get('/courses/full-stack',(req, res)=>{
    const ID = req.params.id;
    const course = fullStack.find(c => c.id === ID);
    res.send(course)
})

app.listen(port,()=>{
    console.log(`server in running in port ${port}`);
})

