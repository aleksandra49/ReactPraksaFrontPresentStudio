import React, { useState, useEffect } from 'react'
import './PopupComponent.css';

const PopupComponent = () => {

    useEffect(() => {
      setTimeout(() => {showPopup();}, 4000);
    }, []);
  
    function showPopup() {
      var popup = document.getElementById("popup");
      popup.style.display = "block";
    }
  
    function closePopup() {
      var popup = document.getElementById("popup");
      popup.style.display = "none";
    }

  return (

    <div class="popup-container" id="popup">
      <span class="close-button" onClick={closePopup}>&#10006;</span>
      <img src={require("../../images/popup8.jpg")} alt="Popup Slika" class="popup-image" />
      <div class="popup-textDvg">
        <p>DVG Company</p>
      </div>
      <div class="popup-text">
        <p>Kupovinom u našoj radnji ostvarujete popust od 15% popusta pri prvoj kupovini!</p>
      </div>
    </div>
  )
}

export default PopupComponent
