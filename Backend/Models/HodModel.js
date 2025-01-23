const mongoose = require(" mongoose");

const HodSchema = new mongoose.schema({
    username:{type: String, required: true, unique: true},
    password:{ type: string , required: true}
});

module.exports = mongoose.model('HodModel',HodSchema);

////// ////// 
////



//
