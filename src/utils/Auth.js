import Cookies from "js-cookie"

class Auth {
    constructor() {
        this.admin = false
        if (Cookies.get("teambuildPublic")) {
            this.authenticated = true
            return
        }
        this.authenticated = false

    }

    login(cb) {
        this.authenticated = true
        cb()
    }

    logout(cb) {
        Cookies.remove("teambuildPublic")
        this.authenticated = false
        cb()
    }

    isAuthenticated() {
        return this.authenticated
    }

    isAdmin(user) {
        if(user.isadmin){
            this.admin = true
        }

        return this.admin
    }
}

export default new Auth()
