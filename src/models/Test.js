const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    name: { type: String, required: true },
    duration: { type: Number, required: true },
    totalQuestions: { type: Number, required: true },
    passingScore: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;