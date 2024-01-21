
window.onload = async function () {
    try {
        
        let res = await requestCampanhas();
        let resN = await requestNoticias();


        populateCampanha(res.campanhas);
        populateNoticias(resN.noticias);
        populateRecentNews(resN.noticias);
        
        
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

function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}


function populateCampanha(campanhas) {
    let container = document.getElementById("campanha-container");

    // Slice the array to only include the first 3 campaigns
    let limitedCampanhas = campanhas.slice(0, 3);

    for (let i = 0; i < limitedCampanhas.length; i++) {
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
        img.src = limitedCampanhas[i].campanha_img;
        img.setAttribute("class", "custom-block-image img-fluid");
        img.setAttribute("height", "300");
        /*
        let img = document.createElement("img");
        img.src = limitedCampanhas[i].campanha_img;
        img.setAttribute("class", "custom-block-image img-fluid");
        */
        let customBlock = document.createElement("div");
        customBlock.setAttribute("class", "custom-block");

        let customBlockBody = document.createElement("div");
        customBlockBody.setAttribute("class", "custom-block-body");

        let h5 = document.createElement("h5");
        h5.setAttribute("class", "mb-3");
        h5.id = "titOrg";
        h5.textContent = limitedCampanhas[i].org_name;

        let h6TitCampanha = document.createElement("h6");
        h6TitCampanha.setAttribute("class", "mb-3");
        h6TitCampanha.id = "titCampanha";
        h6TitCampanha.textContent = limitedCampanhas[i].nome_evento;

        let p1 = document.createElement("p");
        p1.textContent = limitedCampanhas[i].campanha_observacao;

        let h6Requesitos = document.createElement("h6");
        h6Requesitos.setAttribute("class", "mb-3");
        h6Requesitos.id = "titCampanha";
        h6Requesitos.textContent = "Requesitos";

        let strongNecessidades = document.createElement("strong");

        let p2 = document.createElement("p");
        p2.innerHTML = `<strong>Necessidades:</strong> ${limitedCampanhas[i].campanha_necessidade}`;

        let p3 = document.createElement("p");
        p3.innerHTML = `<strong>Voluntarios:</strong> ${limitedCampanhas[i].campanha_voluntario}`;

        let dFlexContainer = document.createElement("div");
        dFlexContainer.setAttribute("class", "d-flex align-items-center my-2");

        let pStart = document.createElement("p");
        pStart.setAttribute("class", "mb-0");
        pStart.innerHTML = `<strong>Comeca:</strong> ${formatDate(limitedCampanhas[i].data_inicio)}`;

        let pEnd = document.createElement("p");
        pEnd.setAttribute("class", "ms-auto mb-0");
        pEnd.innerHTML = `<strong>Acaba:</strong> ${formatDate(limitedCampanhas[i].data_termino)}`;

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
        if (i % 3 === 2 || i === limitedCampanhas.length - 1) {
            container.appendChild(currentRow);
        }
    }
}



function populateNoticias(noticias) {
    let container = document.getElementById("noticias-container");

    // Slice the array to only include the first 2 items
    let limitedContent = noticias.slice(0, 2);

    for (let i = 0; i < limitedContent.length; i++) {
        let colDiv = document.createElement("div");
        colDiv.setAttribute("class", "col-lg-7 col-12");

        let newsBlock = document.createElement("div");
        newsBlock.setAttribute("class", "news-block");

        let newsBlockTop = document.createElement("div");
        newsBlockTop.setAttribute("class", "news-block-top");

        let imageLink = document.createElement("a");
        imageLink.href = "news-detail.html";

        let img = document.createElement("img");
        img.src = limitedContent[i].noticia_img;
        img.setAttribute("class", "news-image img-fluid");
        img.alt = "";

        imageLink.appendChild(img);

        let newsCategoryBlock = document.createElement("div");
        newsCategoryBlock.setAttribute("class", "news-category-block");

        // Assuming you have an array of categories in limitedContent[i].categories
        /*
        for (let category of limitedContent[i].categories) {
            let categoryLink = document.createElement("a");
            categoryLink.href = "#";
            categoryLink.setAttribute("class", "category-block-link");
            categoryLink.textContent = category;
            newsCategoryBlock.appendChild(categoryLink);
        }
        */

        newsBlockTop.appendChild(imageLink);
        newsBlockTop.appendChild(newsCategoryBlock);

        let newsBlockInfo = document.createElement("div");
        newsBlockInfo.setAttribute("class", "news-block-info");

        let newsBlockDate = document.createElement("div");
        newsBlockDate.setAttribute("class", "d-flex mt-2");

        let dateParagraph = document.createElement("p");
        dateParagraph.innerHTML = `<i class="bi-calendar4 custom-icon me-1"></i>${formatDate(limitedContent[i].noticia_date)}`;

        newsBlockDate.appendChild(dateParagraph);

        let authorBlock = document.createElement("div");
        authorBlock.setAttribute("class", "news-block-author mx-5");

        let authorParagraph = document.createElement("p");
        authorParagraph.innerHTML = `<i class="bi-person custom-icon me-1"></i> ${limitedContent[i].org_name}`;

        authorBlock.appendChild(authorParagraph);

        newsBlockDate.appendChild(authorBlock);

        let titleBlock = document.createElement("div");
        titleBlock.setAttribute("class", "news-block-title mb-2");

        let titleLink = document.createElement("h4");
        let titleAnchor = document.createElement("a");
        titleAnchor.href = "news-detail.html";
        titleAnchor.setAttribute("class", "news-block-title-link");
        titleAnchor.textContent = limitedContent[i].noticia_title;

        titleLink.appendChild(titleAnchor);
        titleBlock.appendChild(titleLink);

        let bodyBlock = document.createElement("div");
        bodyBlock.setAttribute("class", "news-block-body");

        let bodyParagraph = document.createElement("p");
        bodyParagraph.textContent = limitedContent[i].noticia_descricao;

        bodyBlock.appendChild(bodyParagraph);

        newsBlockInfo.appendChild(newsBlockDate);
        newsBlockInfo.appendChild(titleBlock);
        newsBlockInfo.appendChild(bodyBlock);

        newsBlock.appendChild(newsBlockTop);
        newsBlock.appendChild(newsBlockInfo);

        colDiv.appendChild(newsBlock);
        container.appendChild(colDiv);
    }
}

function populateRecentNews(noticias) {
    let container = document.getElementById("recent-news-container");

    // Sort noticias array based on noticia_date in descending order
    noticias.sort((a, b) => new Date(b.noticia_date) - new Date(a.noticia_date));

    // Show only the first 2 recent news
    let recentNewsData = noticias.slice(0, 2);

    for (let i = 0; i < recentNewsData.length; i++) {
        let colDiv = document.createElement("div");
        colDiv.setAttribute("class", "col-lg-4 col-12 mx-auto");

        let newsBlock = document.createElement("div");
        newsBlock.setAttribute("class", "news-block news-block-two-col d-flex mt-4");

        let imageWrap = document.createElement("div");
        imageWrap.setAttribute("class", "news-block-two-col-image-wrap");

        let imageLink = document.createElement("a");
        imageLink.href = "news-detail.html";

        let img = document.createElement("img");
        img.src = recentNewsData[i].noticia_img;
        img.setAttribute("class", "news-image img-fluid");
        img.alt = "";

        imageLink.appendChild(img);
        imageWrap.appendChild(imageLink);

        let infoDiv = document.createElement("div");
        infoDiv.setAttribute("class", "news-block-two-col-info");

        let titleDiv = document.createElement("div");
        titleDiv.setAttribute("class", "news-block-title mb-2");

        let titleLink = document.createElement("h6");
        let titleAnchor = document.createElement("a");
        titleAnchor.href = "news-detail.html";
        titleAnchor.setAttribute("class", "news-block-title-link");
        titleAnchor.textContent = recentNewsData[i].noticia_title;

        titleLink.appendChild(titleAnchor);
        titleDiv.appendChild(titleLink);

        let dateDiv = document.createElement("div");
        dateDiv.setAttribute("class", "news-block-date");

        let dateParagraph = document.createElement("p");
        dateParagraph.innerHTML = `<i class="bi-calendar4 custom-icon me-1"></i>${formatDate(recentNewsData[i].noticia_date)}`;

        dateDiv.appendChild(dateParagraph);

        infoDiv.appendChild(titleDiv);
        infoDiv.appendChild(dateDiv);

        newsBlock.appendChild(imageWrap);
        newsBlock.appendChild(infoDiv);

        colDiv.appendChild(newsBlock);
        container.appendChild(colDiv);
    }
}



/*
function populateRecentNews(noticias) {
    let container = document.getElementById("recent-news-container");

    // Show only the first 2 items
    let limitedNewsData = noticias.slice(0, 2);

    for (let i = 0; i < limitedNewsData.length; i++) {
        let colDiv = document.createElement("div");
        colDiv.setAttribute("class", "col-lg-4 col-12 mx-auto");

        let newsBlock = document.createElement("div");
        newsBlock.setAttribute("class", "news-block news-block-two-col d-flex mt-4");

        let imageWrap = document.createElement("div");
        imageWrap.setAttribute("class", "news-block-two-col-image-wrap");

        let imageLink = document.createElement("a");
        imageLink.href = "news-detail.html";

        let img = document.createElement("img");
        img.src = limitedNewsData[i].noticia_img;
        img.setAttribute("class", "news-image img-fluid");
        img.alt = "";

        imageLink.appendChild(img);
        imageWrap.appendChild(imageLink);

        let infoDiv = document.createElement("div");
        infoDiv.setAttribute("class", "news-block-two-col-info");

        let titleDiv = document.createElement("div");
        titleDiv.setAttribute("class", "news-block-title mb-2");

        let titleLink = document.createElement("h6");
        let titleAnchor = document.createElement("a");
        titleAnchor.href = "news-detail.html";
        titleAnchor.setAttribute("class", "news-block-title-link");
        titleAnchor.textContent = limitedNewsData[i].noticia_title;

        titleLink.appendChild(titleAnchor);
        titleDiv.appendChild(titleLink);

        let dateDiv = document.createElement("div");
        dateDiv.setAttribute("class", "news-block-date");

        let dateParagraph = document.createElement("p");
        dateParagraph.innerHTML = `<i class="bi-calendar4 custom-icon me-1"></i>${formatDate(limitedNewsData[i].noticia_date)}`;

        dateDiv.appendChild(dateParagraph);

        infoDiv.appendChild(titleDiv);
        infoDiv.appendChild(dateDiv);

        newsBlock.appendChild(imageWrap);
        newsBlock.appendChild(infoDiv);

        colDiv.appendChild(newsBlock);
        container.appendChild(colDiv);
    }
}





/*

---------CAMPANHAS--------------


<section id="campanha-container"></section>

<div class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
    <div class="custom-block-wrap">
        <img src="images/causes/group-african-kids-paying-attention-class.jpg"
            class="custom-block-image img-fluid" alt="">

        <div class="custom-block">
            <div class="custom-block-body">
                <h5 class="mb-3" id="titOrg">Organization</h5>
                <h6 class="mb-3" id="titCampanha">Children Education</h6>

                <p>Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito</p>

                <h6 class="mb-3" id="titCampanha">Requesitos</h6>

                <p><Strong>Necessidades:</Strong> Arroz, massa, roupa.</p>
                <p><Strong>Voluntarios:</Strong> 10</p>

                <div class="d-flex align-items-center my-2">
                    <p class="mb-0">
                        <strong>Comeca:</strong>
                        21-10-2022
                    </p>

                    <p class="ms-auto mb-0">
                        <strong>Acaba:</strong>
                        21-11-2022
                    </p>
                </div>
            </div>

            <a href="donate.html" class="custom-btn btn">Donate</a>
    
        </div>
    </div>
</div>

-------------NOTICIAS---------


<div class="col-lg-7 col-12">
                        <div class="news-block">
                            <div class="news-block-top">
                                <a href="news-detail.html">
                                    <img src="images/news/medium-shot-volunteers-with-clothing-donations.jpg"
                                        class="news-image img-fluid" alt="">
                                </a>

                                <div class="news-category-block">
                                    <a href="#" class="category-block-link">
                                        Lifestyle,
                                    </a>

                                    <a href="#" class="category-block-link">
                                        Clothing Donation
                                    </a>
                                </div>
                            </div>

                            <div class="news-block-info">
                                <div class="d-flex mt-2">
                                    <div class="news-block-date">
                                        <p>
                                            <i class="bi-calendar4 custom-icon me-1"></i>
                                            October 12, 2036
                                        </p>
                                    </div>

                                    <div class="news-block-author mx-5">
                                        <p>
                                            <i class="bi-person custom-icon me-1"></i>
                                            By Admin
                                        </p>
                                    </div>

                            
                                </div>

                                <div class="news-block-title mb-2">
                                    <h4><a href="news-detail.html" class="news-block-title-link">Clothing donation to
                                            urban area</a></h4>
                                </div>

                                <div class="news-block-body">
                                    <p>Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito
                                        Professional charity theme based on Bootstrap</p>
                                </div>
                            </div>
                        </div>
*/