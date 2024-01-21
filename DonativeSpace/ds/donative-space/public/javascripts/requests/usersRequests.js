async function requestRegister(user, email, pass) {
    try {
        const response = await fetch(`/api/users/`, 
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
          method: "POST",
          body: JSON.stringify({
              username: user,
              email: email,
              password: pass
          })
        });
        // We are not checking for errors (considering the GUI is only allowing correct choices)
        // We only need to send if the user registered or not 
        return { successful: response.status == 200};
    } catch (err) {
        // Treat 500 errors here
        console.log(err);
        return {err: { msg: 'Something went wrong. Request Registo' }};
    }
}

async function requestLogin(user, pass) {
    try {
        const response = await fetch(`/api/users/auth`, 
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
          method: "POST",
          body: JSON.stringify({
              username: user,
              password: pass
          })
        });
        // We are not checking for errors (considering the GUI is only allowing correct choices)
        // We only need to send if the user logged or not since the token will be in the cookie
        return { successful: response.status == 200};
    } catch (err) {
        // Treat 500 errors here
        console.log(err);
        return {err: { msg: 'Something went wrong. Request Login' }};
    }
}


async function requestLogout() {
    try {
        const response = await fetch(`/api/users/auth`, 
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
          method: "DELETE",
        });
        // We are not checking for errors (considering the GUI is only allowing correct choices)
        // We only need to send if the user logged or not since the token will be in the cookie
        return { successful: response.status == 200};
    } catch (err) {
        // Treat 500 errors here
        console.log(err);
        return {err: err};
    }
}


async function requestProfile() {
    try {
        const response = await fetch(`/api/users/auth`);
        var result = await response.json();
        return { successful: response.status == 200,
                 unauthenticated: response.status == 401,
                 user: result};
    } catch (err) {
        // Treat 500 errors here
        console.log(err);
        return {err: err};
    }
}




async function requestUsers() {
    try {
        const response = await fetch('/api/users');
        const result = await response.json();
        return {
            successful: response.status === 200,
            unauthenticated: response.status === 401,
            user: result
        };
    } catch (err) {
        console.log(err);
        return { err: err };
    }
}

