const assert = require('assert');
const User = require('../src/user');

describe('Reading Users out of the database', () => {

    let alex;
    let joe;
    let maria;
    let zach;

    beforeEach((done) => {
        alex = new User({name: 'Alex'});
        joe = new User({name: 'Joe'}); // id is created here! before saving
        maria = new User({name: 'Maria'});
        zach = new User({name: 'Zach'});

        Promise.all([joe.save(), alex.save(), maria.save(), zach.save()])
            .then(() => done());
    });

    it('finds all users with a name of joe', (done) => {
        User.find({name: 'Joe'})
            .then((users) => {
                assert(users[0]._id.toString() === joe._id.toString());
                done();
            });
    });

    it('find a user with a particular id', (done) => {
        User.findOne({ _id: joe._id })
            .then((user) => {
                assert(user.name === 'Joe');
                done();
            });
    });

});