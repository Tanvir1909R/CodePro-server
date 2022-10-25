const express = require('express');
const cors = require('cors')
const port = process.env.PORT || 5000
const app = express();
app.use(cors())

app.get('/',(req, res)=>{
    const html = `
        <h1>Welcome to learning platform server</h1>
        <li><a href="/courses">Courses Api</a></li>
    `
    res.send(html)
})

app.listen(port,()=>{
    console.log(`server in running in port ${port}`);
})

