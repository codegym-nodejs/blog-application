const express = require('express');
const app = express();
const port = process.env.PORT || 3301;

app.use(express.static(__dirname + '/views'));

app.set('view engine', "ejs");
app.set('views', "./views");

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/contact', (req, res) => {
    res.render("contact");
});

app.get('/about', (req, res) => {
    res.render("about");
});

app.get('/post', (req, res) => {
    res.render("post");
});


app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
});