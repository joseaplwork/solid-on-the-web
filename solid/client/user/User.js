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

export class User {
    constructor(data) {
        this.data = data;
    }

    daysLeftInTrial() {
        const started = this.data.trialStarted;

        return this._millisToDays(new Date().getTime() - started.getTime());
    }


    ldapUser() {
        return `${this.data.username}/big_co`;
    }

    name() {
        return this.data.username || this.data.trialName;
    }

    _millisToDays(millis) {
        return Math.floor(millis / 1000 / 60 / 60 / 24);
    }
}