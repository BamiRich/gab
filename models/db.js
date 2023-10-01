//Bring Mongoose in:
const mongoose = require('mongoose');

//Connect db(mongoose) using dotenv
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('db is connected')
}) 
.catch(err => console.log(err.message));

// const db = mongoose.connection
// db.on('error', error => console.error(error))
// db.once('open', () => console.log('connected to Mongoose'))


    
    // useNewUrlParser: true,
    // useUnifiedTopology: true