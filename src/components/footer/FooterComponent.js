import React from 'react'
import './FooterComponent.css';

const FooterComponent = () => {
  return (
    
    <footer>
        <div class="footerGore">
            <div class="prviDivlogo">
                <img src={require("../../images/Frame.png")} alt="LogoDvg"/>
            </div>

            <div class="drugiDivKontakt">
                <div class="naslov">D.V.G. COMPANY</div>
                <div class="divPodaci">
                    <div class="adresa">
                        <img src={require("../../images/adresa.png")} alt="adresa"/>
                        <div class="tekst">Čantavirski put bb 24000 Subotica, Srbija</div>
                    </div>
                    <div class="telefon">
                        <img src={require("../../images/telefon.png")} alt="telefon"/>
                        <div class="tekst">+381 24 568 555</div>
                    </div>
                    <div class="email">
                        <img src={require("../../images/email.png")} alt="email"/>
                        <div class="tekst">office@dvgcomapny.com</div>
                    </div>
                </div>
            </div>
            <div class="treciDivSadrzaj">
                <ul>
                    <li>O NAMA</li>
                    <li>DVG</li>
                    <li>PROIZVODI</li>
                    <li>BRENDOVI</li>
                    <li>DISTRIBUCIJA</li>
                    <li>SARADNJA</li>
                    <li>NOVOSTI</li>
                    <li>KONTAKT</li>
                </ul>
            </div>
            <div class="cetvrtiDivPracenje">
                <div class="naslov">
                    Pratite nas:
                </div>
                <div class="drustveneMrezeIkone">
                    <img src={require("../../images/facebook.png")} alt="fb"/>
                    <img src={require("../../images/twitter.png")} alt="twitter"/>
                    <img src={require("../../images/youtube.png")} alt="yt"/>
                    <img src={require("../../images/chat.png")} alt="chat"/>
                </div>
            </div>
        </div>


        <div class="footerDole">
            <div class="copyText">
                Copyright © 2021 DVG Company,
                Subotica d.o.o. Sva prava zadržana.
            </div>
            <div class="privatnost">
                Privatnost podatka
            </div>
            <div class="uslovi">
                Uslovi koriscenja
            </div>
            <div class="PS">
                <div class="powered">
                    Powered by:
                </div>
                <div class="studio">
                    StudioPresent
                </div>
            </div>
        </div>
    </footer>
    
  )
}

export default FooterComponent