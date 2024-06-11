import Map from '../components/map/Map'
import ListCities from '../components/listCities/ListCities'


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