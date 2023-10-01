//S C H E M A

//Bring Mongoose in:
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

//Initialize mongoose schema:
const userSchema = new mongoose.Schema({
    userHeader: Buffer,
    userImage: Buffer,
    name_: String,
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bio: String
})

userSchema.pre('save', function(next) {
    if(this.isModified('password')){
        bcryptjs.hash(this.password, 10, (err, hash) => {
            if(err) return next(err);

            this.password = hash;
            next()
        })
    }
})

userSchema.method = async function(password) {
    if(!password) throw new Error('Password is missing, can not compare!');

    try {
        await bcryptjs.compare(password, this.password)
        return result;
    } catch (error) {
        console.log('error while comparing password', error.message)
    }
}

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