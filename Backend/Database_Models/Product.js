import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    DetailedDescription: {
        type: String,
    },

    price: {
        type: Number,
        required: true,
        min: 0,
    },

    sizes: [{
        type: String,
    }],

    images: [{
        type: String,
    }],

    category: {
        type: String,
        required: true,
    },

    stock: {
        type: Number,
        required: true,
        min: 0,
    },

    rating: {
        type: Number,
        min: 0,
        max: 5,
    },

    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("Product", ProductSchema);
