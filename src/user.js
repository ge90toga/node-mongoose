const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// define a schema (NOT a model)
const PostSchema = new Schema({
    title: String
});

const UserSchema = new Schema({
    name: {
        type: String,
        validate: {
            validator: (name) => name.length > 2,
            message: 'Name must be longer than 2 characters.'
        },
        required: [true, 'Name is required.']
    },
    posts: [PostSchema],
    likes: Number,
    blogPosts: [{
        type: Schema.Types.ObjectId,
        ref: 'blogPost'
    }]
});

UserSchema.virtual('postCount').get(function () {
    return this.posts.length;
});

// use UserSchema to define user model
const User = mongoose.model('user', UserSchema);

module.exports = User;