import { User } from "./User";

export class TrialUser extends User {
    daysLeftInTrial() {
        const started = this.data.trialStarted;

        return this._millisToDays(new Date().getTime() - started.getTime());
    }
}