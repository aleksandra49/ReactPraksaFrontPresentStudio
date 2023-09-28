import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import PopupComponent from './components/popup/PopupComponent';
import SwiperImagesComponent from './components/slider-first/SwiperImagesComponent';

function App() {
  return (
    <div className="App">
      <PopupComponent/>
      <HeaderComponent/>
      <SwiperImagesComponent/>
      
    </div>
  );
}

export default App;
