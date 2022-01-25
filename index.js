const express = require('express');
const app = express();
const port = process.env.PORT || 3301;

app.use(express.static(__dirname + '/views'));

app.set('view engine', "ejs");
app.set('views', "./views");

app.get('/', (req, res) => {
    let posts = [
      {
        title: 'Man must explore, and this is exploration at its greatest',
        subtitle: 'Problems look mighty small from 150 miles up',
        author: 'Thinh Le',
        postDate: 'September 24, 2021',
        url: 'https://vnexpress.net/thuy-tien-neu-khong-bi-dieu-tra-toi-kho-rua-bun-nho-hat-vao-minh-4419132.html'
      },
      {
        title: 'Man must explore, and this is exploration at its greatest',
        subtitle: 'Problems look mighty small from 150 miles up',
        author: 'Thinh Le',
        postDate: 'September 24, 2021',
        url: 'https://vnexpress.net/di-choi-hay-o-nha-4420420.html'
      }
    ]
    res.render("index", {posts: posts});
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