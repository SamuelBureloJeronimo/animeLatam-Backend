import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email : { type : String },
    nick : { type : String },
    image : { type : String }
});

export default  mongoose.model('User', userSchema);