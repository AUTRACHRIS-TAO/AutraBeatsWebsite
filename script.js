import express from 'express';

const app = express();

app.get('/', (res, req)=>{
    res.send('Hello');
});

app.listen(3000, ()=>{
    console.log("Listening at http://localhost:3000");
});