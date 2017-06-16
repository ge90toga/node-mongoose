// const assert = require('assert');
// const User = require('../src/user');
//
// describe('Deleting a user', () => {
//     let joe;
//     beforeEach((done) => {
//         joe = new User({name: 'Joe'});
//         joe.save().then(
//             () => done()
//         );
//     });
//
//     // joe.remove();
//     it('model instance remove', (done) => {
//         joe.remove().then(() => {
//             User.findOne({name: 'Joe'}).then((user) => {
//                 assert(user === null);
//                 done();
//             });
//         });
//     });
//
//     // User.remove() remove a bunch of item with some critiria
//     it('class method remove', (done) => {
//         User.remove({name: 'Joe'}).then(() => {
//             User.findOne({name: 'Joe'}).then((user) => {
//                 assert(user === null);
//                 done();
//             });
//         });
//     });
//
//     // class findOneAndRemove
//     it('class method findOneAndRemove', (done) => {
//         User.findOneAndRemove({name: 'Joe'}).then(() => {
//             User.findOne({name: 'Joe'}).then((user) => {
//                 assert(user === null);
//                 done();
//             });
//         });
//     });
//
//     // findByIdAndRemove
//     it('class method findByIdAndRemove', () => {
//         User.findByIdAndRemove(joe._id).then(() => {
//             User.findOne({name: 'Joe'}).then((user) => {
//                 assert(user === null);
//                 done();
//             });
//         });
//     });
//
// });