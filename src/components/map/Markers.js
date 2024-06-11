
import { Marker, Popup } from 'react-leaflet';
import { fakeData } from '../../fakeData/fakeData';
import { Icon } from 'leaflet';

const Markers = () => {

    const customIcon = new Icon({
        iconUrl:'https://cdn-icons-png.flaticon.com/128/2776/2776067.png',
        iconSize:[40,40],
        iconAnchor: [20, 36]
    })
    return (
        <>
            {fakeData.map(city =>
                <Marker position={city.geocode} icon={customIcon}>
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