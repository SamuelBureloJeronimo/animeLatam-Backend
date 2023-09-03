import Genre from "../schemas/genre.schema.js";

let saveGenre = async(req, res) => {

    let genre = new Genre();
    let params = req.body;
    genre.name = params.name;

let exist = await Genre.findOne({name: genre.name});
if(exist){
    res.json({msg: "Name is already in use"});
} else {
    await genre.save();
    res.json({msg: 'Genre Saved', genre}).status(200);
}

    
}

export default{
    saveGenre
}