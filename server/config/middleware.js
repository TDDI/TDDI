var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function(app, express){
	console.log('go to middleware');
	app.use(morgan('common'));
	app.use(bodyParser.json());
	app.use(express.static('client/public/src'));

	var ctrlRouter = express.Router();
	app.use('/', ctrlRouter);
	require('../controllers/controller1.js')(ctrlRouter);
};