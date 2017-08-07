var express = require('express');
var morgan = require('morgan');
var path = require('path');

var articleOne ={
    title : 'Article one | Akhilesh Bashettiwar',
    heading : ' Article one',
    date : '07 August ,2017',
    content: `  
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
            <p>
                This is Akhilesh and this is my artical notes.
                This is Akhilesh and this is my artical notes.
                This is Akhilesh and this is my artical notes.
                This is Akhilesh and this is my artical notes.
            </p>
            `
    
};

var htmlTemplate ={
    
    `
    <html>
    
    <head>
    <title>
        Artile one Akhilesh bashettiwar
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
            <h3>My Artical</h3>
        </div>
        <div>
            August 07, 2017
        </div>
        
        <div>
            <p>
                This is Akhilesh and this is my artical notes.
                This is Akhilesh and this is my artical notes.
                This is Akhilesh and this is my artical notes.
                This is Akhilesh and this is my artical notes.
            </p>
        </div>
    <div>
            <p>
                This is Akhilesh and this is my artical notes.
                This is Akhilesh and this is my artical notes.
                This is Akhilesh and this is my artical notes.
                This is Akhilesh and this is my artical notes.
            </p>
            <br>
        </div>
        </div>
    </body>
</html>
    `
}

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'artical-one.html'));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
