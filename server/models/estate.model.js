import mongoose from 'mongoose';

const estateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    location: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
}, {timestamps: true});

const Estate = mongoose.model('Estate', estateSchema)

export default Estate;