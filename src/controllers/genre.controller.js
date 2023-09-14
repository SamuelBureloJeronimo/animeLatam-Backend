import Genre from "../schemas/genre.schema.js";

const saveGenre = async(req, res) => {
    try {
        const { name } = req.body;
        const existingGenre = await Genre.findOne({ name });
        if(existingGenre){
            return res.status(400).json({ msg: "Name is already in use"});
        }

        const genre = new Genre({ name });

        await genre.save();

        res.status(200).json({ msg: 'Genre Saved', genre });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'There was a server error' });
    }
}

/*********************************************************************************/

const getGenres = async(req, res) => {
    try {
        const genres = await Genre.find();
        res.status(200).json(genres);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

/*********************************************************************************/

const getGenre = async (req, res) => {
    try {
        const genre = await Genre.findById(req.params.id);
        //if not find the genre
        if(!genre){
            return res.status(404).json({ msg: 'Genre not found'});
        }
        res.status(200).json(genre);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

/*********************************************************************************/

const updateGenre = async(req, res) => {
    try {
        const id = req.params.id;
        const { name } = req.body;
        const genre = await Genre.findById(id);

        if(!genre){
            return res.status(404).json({ msg: 'The genre to be updated does not exist'});
        }

        if(name && name !== genre.name){
            const existingGenre = await Genre.findOne({ name });
            if (existingGenre){
                return res.status(400).json({ msg: `The ${name} genre already exists` });
            }
            genre.name = name;
        }

        const updatedGenre = await genre.save();

        res.status(200).json({
            msg: 'The genre was properly updated',
            updated_data: updatedGenre,
            changes: { name: genre.name }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'There was an error on the server'});
    }
}

/*********************************************************************************/

const deleteGenre = async (req, res) => {
    try {
        const genre = await Genre.findById(req.params.id);

        if(!genre){
            return res.status(404).json({ msg: 'There is no genre to eliminate' });
        }

        const deletedGenre = await Genre.findByIdAndDelete(req.params.id);

        res.status(200).json({ msg: 'Genre eliminated', deleted_genre: deletedGenre });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'There was a server error'});
    }
}

/*********************************************************************************/

export default{
    saveGenre,
    getGenres,
    getGenre,
    updateGenre,
    deleteGenre
}