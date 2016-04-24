var express = require('express')
var bodyParser = require('body-parser');
var Post = require('./models/post');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/post', function(req, res, next){
	//console.log(req.body);

	var post = new Post({
		username: req.body.username,
		body: req.body.body
	});
	post.save(function(err, post){
		if(err){return next(err)}
		res.status(201).json(post);
	});
});


app.use(express.static('public'));
 
app.get('/posts', function (req, res) {
  Post.find(function(err, posts){
  	if(err){return next(err)}
  		res.json(posts)
  })
})

 
app.listen(process.env.PORT || 3000, function(){
	console.log("Server is running");
})


