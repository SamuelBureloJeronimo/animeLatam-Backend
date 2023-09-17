import mongoose from "mongoose";

const linksToChapters = new mongoose.Schema({
    chapter : { type : Number },
    name : { type : String },
    link : { type : String }
});

export default mongoose.model('LinksToChapters', genreSchema);