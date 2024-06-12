import styled from 'styled-components';
import AdminPanel from './adminPanel/AdminPanel';
import { useContext } from 'react';
import Context from '../../context/Context';
import CardPanel from './cardPanel/CardPanel';


const ListCities = () => {
  
    const {handleDeleteCity, cities,setCapitalSelected, setAdminPanelSelected} = useContext(Context)

    const handleDeleteCard = (capital, country) =>{
        handleDeleteCity(capital, country)
    }

    const handleOpenFormCity = (city) => {
        setAdminPanelSelected("edit") 
        setCapitalSelected(city)
    }

    return (
        <ListCitiesStyled>
            <h1>Liste des capitales</h1>
            <div className='containerList'>
                <AdminPanel />
                <CardPanel cities={cities} handleDelete={handleDeleteCard} handleOpenFormCity={handleOpenFormCity}/>
             </div>
            
        </ListCitiesStyled>
    );
};

const ListCitiesStyled = styled.div`
        height:90vh;
        width: 90vw;
        margin: 20px auto;

        h1{
            text-align:center;
            color: #5c746c;
        }

        .containerList{
            display: flex;
            justify-content: space-evenly;
            padding-top: 40px;
        }
`
export default ListCities;