import Anime from "../schemas/anime.schema.js";

const saveAnime = async(req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'Name is required in the request body' });
        }

        const existingAnime = await Anime.findOne({ name });

        if(existingAnime) {
            return res.status(400).json({ msg: "Name is already in use" });
        }

        const datos = req.body;
        const anime = new Anime({
            name,
            converImage,
            displayImage,
            launchDate,
            genres,
            rating,
            linkToChapters,
            comments
        });

        await anime.status(200).json({ msg: 'Anime saved', anime });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export default{
    saveAnime
}