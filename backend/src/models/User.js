const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    userId: { type: String },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    userType: { type: String, required: true },
    other: { type: String }
});
module.exports = mongoose.model("User", userSchema);

// userld
// userName
// email
// password
// userType
// other