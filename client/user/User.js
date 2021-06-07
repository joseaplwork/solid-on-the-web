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