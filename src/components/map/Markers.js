
import { Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

const Markers = ({cities}) => {

    const customIcon = new Icon({
        iconUrl:'https://cdn-icons-png.flaticon.com/128/2776/2776067.png',
        iconSize:[40,40],
        iconAnchor: [20, 36]
    })

    return (
        <>
            {cities.map(city =>
                <Marker position={city.geocode} icon={customIcon} key={city.capital}>
                    <Popup className='popup'>
                        <strong>{city.capital}</strong> <br />
                        <em>Population: </em>{city.population}
                    </Popup>
                </Marker>
            )}
        </>
    );
};

export default Markers;