const express = require("express");
const bodyParser = require("body-parser")
const app = express();
//设置跨域
app.use(require('./Tools/cors').cors)
app.use(bodyParser.urlencoded({ extended: true }));
//content-type application/json
app.use(bodyParser.json());


app.use('/product', require('./controller/proController'));


app.listen(81, () => {
    console.log("server started on 81")
})