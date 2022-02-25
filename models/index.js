// Defines the relationship between the db objects

const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

Comment.belongsTo(User, {
    constraints: null,
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    constraints: null,
    foreignKey: 'post_id',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Post, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
})

module.exports = {User, Comment, Post}