// const assert = require('assert');
// const User = require('../src/user');
//
// describe('Reading data from db', () => {
//     let joe, joe2, maria, alex, zach;
//     beforeEach((done) => { // inject data
//         alex = new User({name: 'Alex'});
//         joe = new User({name: 'Joe'});
//         joe2 = new User({name: 'Joe'});
//         maria = new User({name: 'Maria'});
//         zach = new User({name: 'Zach'});
//         Promise.all([joe.save(), joe2.save(), alex.save(), maria.save(), zach.save()]).then(() => {
//             done();
//         });
//     });
//
//     it('should find all users with a name of joe', (done) => {
//         User.find({name: 'Joe'}).then((users) => {
//             assert(users.length === 2);
//             assert(users[0]._id.toString() === joe._id.toString());
//             assert(users[1]._id.toString() === joe2._id.toString());
//             done();
//         })
//     });
//
//     it('should find user with user id', (done) => {
//         User.findOne({_id: joe._id}).then((user) => {
//             assert(user._id.toString() === joe._id.toString());
//             done();
//         });
//     });
//
//     it('should skip, sort, and limit', (done)=>{
//         User.find({})
//             .sort({name:1})
//             .skip(1)
//             .limit(3)
//             .then((users)=>{
//                 assert(users.length === 3);
//                 assert(users[0].name === 'Joe');
//                 assert(users[1].name === 'Joe');
//                 assert(users[2].name === 'Maria');
//                 done();
//             });
//     });
// });