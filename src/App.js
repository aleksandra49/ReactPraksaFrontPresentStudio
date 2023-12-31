import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/header/HeaderComponent';
import PopupComponent from './components/popup/PopupComponent';
import SwiperImagesComponent from './components/slider-first/SwiperImagesComponent';
import AboutUsComponent from './components/o-nama/AboutUsComponent';
import ParallaxComponent from './components/parallax/ParallaxComponent';
import PonudaComponent from './components/ponuda/PonudaComponent';
import StatistikaComponent from './components/statistika/StatistikaComponent';
import NasiProizvodiComponent from './components/nasi-proizvodi/NasiProizvodiComponent';
import BrendoviComponent from './components/brendovi/BrendoviComponent';
import FooterComponent from './components/footer/FooterComponent';

function App() {
  return (
    <div className="App">
      <PopupComponent/>
      <HeaderComponent/>
      <SwiperImagesComponent/>
      <AboutUsComponent/>
      <ParallaxComponent/>
      <PonudaComponent/>
      <StatistikaComponent/>
      <NasiProizvodiComponent/>
      <BrendoviComponent/>
      <FooterComponent/>
      
    </div>
  );
}

export default App;
