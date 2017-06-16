const assert = require('assert');
const expect = require('expect');
const User = require('../src/user');

describe('Subdocuments', () => {

    it('can create a subdocument', (done) => {
        const joe = new User({
            name: 'Joe',
            posts: [{title: 'PostTitle'}]
        });

        joe.save().then(() => {
            User.findOne({name: 'Joe'}).then((user) => {
                assert(user.posts[0].title === 'PostTitle');
                done();
            });
        });
    });

    it('can add subdocument to an existing record', (done) => {
        const joe = new User({
            name: 'Joe',
            posts: []
        });

        joe.save().then(() => {
            return User.findOne({name: 'Joe'})
        }).then((user) => {
            user.posts.push({title: 'New Post'});
            return user.save();
        }).then(() => {
            return User.findOne({name: 'Joe'})
        }).then((user) => {
            assert(user.posts[0].title === 'New Post');
            done();
        });
    });

    it('can remove an existing subdocument', (done) => {
        const joe = new User({
            name: 'Joe',
            posts: [{title: 'New Title'}]
        });
        joe.save().then(() => {
            return User.findOne({name: 'Joe'});
        }).then((user) => {
            // This is how to remove subdocuments
            const post = user.posts[0];
            // Note: this is not raw js array's slice
            post.remove();
            return user.save();
        }).then(() => {
            return User.findOne({name: 'Joe'});
        }).then((user) => {
            expect(user.posts.length).toBe(0);
            done();
        });
    });
});