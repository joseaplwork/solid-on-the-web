export class AdminUser {
    constructor(user) {
        this.user = user;
    }

    name() {
        return this.user.name();
    }

    ldapUser() {
        return this.user.ldapUser();
    }
}