// const { Schema, model } = require('mongoose');

// const userSchema = Schema({
//     //Defino mis atrubutos del esquema.
// })

// module.exports = model( 'Users', userSchema )

const { Schema, model } = require('mongoose');

const ratingSchema = new Schema({
  
    quality: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    customerService: {
        type: Number,
        required: true,
    },
    comments: {
        type: String,
        required: true
    },
    restaurantID: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    },
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = model('Rating', ratingSchema);
