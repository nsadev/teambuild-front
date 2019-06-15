import Cookies from "js-cookie";

class Auth {
  constructor() {
    if (Cookies.get("teambuild-public")) {
      this.authenticated = true;
      return;
    }
    this.authenticated = false;
  }

  login(cb) {
    this.authenticated = true;
    cb();
  }

  logout(cb) {
    Cookies.remove("teambuild-public");
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
