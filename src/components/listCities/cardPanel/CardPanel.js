
import Card from './Card';
import styled from 'styled-components';

const CardPanel = ({cities,handleDelete,handleOpenFormCity}) => {
    return (
        <CardPanelStyled>
            {cities.map(city =>
                <Card city={city} key={city.capital} handleDelete={handleDelete} handleOpenFormCity={handleOpenFormCity}/>
            )}
        </CardPanelStyled>
    );
};

const CardPanelStyled = styled.div`
    display: grid;
    width: 420px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;

`
export default CardPanel;