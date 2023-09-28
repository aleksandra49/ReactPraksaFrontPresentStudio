import React from 'react'
import './PonudaComponent.css';

const PonudaComponent = () => {
  return (
    <div class="triSlike">
        <div>
            <img class="slika" src={require("../../images/Rectangle1.png")} alt="slika1"/>
            <p>POSTANITE NAŠ PARTNER</p>
        </div>

        <div>
            <img class="slika" src={require("../../images/Rectangle2.png")} alt="slika2"/>
            <p>NAŠI PROIZVODI</p>
        </div>

        <div>
            <img class="slika" src={require("../../images/Rectangle3.png")} alt="slika3"/>
            <p>UVOZ IZ MADJARSKE</p>
        </div>
    </div>
  )
}

export default PonudaComponent