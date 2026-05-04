const Timetable = require('../models/timetable');

exports.create   = (data) => Timetable.create(data);
exports.findAll  = ()     => Timetable.find().populate('moduleId');
exports.findById = (id)   => Timetable.findById(id).populate('moduleId');
exports.update   = (id, data) => Timetable.findByIdAndUpdate(id, data, { new: true });
exports.delete   = (id)   => Timetable.findByIdAndDelete(id);
