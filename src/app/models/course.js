const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const course = new Schema({
    name:{ type: String, maxlength: 255 },
    description:{ type: String, maxlength: 600 },
    image:{ type: String, maxlength: 255 },
    createAt :{ type: Date, default: Date.now},
    updateAt :{ type: Date, default: Date.now},
    slug:{type: String, maxlength: 255},
});

module.exports = mongoose.model('course', course);