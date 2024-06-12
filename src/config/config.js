import Map from '../components/map/Map'
import ListCities from '../components/listCities/ListCities'
import EditCity from '../components/listCities/adminPanel/form/EditCity'
import AddCity from '../components/listCities/adminPanel/form/AddCity'



export const configNavbar = [
    {
        label: 'Carte',
        click: 'map',
        Content: <Map/>
    },
    {
        label: 'Liste des capitales',
        click: 'cities',
        Content:< ListCities/>
    }
]

export const adminPanelConfig = [
    {
        index:'edit',
        Content: <EditCity/>
    },
    {
        index:'add',
        Content: <AddCity />
    },
]

export const configInputs =(data, handleChange) => [
    {
        label: 'Capitale',
        name:'capital',
        value:data.capital,
        handleChange: handleChange

        
    },
    {
        label: 'Pays',
        name:'country',
        value:data.country,
        handleChange: handleChange

        
    },
    {
        label: 'Population',
        name:'population',
        value:data.population,
        handleChange: handleChange

        
    },
    {
        label: 'Latitude',
        name:'latitude',
        value:data.latitude,
        handleChange: handleChange

        
    },
    {
        label: 'Longitude',
        name:'longitude',
        value:data.longitude,
        handleChange: handleChange

        
    },

]