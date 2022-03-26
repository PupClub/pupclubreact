let activeUsername = null;

class Api {
    static login(username, password) {
        activeUsername = username;
    }

    static signUp(username, email, password) {
        return;
    }
}

export default Api;