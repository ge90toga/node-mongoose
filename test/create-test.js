const assert = require('assert');
const User = require('../src/user');

describe('Create user records', () => {

    it('save a user', (done) => {
        const joe = new User({ name: 'Joe' });// does not saved into db
        // joe.isNew here is true (only in memory), once it is saved into db
        // it changes to false
        joe.save().then(()=>{
            assert(!joe.isNew);
            done();
        });
    });
});