const callApi = async (url, params) => {
    
    const { method, headers, body } = params;
    let response;

    if (!headers && !body) {
        response = await fetch(url, { method: method });
    } else {
        response = await fetch(url, { 
            method: method,
            headers: headers,
            body: body
        });
    }

    if(response.ok) {
        let json = await response.json();
        return json;
    } else {
        throw new Error(`${response.status}: ${response.statusText}`);
    }
}

export { callApi };