import { fetchGithub } from '@/config/Api';

namespace UserApi {
    export function fetchUser(username: string) {
        return fetchGithub(`https://api.github.com/users/${username}`)
            .catch((_) => {
                throw new Error('Network error occurred');
            })
            .then((res) => {
                if (res.status === 404) {
                    throw new Error('Profile not found')
                }

                return res;
            })
            .then((resp) => resp.json())
    }
}

export default UserApi;
