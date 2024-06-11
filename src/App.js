
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Context from './context/Context';
import { configNavbar } from './config/config';
import styled from 'styled-components';

function App() {
  const [navigation, setNavigation] = useState('map')

  const providerValue = {
    navigation, setNavigation
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
