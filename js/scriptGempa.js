async function getGempa(url) {
    return fetch(url)
        .then((response) => {
            return response.json();
        })
}

async function loadGempa() {
    const url = "https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json";
    const data = await getGempa(url);
    // const gempa = JSON.parse(data);
    console.log(data.Infogempa.gempa[0]);
    result = `<table class="table">` +
        `<thead>` +
        `<tr>` +
        `<th scope="col">No</th>` +
        `<th scope="col">Tanggal</th>` +
        `<th scope="col">Jam</th>` +
        `<th scope="col">DateTime</th>` +
        `<th scope="col">Koordinat</th>` +
        `<th scope="col">Lintang</th>` +
        `<th scope="col">Bujur</th>` +
        `<th scope="col">Magnitudo</th>` +
        `<th scope="col">Kedalaman</th>` +
        `<th scope="col">Wilayah</th>` +
        `<th scope="col">Potensi Tsunami</th>` +
        `</tr>` +
        `</thead>` +
        `<tbody>`;

    for (let i = 0; i < 15; i++) {
        result += `<tr>` +
            `<th scope="row">${i+1}</th>` +
            `<td>${data.Infogempa.gempa[i].Tanggal}</td>` +
            `<td>${data.Infogempa.gempa[i].Jam}</td>` +
            `<td>${data.Infogempa.gempa[i].DateTime}</td>` +
            `<td>${data.Infogempa.gempa[i].Coordinates}</td>` +
            `<td>${data.Infogempa.gempa[i].Lintang}</td>` +
            `<td>${data.Infogempa.gempa[i].Bujur}</td>` +
            `<td>${data.Infogempa.gempa[i].Magnitude}</td>` +
            `<td>${data.Infogempa.gempa[i].Kedalaman}</td>` +
            `<td>${data.Infogempa.gempa[i].Wilayah}</td>` +
            `<td>${data.Infogempa.gempa[i].Potensi}</td>` +
            `</tr>`;
    }
    result += `<tbody>`;
    document.getElementById("table").innerHTML = result;
}

loadGempa();