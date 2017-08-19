var express = require('express');
var morgan = require('morgan');
var path = require('path');

var articles = { 
   'article-one' :{
    title: 'Article one | Akhilesh Bashettiwar',
    heading: ' Article one',
    date: '07 August ,2017',
    content: `  <p>
                This is Akhilesh and this is my artical notes.
                This is Akhilesh and this is my artical notes.
                This is Akhilesh and this is my artical notes.
                This is Akhilesh and this is my artical notes.
            </p>
            <p>
                This is Akhilesh and this is my artical notes.
                This is Akhilesh and this is my artical notes.
                This is Akhilesh and this is my artical notes.
                This is Akhilesh and this is my artical notes.
            </p>
            <p>
                This is Akhilesh and this is my artical notes.
                This is Akhilesh and this is my artical notes.
                This is Akhilesh and this is my artical notes.
                This is Akhilesh and this is my artical notes.
            </p>
            `},
    'article-two' :{
        title: 'Article one | Akhilesh Bashettiwar',
    heading: ' Article one',
    date: '07 August ,2017',
    content: `  <p>
                This is Akhilesh and this is my 2nd artical notes.
            </p> `
    },        
    'article-three' :{
        title: 'Article one | Akhilesh Bashettiwar',
    heading: ' Article one',
    date: '07 August ,2017',
    content: `  <p>
                This is Akhilesh and this is my 3rd artical notes.
            </p>
           
            `
    },
};

function createTemplate (data){
var title = data.title;
var heading = data.heading;
var date = data.date;
var content = data.content;

var htmlTemplate = `
    <html>
    
    <head>
    <title>
        ${title}
    </title>
           <meta name="viewport" content= "width=device-width, initial-scale=1"/>
           <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr>
        <div>
            ${heading}
        </div>
        <div>
            ${date}
        </div>
        
        <div>
            ${content}
        </div>
    </body>
</html>
    `;
    
    return htmlTemplate;
}
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter', function (req, res) {
  counter = counter +1;
  res.send(counter.toString());
});

app.get('/:articleName', function (req, res) {
    var articleName =req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var names = [];
app.get('/submit-name/:name', function (req, res) {
  
  var name = req.params.name;
  names.push(name);
  res.send(JSON.stringfy(name));
  
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
