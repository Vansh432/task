import { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import SocketScreen from './components/SocketScreen';

function App() {
  const [screen, setScreen] = useState<'login' | 'signup' | 'socket'>('login');

  return (
    <div style={{ padding: 20 }}>
      <div>
        <button onClick={() => setScreen('login')}>Login</button>
        <button onClick={() => setScreen('signup')}>Signup</button>
        <button onClick={() => setScreen('socket')}>Socket Screen</button>
      </div>
      {screen === 'login' && <Login />}
      {screen === 'signup' && <Signup />}
      {screen === 'socket' && <SocketScreen />}
    </div>
  );
}

export default App;
