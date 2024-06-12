
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Context from './context/Context';
import { configNavbar } from './config/config';
import styled from 'styled-components';
import { emptyData } from './fakeData/fakeData';
import { useCity } from './hooks/useCity';

function App() {
  const [navigation, setNavigation] = useState('map')
  const [capitalSelected, setCapitalSelected] = useState(emptyData)
  const [adminPanelSelected, setAdminPanelSelected] = useState('add')

  const {cities, setCities, handleDeleteCity,handleAddCity,handleEditCity} = useCity()

  
  const providerValue = {
    navigation, setNavigation,
    capitalSelected, setCapitalSelected,
    adminPanelSelected, setAdminPanelSelected,
    cities, setCities, handleDeleteCity,handleAddCity,handleEditCity

  }


  const displayContent = configNavbar.filter(el => el.click === navigation)

  return (
    <AppStyled>
      <Context.Provider value={providerValue}>
        <Navbar />
        {displayContent[0].Content}
      </Context.Provider>
    </AppStyled>
  );
}

const AppStyled = styled.div`


`
export default App;
