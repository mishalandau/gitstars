// export default {
//     a: 
//     fetch(`https://api.github.com/users/${this.state.username}`, {
//         cache: 'default',
//         headers: { authorization: `Bearer 974fd375547827f876c7c9e4739478514f4c3811` },
//         method: 'GET',
//         mode: 'cors'
//     })
// }

export const defaultConfig: RequestInit = {
    cache: 'default',
    headers: {
        authorization: `Bearer 974fd375547827f876c7c9e4739478514f4c3811`
    },
    method: 'GET',
    mode: 'cors'
};

export const fetchGithub = (url: string, config = defaultConfig) => {
    const myRequest = new Request(url, config);
    return fetch(myRequest);
}
