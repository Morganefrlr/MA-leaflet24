import { useContext } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import styled from 'styled-components';
import Markers from './Markers';
import Context from '../../context/Context';
import { LocateControl } from './configCurrentLoc';



const Map = () => {

    const {cities} = useContext(Context)
    return (
        <MapStyled>
            <MapContainer center={[48.866667,2.333333]} zoom={4} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                <Markers cities={cities}/>
                <LocateControl position="topright" />
            </MapContainer>
        </MapStyled>

    );
};
const MapStyled = styled.div`
    .leaflet-container{
        height:90vh;
        width: 90vw;
        margin: auto;
    }
    .popup{
        font-size: 12px;
        font-weight: 500;
        strong{
            font-size: 18px;
            color: #74c4a4;
        }
    }


`
export default Map;