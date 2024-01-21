
window.onload = async function () {
    try {
        

        const userProfile = await requestProfile();
        let res = await requestCampanhas();
        const user = userProfile.user;
        

        document.getElementById('username').innerHTML ='<i class="fas fa-solid fa-user fa-fw"></i>&nbsp' + user.name;
        document.getElementById('points').innerHTML ='<i class="fas fa-solid fa-coins fa-fw"></i>&nbsp' + user.points;
       

        populateCampanha(res.campanhas);
        
        initCalendar(res.campanhas);
  
     } catch (err) {
        console.log(err);
       // alert("Something went wrong!")
    }
}

function initCalendar(campanhas) {
    let calendarEvents = [];

    for (let i = 0; i < campanhas.length; i++) {
        const startDate = formatDate(campanhas[i].data_inicio);
        const endDate = formatDate(campanhas[i].data_termino);

        const event = {
            title: campanhas[i].nome_evento,
            start: startDate,
            end: endDate,
            description: campanhas[i].campanha_observacao,
            // Add other properties as needed
        };

        calendarEvents.push(event);
    }

    // Initialize FullCalendar with your events
    $('#calendar').fullCalendar({
        events: calendarEvents,
        // Add other FullCalendar options as needed
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

function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function populateCampanha(campanhas) {
    let container = document.getElementById("campanha-container");

    

    for (let i = 0; i < campanhas.length; i++) {
        if (i % 3 === 0) {
            // Start a new row for every third campaign
            var currentRow = document.createElement("div");
            currentRow.className = "row";
        }

        let colDiv = document.createElement("div");
        colDiv.setAttribute("class", "col-lg-4 col-md-6 col-12 mb-4 mb-lg-0");

        let customBlockWrap = document.createElement("div");
        customBlockWrap.setAttribute("class", "custom-block-wrap");

        let img = document.createElement("img");
        img.src = campanhas[i].campanha_img;
        img.setAttribute("class", "custom-block-image img-fluid");
        img.setAttribute("height", "300");
        /*
        let img = document.createElement("img");
        img.src = campanhas[i].campanha_img;
        img.setAttribute("class", "custom-block-image img-fluid");
        */
        let customBlock = document.createElement("div");
        customBlock.setAttribute("class", "custom-block");

        let customBlockBody = document.createElement("div");
        customBlockBody.setAttribute("class", "custom-block-body");

        let h5 = document.createElement("h5");
        h5.setAttribute("class", "mb-3");
        h5.id = "titOrg";
        h5.textContent = campanhas[i].org_name;

        let h6TitCampanha = document.createElement("h6");
        h6TitCampanha.setAttribute("class", "mb-3");
        h6TitCampanha.id = "titCampanha";
        h6TitCampanha.textContent = campanhas[i].nome_evento;

        let p1 = document.createElement("p");
        p1.textContent = campanhas[i].campanha_observacao;

        let h6Requesitos = document.createElement("h6");
        h6Requesitos.setAttribute("class", "mb-3");
        h6Requesitos.id = "titCampanha";
        h6Requesitos.textContent = "Requesitos";

        let strongNecessidades = document.createElement("strong");

        let p2 = document.createElement("p");
        p2.innerHTML = `<strong>Necessidades:</strong> ${campanhas[i].campanha_necessidade}`;

        let p3 = document.createElement("p");
        p3.innerHTML = `<strong>Voluntarios:</strong> ${campanhas[i].campanha_voluntario}`;

        let dFlexContainer = document.createElement("div");
        dFlexContainer.setAttribute("class", "d-flex align-items-center my-2");

        let pStart = document.createElement("p");
        pStart.setAttribute("class", "mb-0");
        pStart.innerHTML = `<strong>Comeca:</strong> ${formatDate(campanhas[i].data_inicio)}`;

        let pEnd = document.createElement("p");
        pEnd.setAttribute("class", "ms-auto mb-0");
        pEnd.innerHTML = `<strong>Acaba:</strong> ${formatDate(campanhas[i].data_termino)}`;

        dFlexContainer.appendChild(pStart);
        dFlexContainer.appendChild(pEnd);

        customBlockBody.appendChild(h5);
        customBlockBody.appendChild(h6TitCampanha);
        customBlockBody.appendChild(p1);
        customBlockBody.appendChild(h6Requesitos);
        customBlockBody.appendChild(strongNecessidades);
        customBlockBody.appendChild(p2);
        customBlockBody.appendChild(p3);
        customBlockBody.appendChild(dFlexContainer);

        customBlock.appendChild(customBlockBody);

        let donateButton = document.createElement("a");
        donateButton.href = "donate.html";
        donateButton.setAttribute("class", "custom-btn btn");
        donateButton.textContent = "Doar";

        customBlock.appendChild(donateButton);

        customBlockWrap.appendChild(img);
        customBlockWrap.appendChild(customBlock);

        colDiv.appendChild(customBlockWrap);
        currentRow.appendChild(colDiv);

        // Append the row to the container if it's the third campaign or the last one
        if (i % 3 === 2 || i === campanhas.length - 1) {
            container.appendChild(currentRow);
        }
    }
}