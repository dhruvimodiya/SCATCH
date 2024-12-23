const express = require('express')
const app = express();
const cookiesParser = require('cookie-parser');
const path = require("path");
const db = require("./config/mongoose_connection");
const ownersRouter = require('./routes/ownersRouter')
const productsRounter = require('./routes/productsRouter')
const userRouter = require('./routes/usersRouter')


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookiesParser());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

app.use('/owners',ownersRouter),
app.use('/users',userRouter);
app.use('/products',productsRounter);

app.listen(4000);