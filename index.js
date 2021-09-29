const express = require('express')
// const { propfind } = require('./routes/articles')
const app = express()
const port = 2000

const connect = require('./schemas');
connect();

const articlesRouter = require('./routers/articles');

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'));

app.use("/api", [articlesRouter]);

app.use((req, res, next) => {
  console.log(req);
  next();
});

app.set('views', __dirname + '/views'); //경로
app.set('view engine', 'ejs');  //view engine으로 ejs를 사용하겠다

app.get('/test', (req, res) => {
  let name = req.query.name;
  res.render('test', { name });
})

app.get('/home', (req, res) => {
  res.render('index');
})

app.get('/detail', (req, res) => {
  res.render('detail');
})

app.get('/write', (req, res) => {
  res.render('write');
})

app.get('/edit', (req, res) => {
  res.render('edit');
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})