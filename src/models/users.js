const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const userSchema = new Schema ({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created_at: Date,
  updated_at: Date
});

const User = mongoose.model('User', userSchema);

module.exports = User;
