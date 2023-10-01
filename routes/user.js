
const express = require('express');

const User = require('../models/user');
const {
    signUpUserValidation,
    userValidation,
    } = require('../models/check')

const router = express.Router();
 
//Create the root (user.js) route
router.get('/', (req, res) => {
    res.send('.Gab: Hello world!')
});

//Create the route and middilware
router.post('/create-user', signUpUserValidation, userValidation, async (req, res) => {
    console.log(req.body);
    const {username, email, password, confirmPassword} = req.body;
    //Pass the email obj in isThisEmailInUse() then call the static method in the models/user schema
    const ANewUser = await User({email: email});
    if (!ANewUser)
        return res.json({
            success: false,
            message: 'This email is already in use, sign-up.'
    });
    
    const user = await User({
        // avata: Buffer,
        // name: 'BO',
        username,
        email,
        password,
        confirmPassword,
        // bio: String,
    });
    await user.save();
    res.json(user);
});

module.exports = router;
