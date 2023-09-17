import LinksToChapters from "../schemas/linksToChapters.schema.js";

const saveLinksToChapters = async(req, res) => {
    try {
        const { chapter, name, link } = req.body;
        const existingLink = await LinksToChapters.findOne({ link });
        if (existingLink){
            return res.status(400).json({ msg: "Link is already in use"});
        }

        const linkstochapters = new linkstochapters({ chapter, name, link });

        await linkstochapters.save();
        res.status(200).json({ msg: "Link to chapter saved", linkstochapters });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'There was a server error' });
    }
}

/*******************************************************************************************************/

const getsLinksToChapters = async (req, res) => {
    try {
        const linkstochapters = await LinksToChapters.find();
        res.status(200).json(linkstochapters);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

/*******************************************************************************************************/

const getLinksToChapters = async (req, res) => {
    try {
        const existingLinkToChapters = await LinksToChapters.findById(req.params.id);
        //if not find the LinkToChapters
        if(!existingLinkToChapters){
            return res.status(404).json({ msg: 'Link to chapters not found'});
        }
        res.status(200).json(existingLinkToChapters);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

/*******************************************************************************************************/

const updateLinksToChapters = async(req, res) => {
    try {
        const id = req.params.id;
        const { chapter, name, link } = req.body;
        const existingLinkToChapters = await LinksToChapters.findOne({ link });

        if(!existingLinkToChapters){
            return res.status(404).json({ msg: 'The link to chapter to be updated does not exits' });
        }

        // if() Aqui no supe continuar por duda de que se tiene que recibir un video y guardarlo en el servidor, 
        // y no tuve internet para investigarlo.


    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'There was an error on the server'});
    }
}

/**********************************************************/

const deleteLinksToChapters = async (req, res) => {
    try {
        const link = await LinksToChapters.findOne(req.params.id);
        
        if(!link){
            return res.status(404).json({ msg: 'There is no link to chapter to eliminate' });
        }

        const deletedLink = await LinksToChapters.findByIdAndDelete(req.params.id);
        
        res.status(200).json({ msg: 'Link To Chapter eliminated', delete_link_to_chapter: deletedLink });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'There was a server error' });
    }
}

export default{
    saveLinksToChapters,
    getsLinksToChapters,
    getLinksToChapters,
    updateLinksToChapters,
    deleteLinksToChapters
}