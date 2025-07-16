const mongoose = require('mongoose');
const postschema = new mongoose.Schema({
    userid:{type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
});
module.exports = mongoose.model("Post", postschema);

