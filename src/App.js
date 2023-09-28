import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import PopupComponent from './components/popup/PopupComponent';
import SwiperImagesComponent from './components/slider-first/SwiperImagesComponent';
import AboutUsComponent from './components/o-nama/AboutUsComponent';

function App() {
  return (
    <div className="App">
      <PopupComponent/>
      <HeaderComponent/>
      <SwiperImagesComponent/>
      <AboutUsComponent/>
      
    </div>
  );
}

export default App;
