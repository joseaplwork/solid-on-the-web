export class MemberUser {
    constructor(user) {
        this.user = user;
    }

    address() {
        const data = this.user.data;
        
        if (data.address1) {
            return this._formatAddress(
                data.address1,
                data.address2,
                data.city,
                data.state,
                data.zip
            )
        }
    }

    name() {
        return this.user.name();
    }

    _formatAddress(add1, add2, city, state, zip) {
        let out = add1;

        if (add2) out += `\n${add2}`;

        out += `\n${city}, ${state} ${zip}`;

        return out;
    }
}