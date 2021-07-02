const express = require("express");
const session = require("express-session");
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./routes");

app.set('view engine', 'ejs');

app.use(express.static("public"))

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.use(express.urlencoded({extended: true}));

app.use(routes);

app.listen(port, () => {
    console.log(`Rocking at port ${port}`)
})
