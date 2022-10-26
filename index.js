const express = require('express');
const cors = require('cors')
const port = process.env.PORT || 5000
const app = express();
app.use(cors())

const courses = require('./data/courses.json');
const category = require('./data/category.json');

app.get('/',(req, res)=>{
    const html = `
        <h1>Welcome to learning platform server</h1>
        <li><a href="/courses">All Courses</a></li>
    `
    res.send(html)
})

app.get('/courses',(req, res)=>{
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

app.listen(port,()=>{
    console.log(`server in running in port ${port}`);
})

