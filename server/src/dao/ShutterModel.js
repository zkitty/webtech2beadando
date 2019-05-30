const mongoose = require('mongoose');

const database = mongoose.createConnection('mongodb://127.0.0.1:27017/shutters', {
	autoIndex: true,
	useNewUrlParser: true
});
database.on('error', console.error.bind(console, 'connection error:'));
database.once('open', function() {
	console.log('MongoDB is open.');
});

const Schema = mongoose.Schema;
const shutterSchema = new Schema({
	_id: Schema.ObjectId,
	parts: {
		tiltRod: Number,
		hinges: Number,
		louvers: Number,
		shutterStaples: Number,
		rails: Number
	},
	window: {
		width: Number,
		height: Number,
		mountSize: Number,
		panels: Number
	},
	price: Number,
	isPaid: Boolean,
	isAssembled: Boolean,
	isInvoiced: Boolean,
	installationDate: {
		"year": Number,
		"month": Number,
		"day": Number,
		"hours": Number,
	},
	customer: {
		name: String,
		email: String,
		phoneNumber: String
	}
});

module.exports = database.model('shutters', shutterSchema);
