const expect = require('expect');
const User = require('../src/user');

describe('Virtual types', () => {
    it('should return the number of posts', (done) => {
        const joe = new User({
            name: 'Joe',
            posts: [{title: 'PostTitle1'}, {title: 'PostTitle2'}]
        });
        joe.save().then(() => {
            return User.findOne({name: 'Joe'});
        }).then((user) => {
            expect(user.postCount).toBe(2);
            done();
        });
    });
});