const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

before((done) => { // only execute one time
    mongoose.connect('mongodb://localhost/users_test');
    mongoose.connection
        .once('open', () => { done(); })
        .on('error', (error) => {
            console.warn('Warning', error);
        });
});

beforeEach((done) => {
    const users = mongoose.connection.collections.users;
    users.drop(() => {
        done();
    });
});