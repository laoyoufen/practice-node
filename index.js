var express = require('express');
var app = express();
var path = require('path');

/*app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(() => {
	console.log(1212)
})

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/user'));

app.listen(3000)*/


app.use(function(req, res, next) {
  console.log('1');
  next(new Error('haha'));
});

app.use(function(req, res, next) {
  console.log('2');
  res.status(200).end();
});

//错误处理
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.listen(3000)