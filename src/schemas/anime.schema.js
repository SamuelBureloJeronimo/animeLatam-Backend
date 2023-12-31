import mongoose from "mongoose";

const animeSchema = new mongoose.Schema({
    name : { type : String },
    title : { type : String },
    converImage : { type : String },
    launchDate : { type : Date },
    genres:[{
        type : mongoose.ObjectId,
        ref : 'Genre'
    }],
    rating : { type: String },
    linktoAnimes : [{
        chapter : { type: Number },
        name : { type: String  },
        link : { type: String }
    }],
    comments : [{
        user : {
            type : mongoose.ObjectId,
            ref : 'User'
        },
        publicationDate : { type: Date, default : Date.now },
        comment : { type: String }
    }]
});

module.exports = mongoose.model('User', userSchema);