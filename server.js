var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne= {
        title:'Article one| Murtaza',
        heading:'Article one',
        date:'April 14,2018',
        content:   `
            <p>
                This is article one.<br>This is the content for my webapp.
            </p>
            <p>
                lot of bullshit has been written in these meaningless paragraphs.
                what else can i add to these paragraphs.theres alot to say but no time for that.wish i had more time for this.
            </p>
            <p>
                Lets see where i can start to write about you.today is april 14th ,2018 time-2:09am.
                alot has happened since a year.
            </p>`
        
};

function createtemplate (data) {

    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
var htmltemplate= `
<html>
    <head>
        <title>
               ${title}
        </title>
        <meta name="viewport" content="width=device-width,  initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href='/'>Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
           ${content}
        </div>
        </div>
    </body>
</html>
`;
return htmltemplate
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
    res.send(createtemplate(articleOne));
});

app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

var counter=0;
app.get('/counter',function(req,res){
    counter= counter+1;
    res.send(counter.toString());
});

app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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
