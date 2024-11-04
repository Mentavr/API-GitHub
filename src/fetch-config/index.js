const fetchConfig = () => {
    const url = `https://api.github.com`
    return function fetchAPI(path, option = {}) {
        return fetch(`${url}${path}`, {
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
                'Content-Type': 'application/json;charset=utf-8'
            },
            ...option
        })
    }
}

export const fetchGitAPI = fetchConfig()