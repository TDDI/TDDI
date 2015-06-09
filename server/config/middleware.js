var morgan = require('morgan');
var bodyParser = require('body-parser');
var passport = require('passport');
var GITHUB_INFO = require('../oauth.js');
var GitHubStrategy = require('passport-github2').Strategy;
var session = require('express-session');


module.exports = function(app, express){
	// passport
	// var GITHUB_CLIENT_ID = GITHUB_INFO.github.clientID;
	// var GITHUB_CLIENT_SECRET = GITHUB_INFO.github.clientSecret;
	// var GITHUB_CLIENT_CALLBACK = GITHUB_INFO.github.callbackURL;
	// console.log('githubbbb:',GITHUB_CLIENT_ID);

	// passport.serializeUser(function(user, done) {
	//   done(null, user);
	// });

	// passport.deserializeUser(function(obj, done) {
	//   done(null, obj);
	// });

	// passport.use(new GitHubStrategy({
	// 		clientID: GITHUB_CLIENT_ID,
	// 		clientSecret: GITHUB_CLIENT_SECRET,
	// 		callbackURL: GITHUB_CLIENT_CALLBACK
	// 	},
	// 	function(accessToken, RefreshToken, profile, done){
	// 		process.nextTick(function(){
	// 			return done(null, profile);
	// 		});
	// 	}
	// ));

	// app.use(express.session({secret: 'smudgethekitty'}));
	// app.use(passport.initialize());
	// app.use(passport.session());


	// app.get('/auth/github',
	// 	passport.authenticate('github', {scope: ['user:email']}),
	// 	function(req,res){

	// 	});

	// app.get('/auth/github/callback',
	// 	passport.authenticate('github', {failureRedirect:'/'}),
	// 	function(req,res){
	// 		res.redirect('/#lesson');
	// 	});

	// var ensureAuthenticated = function (req, res, next) {
	//   if (req.isAuthenticated()) { return next(); }
	//   res.redirect('/');
	// };
	
	//express middleware and url parsers
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	if(process.env.ENVIRONMENT === "PRODUCTION") {
		app.use(express.static('client/public/build'));
	} else {
		app.use(express.static('client/public/dist'));
	}

	//content routes and middleware 
	var contentRouter = express.Router();
	app.use('/api/lesson', contentRouter);
	require('../content/contentRoutes.js')(contentRouter);

};
	//user routes for later
	// var userRouter = express.Router();
	// app.use('/user', userRouter);
	// require('../user/userRoutes.js')(userRouter);
