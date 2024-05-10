const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/WebApp');

const userSchema = mongoose.Schema({
    username: {
        type: String,
      },
     email: {
        type: String,
      },
   mbti: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'mbti'
   },
   ocean: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ocean'
   }
})

module.exports = mongoose.model('user', userSchema);