import * as express from "express";
import {Cat, CatType} from './app.model';

const app: express.Express = express();

const port: number = 8000;

app.get('/', (req: express.Request, res: express.Response) => {
    console.log(req)
    // res.send({name: "easywaldo", age: 42, loc: ['python', 'node', 'java']});
    // res.send("Hello World")

    res.send({cats: Cat})
});

app.get('/cats/foo', (req, res, next) => {
    console.log(req.rawHeaders);
    res.send({foo: Cat[0]});
});

app.get('/cats', (req, res) => {
    try {
        const cats = Cat;
        res.status(200).send({
            success: true,
            data: cats
        })
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        })
    }
});

app.get('/cats/:id', (req, res) => {
    try {
        const params = req.params;
        const cats = Cat.find((cat) => {
            return cat.id === params.id;
        });
        res.status(200).send({
            success: true,
            data: cats
        })
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        })
    }
});


// Create URL
app.post('/cats', (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        res.status(200).send({
            success: true,
            data: {},
        })
    } catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/`);
});


// console.log('hello world');