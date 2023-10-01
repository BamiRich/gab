const {check, validationResult,} = require('express-validator');

exports.signUpUserValidation = [
    check('username')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Username required')
        .isString()
        .withMessage('Must be a valid username')
        .isLength({min: 2, max: 10})
        .withMessage('Username must be within 2 to 10 character'),
    check('email')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Must be an email!')
        .isEmail()
        .withMessage('Invalid email'),
    check('password')
        .trim()
        .not()
        .isEmpty()
        .withMessage('password must be inputed!')
        .isLength({min: 2, max: 15})
        .withMessage('Password must be at list 9 character'),
    check('confirmPassword')
        .trim()
        .not()
        .isEmpty()
        .custom((value, {req}) => {
            if(value !== req.body.password) {
                throw new Error('Both password must be same!');
            }
            return true;
        }),

];

exports.userValidation = (req, res, next) => {
    const result = validationResult(req).array();
    if(!result.length) return next();

    const error = result[0].msg;
    res.json({success: false, message: error});
};
