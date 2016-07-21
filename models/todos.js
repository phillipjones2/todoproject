const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

var todoSchema = new Schema({
      todo: {type: String, required: true},
      user: { type: ObjectId, required: true, ref: 'userSchema' }
},
{
      timestamps: true
});

const Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;
