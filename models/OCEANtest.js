const mongoose = require('mongoose');

const oceanSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      },
     O: {
        type: String,
      },
    C: {
        type: String,
      },
})

module.exports = mongoose.model('ocean', oceanSchema);