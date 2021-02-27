const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    position: { type: String, required: true },
    office: { type: String, required: true },
    salary: { type: Number, required: true },
    age: { type: Number, required: true },
    image: { type: String, required: true }
});

module.exports = mongoose.model('Employee', EmployeeSchema);