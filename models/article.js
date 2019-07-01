const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const ArticleSchema = new Schema ({
    title: {
        type: String,
        required: true, 
        unique: true
    },
    link:{
        type: String,
        required: true, 
        unique: true
    },
    summary: {
        type: String, 
        required: true, 
        unique: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    note: [
        {
            type: Schema.Types.ObjectId,
            ref: "note"
        }
    ]
});

// Create model from schema
const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;