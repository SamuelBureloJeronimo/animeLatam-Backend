import Users from '../schemas/user.schema.js';
import path from 'path';
const userPath = 'user/img/';

let getUser = async (req, res) => {
    let users = await Users.find();
    res.json(users).status(200);
}

const saveUser = async (req, res) => {
    try {
        
        // const { email, nickname, image } = req.body;

        // // Check if the email already exists
        // const existingEmail = await Users.findOne({ email });
        // if (existingEmail) {
        //     return res.status(400).json({ msg: 'Email is already registered' });
        // }

        // // Check if the nickname already exists
        // const existingNickname = await User.findOne({ nickname });
        // if (existingNickname) {
        //     return res.status(400).json({ msg: 'The nickname is already registered' });
        // }

        // const user = new Users({ email, nickname, image });

        // let targetPath = image ;
        // if (req.file) {
        //     const ext = path.extname(req.file.originalname);
        //     targetPath = `public/userImages/${nickname}${ext}`;
        // }

        // moveAndRenameImage(req.file.path, targetPath);
        // user.image = targetPath;

        // await user.save();
        // res.status(200).json({ msg: 'New user created', user});

        const { email } = req.body;
        let exist = await Users.findOne({ email });
        if (exist){
            res.status(400).json({msg: "email is already in use"});
        }

        let user = new Users();
        let data = req.body;

        user.email = data.email;
        user.nick = data.nick;
        user.image = data.image;

        await user.save();

        res.status(200).json({msg: 'User Saved', user});

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'There was a server error' });
    }
}

export default {
    saveUser,
    getUser
}