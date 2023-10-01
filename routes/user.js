
const jwt = require('jsonwebtoken');
const express = require('express');

const User = require('../models/user');

const {
    signUpUserValidation,
    userValidation,
    signInUserValidation
    } = require('../models/check');
const { isAuth } = require('../models/auth');

// const { isAuth } = require('../models/auth');

const router = express.Router();
 
//Create the root (user.js) route
// router.get('/', (req, res) => {
//     res.send('.Gab: Hello world!')
// });

router.get('/create-user', (req, res) => {
    User.find()
    .then(User => {
        res.json(User)
    })
})

//
// router.delete('/user/:id', async (req, res, next) => {
//     User.findByIdAndRemove({_id: req.params.id})
//     .them(user => {
//         res.send(user)
//         next()
//     });
// });

//Create the create-user route and middilware
router.post('/create-user', signUpUserValidation, userValidation, async (req, res) => {
    console.log(req.body);
    const {userHeader, userImage, name_, username, email, password, bio} = req.body;

    //Pass the email obj in isThisEmailInUse() then call the static method in the models/user schema
    const ANewUser = await User({email: email});
    if (!ANewUser)
        return res.json({
            success: false,
            message: 'This email is already in use, sign-up.'
    });
    
    const user = await User({
        userHeader,
        userImage,
        name_,
        username,
        email,
        password,
        bio,
    });
    await user.save();
    res.json(user);
});

//Create the sign-in route and middilware
router.post('/sign-in', signInUserValidation, userValidation, async (req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({username})
    if(!user)
        return res.json({
            success: false,
            message: `username/password, not found!`
    });

    const isMatch = await User({password});
    if(!isMatch) return res.json({
        success: false,
        message: 'username/password dose not match'
    });

    const token = jwt.sign(
        {userId: user._id}, 
        process.env.JWT_SECRET, 
        {expiresIn: '1d'}
        );

    // res.json({ success: true, user: user, token: token })
    
    res.cookie("jwt", token, {
        httpOnly: true,
        // maxAge: maxAge * 1000,
    });

    res.json({ 
        success: true, user: user, token: token 
    })
})

//Create our POST
router.post('/create-post', isAuth, (req, res) => { 
    res.send('Welcome! you are in a POST route');
})

router.get('create-post', (req, res) => {
    const xy = res.body;
})

module.exports = router;
