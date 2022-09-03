async function getNews(url) {
    // const result = document.getElementById("result");
    return fetch(url)
        .then((response) => response.text())
        .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
        .then((data) => {
            return data;
        });

}

async function loadNews() {
    const url = [
        "https://www.cnnindonesia.com/nasional/rss",
        // "https://www.vice.com/id_id/rss",
        // "https://mediaindonesia.com/feed"
    ];
    let result = "";
    data = await getNews(url);
    for (let i = 0; i < 5; i++) {

        // console.log(data);

        // console.log(data.getElementsByTagName("title")[0])

        // source = data.querySelectorAll("image")[i].querySelector("url").textContent;
        link = data.querySelectorAll("item")[i].querySelector('link').textContent;
        imagesrc = data.querySelectorAll("item")[i].querySelector('enclosure').getAttribute('url');

        // document.getElementById("news-img").setAttribute("src", imagesrc);
        // document.getElementById("news-title").innerHTML = `${data[i].querySelectorAll("item")[i].querySelector('title').textContent}`;
        // document.getElementById("news-desc").innerHTML = `${data[i].querySelectorAll("item")[i].childNodes[11].textContent}`;
        // document.getElementById("news-desc").setAttribute("href", link);

        result += `<div class="card" style="width: 18rem;">` +
            `<img src="${imagesrc}" class="card-img-top" id="news-img" alt="...">` +
            `<div class="card-body">` +
            `<h5 class="card-title" id="news-title">${data.querySelectorAll("item")[i].querySelector('title').textContent}</h5>` +
            `<p class="card-text" id="news-desc">${data.querySelectorAll("item")[i].childNodes[11].textContent}</p>` +
            `<a href="${link}" class="btn btn-primary" id="news-link">Selengkapnya</a>` +
            `</div>` +
            `</div>`;

        document.getElementById("result").innerHTML = result;

        // console.log(data[i].querySelector("item").childNodes[11].innerHTML)
        // result.innerHTML = `<img src='${source}' width='50' />` +
        //     `<p>${data[i].querySelector("item").querySelector('title').textContent}</p>` +
        //     `<img src='${imagesrc}' />`;
    }
}

loadNews();

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