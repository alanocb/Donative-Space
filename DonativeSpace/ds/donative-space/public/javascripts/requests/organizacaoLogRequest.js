// Register a new organization
async function requestRegister(user, email, pass) {
    try {
        const response = await fetch(`/api/orgs`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                username: user,
                email: email,
                password: pass
            })
        });

        return { successful: response.status === 200 };
    } catch (err) {
        console.log(err);
        return { err: { msg: 'Something went wrong. Request Register' } };
    }
}

// Log in an organization
async function requestLogin(user, pass) {
    try {
        const response = await fetch(`/api/orgs/auth`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                username: user,
                password: pass
            })
        });

        return { successful: response.status === 200 };
    } catch (err) {
        console.log(err);
        return { err: { msg: 'Something went wrong. Request Login' } };
    }
}

// Log out an organization
async function requestLogout() {
    try {
        const response = await fetch(`/api/orgs/auth`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        });

        return { successful: response.status === 200 };
    } catch (err) {
        console.log(err);
        return { err: err };
    }
}

// Get organization profile information
async function requestProfile() {
    try {
        const response = await fetch(`/api/orgs/auth`);
        const result = await response.json();

        return {
            successful: response.status === 200,
            unauthenticated: response.status === 401,
            org: result
        };
    } catch (err) {
        console.log(err);
        return { err: err };
    }
}

// Get information about all organizations
async function requestOrgs() {
    try {
        const response = await fetch('/api/orgs');
        const result = await response.json();

        return {
            successful: response.status === 200,
            unauthenticated: response.status === 401,
            org: result
        };
    } catch (err) {
        console.log(err);
        return { err: err };
    }
}
