import { useState } from 'react';
import Home from './pages/home';
import LoadingScreen from './components/loadingScreen/loadingScreen';


function App() {
  const [isBooting, setIsBooting] = useState(true)

  return (
    <>
      {isBooting ? (
        <LoadingScreen onComplete = {() => setIsBooting(false)} />
      ) :(
        <Home />
      )}
    </>
  )
}

export default App
