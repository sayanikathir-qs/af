const mongoose = require('mongoose');
const { Schema } = mongoose;

const timetableSchema = new Schema({
  moduleId:  { type: Schema.Types.ObjectId, ref: 'Module', required: true },
  day:       { type: String, required: true },
  startTime: { type: String, required: true },
  endTime:   { type: String, required: true },
  venue:     { type: String },
  group:     { type: String }
});

module.exports = mongoose.model('Timetable', timetableSchema);
