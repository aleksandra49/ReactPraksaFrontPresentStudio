import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import PopupComponent from './components/popup/PopupComponent';

function App() {
  return (
    <div className="App">
      <PopupComponent/>
      <HeaderComponent/>
      
    </div>
  );
}

export default App;
