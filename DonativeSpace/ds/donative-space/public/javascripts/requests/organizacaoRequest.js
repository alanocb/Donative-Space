async function requestOrganizacaos() {
    try {
        const response = await fetch('/api/organizacaos');
        const result = await response.json();
        return {
            successful: response.status === 200,
            unauthenticated: response.status === 401,
            organizacaos: result 
        };
    } catch (err) {
        console.log(err);
        return { err: err };
    }
}