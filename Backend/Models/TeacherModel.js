const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
     username:{ trype: string, required: true , unique: true},
     password:{type: string, required: true},  

// hello
});

module.exports = mongoose.Model('TeacherModel', TeacherSchema);