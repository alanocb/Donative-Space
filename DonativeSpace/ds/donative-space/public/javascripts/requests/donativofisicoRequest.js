async function requestCreateDonativofisico(donativofisicoData) {
    try {
        const response = await fetch(`/api/donativofisico`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(donativofisicoData)
        });

        return { successful: response.status === 201 };
    } catch (err) {
        console.error(err);
        return { err: { msg: 'Something went wrong during donativofisico creation.' } };
    }
}

async function requestGetAllDonativofisicos() {
    try {
        const response = await fetch('/api/donativofisico');
        const result = await response.json();
        return {
            successful: response.status === 200,
            donativofisicos: result
        };
    } catch (err) {
        console.error(err);
        return { err: { msg: 'Something went wrong while fetching donativofisicos.' } };
    }
}
