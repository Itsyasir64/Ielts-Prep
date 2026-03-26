const mongoose = require('mongoose');

const testResultSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    testDate: { type: Date, required: true },
    score: { type: Number, required: true },
    remarks: { type: String, required: false },
}, {
    timestamps: true
});

module.exports = mongoose.model('TestResult', testResultSchema);