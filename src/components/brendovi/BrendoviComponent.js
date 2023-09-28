import React from 'react'
import './BrendoviComponent.css';

const BrendoviComponent = () => {
  return (
    <div class="zadnjiDivSaBrendovima">
        <p class="tekstiznadBrendova">Istaknuti brendovi za koje radimo distribuciju</p>

        <div class="brendoviSlike">
            <div class="brend">

                <img src={require("../../images/logoi-04.png")} alt=""/>
                <p>Dove</p>
            </div>
            <div class="brend">
                <img src={require("../../images/logoi-03.png")} alt=""/>
                <p>Nivea</p>
            </div>
            <div class="brend">
                <img src={require("../../images/logoi-05.png")} alt=""/>
                <p>Palmolive</p>
            </div>
            <div class="brend">
                <img src={require("../../images/logoi-01.png")} alt=""/>
                <p>Vanish</p>
            </div>
            <div class="brend">
                <img src={require("../../images/logoi-02.png")} alt=""/>
                <p>Ajax</p>
            </div>
            <div class="brend">
                <img src={require("../../images/logoi-06.png")} alt=""/>
                <p>Cif</p>
            </div>
        </div>

        <button class="btn">
            <p>Svi brendovi u našem portfoliju</p>
        </button>
    </div>
  )
}

export default BrendoviComponent