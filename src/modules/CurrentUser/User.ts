export interface IUser {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: number;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string;
    hireable: string;
    bio: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
}

class UserLocalStorage {
    set userInfo(data: any) {
        try {
            if (!data) {
                localStorage.removeItem('current-user-info');
                return;
            }

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


export const userLocalStorage = new UserLocalStorage();
