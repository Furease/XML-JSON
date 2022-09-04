async function getGempa(url) {
    return fetch(url)
        .then((response) => {
            return response.json();
        })
}

async function loadGempa() {
    const url = "https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json";
    const data = await getGempa(url);

    const gempa = data.Infogempa.gempa;
    console.log(gempa)
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
            `<td>${gempa[i].Tanggal}</td>` +
            `<td>${gempa[i].Jam}</td>` +
            `<td>${gempa[i].DateTime}</td>` +
            `<td>${gempa[i].Coordinates}</td>` +
            `<td>${gempa[i].Lintang}</td>` +
            `<td>${gempa[i].Bujur}</td>` +
            `<td>${gempa[i].Magnitude}</td>` +
            `<td>${gempa[i].Kedalaman}</td>` +
            `<td>${gempa[i].Wilayah}</td>` +
            `<td>${gempa[i].Potensi}</td>` +
            `</tr>`;
    }
    result += `<tbody>`;
    document.getElementById("table").innerHTML = result;
}

loadGempa();