const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.create = async (data) => {
  const hashed = await bcrypt.hash(data.password, 10);
  return User.create({ ...data, password: hashed });
};
exports.findByEmail = (email) => User.findOne({ email });
exports.findAll = () => User.find({}, '-password');
exports.update = (id, data) => User.findByIdAndUpdate(id, data, { new: true });
exports.delete = (id) => User.findByIdAndDelete(id);

