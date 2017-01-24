const  mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    goal: {type: String, required: true},
    steps:{type: Array}
});


const Goal = mongoose.model('Goal', goalSchema);


module.exports = {Goal};
