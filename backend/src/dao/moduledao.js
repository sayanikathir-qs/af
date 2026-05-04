const Module = require('../models/module');

exports.create   = (data) => Module.create(data);
exports.findAll  = ()     => Module.find();
exports.findById = (id)   => Module.findById(id);
exports.update   = (id, data) => Module.findByIdAndUpdate(id, data, { new: true });
exports.delete   = (id)   => Module.findByIdAndDelete(id);
