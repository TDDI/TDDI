var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function(app, express){
	console.log('go to middleware');
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(express.static('client/public/dist'));

	// var userRouter = express.Router();
	// var contentRouter = express.Router();

	// app.use('/user', userRouter);
	// app.use('/content', contentRouter);
	
	// require('../user/userRoutes.js')(userRouter);
	// require('../content/contentRoutes.js')(contentRouter);


	//this is only for testing
	var router = express.Router();
	app.use('/', router);
	require('../content/contentRoutes.js')(router);
};

// curl -H 'Content-Type: application/json' -H 'Accept: application/json' -X post -d
//  '{"comments":[
//  *    {"commentedText":"Comment Box 1",
//  *      "entries":[
//  *        {"username":"John","comment":"Hello, World!","updatedAt":"Today"},
//  *        {"username":"Jane","comment":"Hello, John!","updatedAt":"Today"}]},
//  *    {"commentedText":"Comment Box 2",
//  *      "entries":[
//  *        {"username":"John","comment":"Jane you are not the world.","updatedAt":"Today"},
//  *        {"username":"Jane","comment":"How do you know?","updatedAt":"Today"}]}
//  *    ]}' http://localhost:9000/api/article/someObjID