async function getGooglePhotos(queryParam, number) {
    let url = `http://steve.shadows-realms.ro:8525/api?pinterest=${queryParam}&num=${number}`;

    const conf = {
        method: 'GET'
    }

    try {
        const response = await fetch(url, conf);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

//not sync with backend