import { User } from '../User';

const TWO_DAYS_AGO = new Date(new Date().getTime() - (1000 * 60 * 60 * 24 * 2));

describe('Member User', () => {
    let user;

    beforeEach(() => {
        user = new User({
            address1: '123 Foo',
            city: 'Footown',
            state: 'FO',
            zip: '14321',
            username: 'fooey-foo',
        });
    });

    it('provides a name', () => {
        expect(user.name()).toEqual('fooey-foo');
    });

    it('provides an address', () => {
        const expected = '123 Foo\nFootown, FO 14321';

        expect(user.address()).toEqual(expected);
    });

    it('provides a name', () => {
        user.data.address2 = 'Apt 2';

        const expected = '123 Foo\nApt 2\nFootown, FO 14321';

        expect(user.address()).toEqual(expected);
    });
});


describe('Admin User', () => {
    let user;

    beforeEach(() => {
        user = new User({
            username: 'fooey-foo',
        });
    });

    it('provides a name', () => {
        expect(user.name()).toEqual('fooey-foo');
    });

    it('provides an LDAP username', () => {
        expect(user.ldapUser()).toEqual('fooey-foo/big_co');
    });
});


describe('Trial User', () => {
    let user;

    beforeEach(() => {
        user = new User({
            trialName: 'fooey-foo',
            trialStarted: TWO_DAYS_AGO,
        });
    });  
    
    it('provides a name', () => {
        expect(user.name()).toEqual('fooey-foo');
    });

    it('provides the days left in the trial', () => {
        expect(user.daysLeftInTrial()).toEqual(2);
    });
});