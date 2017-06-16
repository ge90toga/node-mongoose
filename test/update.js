const User = require('../src/user');
const expect = require('expect');
// instance.set() save/ instance.update ,
describe('Update records', () => {
    let joe;
    beforeEach((done) => {
        joe = new User({name: 'Joe', likes: 0});
        joe.save().then(() => {
            done();
        })
    });

    function checkUpdate (operationPromise, done) {
        operationPromise.then(() => {
            return User.find({})
        }).then((users) => {
            expect(users.length).toBe(1);
            expect(users[0].name).toBe('Alex');
            done();
        });
    }

    it('instance save set and save', (done) => {
        joe.set('name', 'Alex');
        checkUpdate(joe.save(), done);
    });

    it('call instance update()', (done) => {
        checkUpdate(joe.update({name: 'Alex'}), done);
    });

    it('class update', (done) => {
        checkUpdate(User.update({name: 'Joe'}, {name: 'Alex'}), done);
    });

    it('class update one', (done) => {
        User.findOneAndUpdate({name: 'Jone'}, {name: 'Alex'}, done);
    });

    it('increment the user\'s likes by one', (done) => {
        User.update({name: 'Joe'}, {$inc: {likes: 10}})
            .then(() => {
                return User.findOne({name: 'Joe'});
            })
            .then((user) => {
                expect(user.likes).toBe(10);
                done();
            });
    });

});