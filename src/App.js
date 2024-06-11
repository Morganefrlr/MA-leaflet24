
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Context from './context/Context';

function App() {
  const [navigation, setNavigation] = useState('map')
  const providerValue = {
    navigation, setNavigation
  }



  return (
    <div className="App">
      <Context.Provider value={providerValue}>
        <Navbar />
      </Context.Provider>
    </div>
  );
}

export default App;
