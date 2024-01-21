window.onload = async function () {
    try {


        const userProfile = await requestProfile();
        const user = userProfile.user;
        let res = await requestOrganizacaos();
        let re = await requestCategoria();
        let r = await requestEntrega();
        let resul = await requestCampanhas();

        document.getElementById('username').innerHTML ='<i class="fas fa-solid fa-user fa-fw"></i>&nbsp' + user.name;
        document.getElementById('points').innerHTML ='<i class="fas fa-solid fa-coins fa-fw"></i>&nbsp' + user.points;

        campanhas = resul.campanhas;

        populateOrganizacao(res.organizacaos);
        populateCategoria(re.categorias);
        populateEntrega(r.entregas);
        populateCampanhas(resul.campanhas);
        populateDonationForm(userProfile.user);

        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            events: getEventArrayFromCampanhas(campanhas),
            dayClick: function (date) {
                // Handle day click event if needed
                console.log('Clicked on: ' + date.format());
            }
        });

        const formElement = document.getElementById("voluntariado-form");

        formElement.addEventListener('submit', async function (event) {
            event.preventDefault(); // Prevent the default form submission

            // Collect form data
            const formData = {
                nome: document.getElementById("voluntariado-name").value,
                email: document.getElementById("voluntariado-email").value,
                campanha_id: parseInt(document.getElementById("voluntariado-camp").value),
                doador_id: user.id, // Assuming you have an ID for the organization
                telefone: document.getElementById("voluntariado-phone").value,
            };

            // Send the data to the server
            const result = await requestCreateVoluntario(formData);

            // Handle the result as needed (show success message or error)
            if (result.successful) {
                // Update the campanha_voluntario count
                const updateResult = await updateVoluntarioCount(formData.campanha_id);
        
                // Check if the campanha_voluntario count was updated successfully
                if (updateResult.successful) {
                    window.location.href = "/profile.html";
                } else {
                    alert("Error updating campanha_voluntario count. Please try again.");
                }
            } else {
                alert("Error creating voluntário. Please try again.");
            }
        });

        // Assuming you have a function requestCreateDonativofisico similar to the one for voluntario
    const formElement1 = document.getElementById("donation-form");

    formElement1.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        const formData = {
            don_name: document.getElementById("donation-name").value,
            don_email: document.getElementById("donation-email").value,
            don_telefone: document.getElementById("donation-phone").value,
            categoria_id: parseInt(document.getElementById("donation-type").value),
            org_id: parseInt(document.getElementById("donation-org").value),
            don_observacao: document.getElementById("donation-comment").value,
            entrega_id: parseInt(document.getElementById("donation-loc").value),
            doador_id: user.id,
        };

        // Send the data to the server
        const result = await requestCreateDonativofisico(formData);

        // Handle the result as needed (show success message or error)
        if (result.successful) {
            window.location.href = "/profile.html"
            // Optionally, redirect or perform other actions
        } else {
            alert("Error submitting donation. Please try again.");
        }
    });

        

    } catch (err) {
        console.log(err);
        // alert("Something went wrong!")
    }

    const selectElement = document.getElementById("voluntariado-camp");
    const vagasInfoElement = document.getElementById("vagas-info");

    selectElement.addEventListener('change', function () {
        const selectedCampaignId = parseInt(selectElement.value);
        const selectedCampaign = campanhas.find(campanha => campanha.campanha_id === selectedCampaignId);

        // Update the text box with the number of volunteer positions
        if (selectedCampaign) {
            vagasInfoElement.value = selectedCampaign.campanha_voluntario + " vagas";
        } else {
            vagasInfoElement.value = ""; // Clear the text box if no campaign is selected
        }
    });
}

async function logout() {
    try {
        let result = await requestLogout();
        if (!result.successful || result.err)
            throw result.err || { err: "Not successfull" }
        window.location.pathname = "/index.html"
    } catch (err) {
        console.log(err);
       // alert("Something is not working");
    }
}

function populateDonationForm(user) {
    // Assuming "user" contains information like name and email
    document.getElementById("donation-name").value = user.name;
    document.getElementById("donation-email").value = user.email;

    document.getElementById("voluntariado-name").value = user.name;
    document.getElementById("voluntariado-email").value = user.email;

    // You can add more fields as needed
}

function populateOrganizacao(organizacaos) {
    const selectElement = document.getElementById("donation-org");

    organizacaos.forEach(org => {
        const optionElement = document.createElement("option");
        optionElement.value = org.org_id;
        optionElement.textContent = org.org_name; // Display organization name in the dropdown
        selectElement.appendChild(optionElement);
    });
}

function populateCategoria(categorias) {
    const selectElement = document.getElementById("donation-type");

    categorias.forEach(categoria => {
        const optionElement = document.createElement("option");
        optionElement.value = categoria.categoria_id; 
        optionElement.textContent = categoria.categoria_name; // Display organization name in the dropdown
        selectElement.appendChild(optionElement);
    });
}

function populateEntrega(entregas) {
    const selectElement = document.getElementById("donation-loc");

    entregas.forEach(entrega => {
        const optionElement = document.createElement("option");
        optionElement.value = entrega.entrega_id; 
        optionElement.textContent = entrega.entrega_name; // Display organization name in the dropdown
        selectElement.appendChild(optionElement);
    });
}

function populateCampanhas(campanhas) {
    const selectElement = document.getElementById("voluntariado-camp");

    campanhas.forEach(campanha => {
        // Check if campanha_voluntario is greater than 0
        if (campanha.campanha_voluntario > 0) {
            const optionElement = document.createElement("option");
            optionElement.value = campanha.campanha_id;
            optionElement.textContent = campanha.nome_evento;
            selectElement.appendChild(optionElement);
        }
    });
}

function getEventArrayFromCampanhas(campanhas) {
    const events = [];

    campanhas.forEach(campanha => {
        // Convert data_inicio and data_termino to FullCalendar event format
        if (campanha.campanha_voluntario > 0) {
            events.push({
                title: campanha.nome_evento,
                start: campanha.data_inicio,
                end: campanha.data_termino,
                // Add any additional properties or styling options if needed
            });
        }
    });

    return events;
}

