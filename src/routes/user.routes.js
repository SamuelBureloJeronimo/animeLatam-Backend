import express from 'express';
import userController from '../controllers/user.controller.js'

const router = express.Router();

router.post('/save-user', userController.saveUser);
router.get('/get-user', userController.getUser);

// router.post('/user',(req,res) =>{
//     const User = userSchema(req.body);
//     User
//     .save()
//     .then( (data) => { res.json(data.body) })
//     .catch( (error) => res.json( { message : error.body } ))
// });

export default router;