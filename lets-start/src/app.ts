import * as express from "express";

const app: express.Express = express();

const port: number = 8000;

app.get('/', (req: express.Request, res: express.Response) => {
    console.log(req)
    res.send({name: "easywaldo", age: 42, loc: ['python', 'node', 'java']});
    // res.send("Hello World")
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/`);
});


// console.log('hello world');