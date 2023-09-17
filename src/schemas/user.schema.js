import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email : { type : String },
    nickname : { type : String },
    image : { type : String }
});

export default  mongoose.model('Users', userSchema);