async function getNews(url) {
    return fetch(url)
        .then((response) => response.text())
        .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
        .then((data) => {
            return data;
        });

}

async function loadNews() {
    const url = "https://www.cnnindonesia.com/nasional/rss";

    let result = "";
    data = await getNews(url);

    result = `<h3>CNN Indonesia</h3>`;

    for (let i = 0; i < 5; i++) {
        // source = data.querySelectorAll("image")[i].querySelector("url").textContent;
        link = data.querySelectorAll("item")[i].querySelector('link').textContent;
        image = data.querySelectorAll("item")[i].querySelector('enclosure').getAttribute('url');
        title = data.querySelectorAll("item")[i].querySelector('title').textContent;
        desc = data.querySelectorAll("item")[i].childNodes[11].textContent;
        date = data.querySelectorAll("item")[i].querySelector("pubDate").textContent;

        result += `<div class="card border-dark mb-3 col" style="width: 25rem;">` +
            `<img src="${image}" class="card-img-top" alt="...">` +
            `<div class="card-body">` +
            `<h5 class="card-title">${title}</h5>` +
            `<p class="card-text">${desc}</p>` +
            `<a href="${link}" class="btn btn-primary">Selengkapnya</a>` +
            `</div>` +
            `<div class="card-footer">${date}</div>` +
            `</div>`;
    }

    document.getElementById("result").innerHTML = result;
}

async function loadNews2() {
    const url = "https://www.vice.com/id_id/rss"
    let result = "";
    data = await getNews(url);
    result = `<h3>VICE</h3>`;


    for (let i = 0; i < 5; i++) {

        // source = data.querySelectorAll("image")[i].querySelector("url").textContent;
        link = data.querySelectorAll("item")[i].querySelector('link').textContent;
        image = data.querySelectorAll("item")[i].querySelector('enclosure').getAttribute('url');
        title = data.querySelectorAll("item")[i].querySelector('title').textContent;
        desc = data.querySelectorAll("item")[i].querySelector('description').textContent;
        date = data.querySelectorAll("item")[i].querySelector("pubDate").textContent;


        result += `<div class="card border-dark mb-3 col" style="width: 25rem;">` +
            `<img src="${image}" class="card-img-top" alt="...">` +
            `<div class="card-body">` +
            `<h5 class="card-title">${title}</h5>` +
            `<p class="card-text">${desc}</p>` +
            `<a href="${link}" class="btn btn-primary">Selengkapnya</a>` +
            `</div>` +
            `<div class="card-footer">${date}</div>` +
            `</div>`;
    }
    document.getElementById("result-2").innerHTML = result;

}

async function loadNews3() {
    const url = "https://mediaindonesia.com/feed";
    let result = "";
    data = await getNews(url);
    result = `<h3>Media Indonesia</h3>`;


    for (let i = 0; i < 5; i++) {

        // source = data.querySelectorAll("image")[i].querySelector("url").textContent;
        link = data.querySelectorAll("item")[i].querySelector('link').textContent;
        image = data.querySelectorAll("item")[i].childNodes[15].getAttribute('url');
        title = data.querySelectorAll("item")[i].querySelector('title').textContent;
        desc = data.querySelectorAll("item")[i].querySelector('description').textContent;
        date = data.querySelectorAll("item")[i].querySelector("pubDate").textContent;


        result += `<div class="card border-dark mb-3 col" style="width: 25rem;">` +
            `<img src="${image}" class="card-img-top" alt="...">` +
            `<div class="card-body">` +
            `<h5 class="card-title">${title}</h5>` +
            `<p class="card-text">${desc}</p>` +
            `<a href="${link}" class="btn btn-primary">Selengkapnya</a>` +
            `</div>` +
            `<div class="card-footer">${date}</div>` +
            `</div>`;
    }
    document.getElementById("result-3").innerHTML = result;

}

loadNews();
loadNews2();
loadNews3();





async function getGempa(url) {
    return fetch(url)
        .then((response) => {
            return response.json();
        })
}

async function loadGempa() {
    const url = "https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json";
    const gempa = await getGempa(url);
    console.log(gempa);
}