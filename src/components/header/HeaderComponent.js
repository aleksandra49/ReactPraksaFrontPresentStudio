import React, {useEffect} from 'react'
import './HeaderComponent.css';
const HeaderComponent = () => {

        // const burgerIcon = document.querySelector('.burger');
        // const closeIcon = document.querySelector('.close-icon');
        // const jeziciLinks = document.querySelector('.jezici');
        // const navLinks = document.querySelector('.nav-links');

        useEffect(() => {
          setIcons();
          toggleDarkModeFunc();
          window.addEventListener('resize', setIcons);
          
        }, [])
        
      //   function toggleDarkMode() {
      //     // var element = document.body;
      //     document.body.classList.toggle("dark-mode");
      //     console.log("sadasdasd")
      // }
  

      const toggleDarkModeFunc = () =>{
        
        var modeToggle = document.getElementById("modeToggle");
        const body = document.body;
        let isDarkModeEnabled = false;
        if(isDarkModeEnabled){
          body.classList.add('dark-mode');
        }
        modeToggle.addEventListener("change", function(){
        //   if (localStorage.getItem("darkMode") === "enabled") {
        //     modeToggle.checked = true;
        //     toggleDarkMode();
        // }
        if(this.checked){
          body.classList.add('dark-mode');
          isDarkModeEnabled = true;
        }else{
          body.classList.remove('dark-mode');
          isDarkModeEnabled = false;
        }
          // toggleDarkMode();
        });
        
      }

      // Funkcija za postavljanje ikonica na osnovu širine ekrana
      function setIcons() {
        const windowWidth = window.innerWidth;
        const burgerIcon = document.querySelector('.burger');
        const closeIcon = document.querySelector('.close-icon');
        const jeziciLinks = document.querySelector('.jezici');
        const navLinks = document.querySelector('.nav-links');

        if (windowWidth <= 900) {
            burgerIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        } else {
            burgerIcon.style.display = 'none';
            closeIcon.style.display = 'none';
        }

        burgerIcon.addEventListener('click', () => {
          jeziciLinks.classList.toggle('show');
          navLinks.classList.toggle('show');
          burgerIcon.style.display = 'none';
          closeIcon.style.display = 'block';
      });

      closeIcon.addEventListener('click', () => {
          jeziciLinks.classList.toggle('show');
          navLinks.classList.toggle('show');
          burgerIcon.style.display = 'block';
          closeIcon.style.display = 'none';
      });

      
    }
  return (
    <>
    <header class="header">
        <div class="div1">
            <div class="logo">
                <img src={require("../../images/logo.png")} alt="logo" />
            </div>
            
            <label class="switch">
                <input type="checkbox" id="modeToggle"/>
                <span class="slider"></span>
            </label>
            
            <div class="burger"> &#x2630;</div>
            <div class="close-icon">&#x2716;</div>

            <div class="jezici">
                <ul>
                    <li>
                        <a href="#" class="active">Srpski</a>
                    </li>
                    <li>
                        <a href="#">English</a>
                    </li>
                    <li>
                        <a href="#">Magyar</a>
                    </li>
                </ul>
            </div>
        </div>
        <nav class="navbar">
            <ul class="nav-links">
                <li class="prviItem">
                    <h4 class="prvi">O NAMA</h4>
                    <p>vizija za uspeh</p>
                </li>
                <li>
                    <h4>DVG PROIZVODI</h4>
                    <p>nasi proizvodi</p>
                </li>
                <li class="brend">
                    <h4>BRENDOVI</h4>
                    <p>koje zastupamo</p>
                </li>
                <li>
                    <h4>DISTRIBUCIJA </h4>
                    <p>logistika i operativa </p>
                </li>
                <li>
                    <h4>SARADANJA </h4>
                    <p>prosirenje ponude</p>
                </li>
                <li>
                    <h4>NOVOSTI</h4>
                    <p>aktuelnosti</p>
                </li>
                <li>
                    <h4>KONTAKT</h4>
                    <p>kontaktirajte nas</p>
                </li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default HeaderComponent