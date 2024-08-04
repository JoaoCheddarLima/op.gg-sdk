export function addParamsByObject(endpoint: URL, params: { [key: string]: any }) {
    Object.keys(params)
        .forEach(async key => {
            endpoint.searchParams.append(key, params[key]);
        });
}