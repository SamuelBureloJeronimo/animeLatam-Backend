import User from '../schemas/user.schema.js';

let getUser = async (req, res) => {
    let user = await User.find();
    res.json(user).status(200);
}

let saveUser = async (req, res) => {
    let user = new User();
    let params = req.body;

    console.log(params);

    user.email = params.email;
    user.nick = params.nick;
    user.image = params.image;

    let exist = await User.findOne({ email: "freddyruben@outlook.com" });
    if (exist){
        res.json({msg: "email is already in use"});
    }

    await user.save();

    res.json({msg: 'User Saved', user}).status(200);
}

export default {
    saveUser,
    getUser
}