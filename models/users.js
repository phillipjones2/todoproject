const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      bcrypt = require('bcryptjs');

const userSchema = new Schema ({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created_at: Date,
  updated_at: Date
});

userSchema.pre('save', function(next) {
  var user = this;
  user.password = bcrypt.hashSync(user.password, 10);
  next();
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
