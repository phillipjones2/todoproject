const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

var todoSchema = new Schema({
      todo: {type: String, required: true},
      user: { type: ObjectId, ref: 'userSchema' }
},
{
      timestamps: true
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
