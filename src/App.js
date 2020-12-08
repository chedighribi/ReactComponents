import logo from './logo.svg';
import './App.css';
import ProfilPhoto from './components/profile/ProfilPhoto';
import FullName from './components/profile/FullName';
import Adress from './components/profile/Address'

function App() {
  return (
    <div className="App">
<ProfilPhoto />
<FullName />
<Adress />
    </div>
  );
}

export default App;
