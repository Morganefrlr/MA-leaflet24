export const fakeData = [
    {
        id:'01',
        country:"France",
        capital:'Paris',
        population:'2 133 111',
        geocode:[48.85341, 2.3488],
        latitude: 48.85341,
        longitude: 2.3488
    },
    {
        id:'02',
        country:"Royaume-Unis",
        capital:'Londres',
        population:"8 799 728 ",
        geocode:[51.50853, -0.12574],
        latitude: 51.50853,
        longitude: -0.12574
    },
    {
        id:'03',
        country:"Allemagne",
        capital:'Berlin',
        population:"3 677 472 ",
        geocode:[52.52437, 13.41053],
        latitude: 52.52437,
        longitude: 13.41053
    },
    {
        id:'04',
        country:"Italie",
        capital:'Rome',
        population:"2 748 109",
        geocode:[41.89193, 12.51133],
        latitude: 41.89193,
        longitude:  12.51133
    },
    {
        id:'05',
        country:"Espagne",
        capital:'Madrid',
        population:"3 332 035",
        geocode:[40.4165, -3.70256],
        latitude: 40.4165,
        longitude: -3.70256
    },
]

export const emptyData = {
    id:'00',
    country:"",
    capital:'',
    population:"",
    geocode:[0, 0],
    latitude: '',
    longitude: ''
}


export const createCity = (capitalSelected) => [{
    id:capitalSelected.id ? capitalSelected.id : (Date.now()).toString(),
    country:capitalSelected.country,
    capital:capitalSelected.capital,
    population:capitalSelected.population,
    geocode:[parseFloat(capitalSelected.latitude),parseFloat(capitalSelected.longitude)],
    latitude: capitalSelected.latitude,
    longitude: capitalSelected.longitude
}]