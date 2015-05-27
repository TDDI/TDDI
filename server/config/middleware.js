var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function(app, express){
	console.log('go to middleware');
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(express.static('client/public/dist'));

	var userRouter = express.Router();
	var contentRouter = express.Router();

	app.use('/user', userRouter);
	app.use('/content', contentRouter);
	
	require('../user/userRoutes.js')(userRouter);
	require('../content/contentRoutes.js')(contentRouter);

	//this is only for testing
	var ctrlRouter = express.Router();
	app.use('/', ctrlRouter);
	require('../controllers/controller1.js')(ctrlRouter);
};