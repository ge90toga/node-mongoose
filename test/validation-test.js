const expect = require('expect');
const User = require('../src/user');

describe('Validating records', () => {

    it('requires a user name', () => {
        const user = new User({name: undefined});
        const validationResult = user.validateSync();
        const {message} = validationResult.errors.name;
        expect(message).toBe('Name is required.');
    });

    it('requires a user\'s name no longer than 2 characters', () => {
        const user = new User({name: 'XX'});
        const validationResult = user.validateSync();
        const {message} = validationResult.errors.name;
        expect(message).toBe('Name must be longer than 2 characters.');
    });

    it('disallow invalid save', (done) => {
        const user = new User({name: 'XX'});
        user.save().catch((validationResult)=>{
            const { message } = validationResult.errors.name;
            expect(message).toBe('Name must be longer than 2 characters.');
            done();
        });
    });
});