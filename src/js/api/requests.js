const callApi = async (url, params) => {

    let response = await fetch(url, {
        method: params.method,
        headers: params.headers,
        body: params.body
    });

    if(response.ok) {
        let json = await response.json();
        return json;
    } else {
        throw new Error(`${response.status}: ${response.statusText}`);
    }
}

export { callApi };