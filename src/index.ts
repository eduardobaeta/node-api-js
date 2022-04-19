import express from 'express';

const app = express();

app.get('/', (req, res, next) => {
    res.status(200).send('Hello World');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Application Init port " + PORT);
})