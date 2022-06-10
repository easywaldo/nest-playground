"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 8000;
app.get('/', function (req, res) {
    console.log(req);
    res.send({ name: "easywaldo", age: 42, loc: ['python', 'node', 'java'] });
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port + "/");
});
//# sourceMappingURL=app.js.map