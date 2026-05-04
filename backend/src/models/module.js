const mongoose = require('mongoose');
const { Schema } = mongoose;

const moduleSchema = new Schema({
  moduleCode: { type: String, required: true, unique: true },
  moduleName: { type: String, required: true },
  credits:    { type: Number },
  description:{ type: String },
  lecturer:   { type: String }
});

module.exports = mongoose.model('Module', moduleSchema);
