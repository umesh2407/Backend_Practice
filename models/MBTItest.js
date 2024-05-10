const mongoose = require('mongoose');
const mbtiSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      },
     M: {
        type: String,
      },
    B: {
        type: String,
      },
})

module.exports = mongoose.model('mbti', mbtiSchema);