//S C H E M A

//Bring Mongoose in:
const mongoose = require('mongoose');

//Initialize mongoose schema:
const userSchema = new mongoose.Schema({
    // avata: Buffer,
    // name: {
    //     type: String,
    //     required: true
    // },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    }
    // bio: String,
})

userSchema.static = async email => {
    if(!email) throw new Error('Invalid email!')
    try {
        const user = await this.findOne({email});

        if (user) return false;

        return true;
    } catch (error) {
        console.log('In isThisEmailInUse Handler', error.message)
        return false
    }
};

//Export Schema to Router
module.exports = mongoose.model('User', userSchema);