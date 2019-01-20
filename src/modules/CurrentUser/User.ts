class User {
    set userInfo(data: any) {
        try {
            localStorage.setItem('current-user-info', JSON.stringify(data));
        } catch(e) {
            // tslint:disable-next-line:no-console
            console.error(e);
        }
    }

    get userInfo() {
        try {
            return JSON.parse(localStorage.getItem('current-user-info') || '');
        } catch(_) {
            return null;
        }
    }
}


export default new User();
