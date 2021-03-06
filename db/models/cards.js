var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cardSchema = new Schema({
  title: String,
  card: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
});

var CardModel = mongoose.model('Card', cardSchema);

module.exports = CardModel;
