
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// start up the mongodb connection
before((done) => {
    mongoose.connect('mongodb://localhost/users_test');
    mongoose.connection
        .once('open', () => { done(); })
        .on('error', (error) => {
            console.warn('Warning, DB CONNECTION FAILURE', error);
        });
});
// drop all collections
beforeEach((done) => {
    const { users, comments, blogposts } = mongoose.connection.collections;
    users.drop(() => {
        comments.drop(() => {
            blogposts.drop(() => {
                done();
            });
        });
    });
});