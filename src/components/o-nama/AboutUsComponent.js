import React from 'react'
import './AboutUsComponent.css';


const AboutUsComponent = () => {
  return (
    <div class="divPosleSlajdova">
        <div class="slikaLevo">
            <img src={require("../../images/Rectangle 124.png")} alt="Rectangle 124"/>
        </div>

        <div class="textDesno">
            <div class="elementiGore">
                <div class="bigText">DVG Company</div>
                <div class="smallText">Veleprodaja i maloprodaja kozmetike i kućne hemije</div>
            </div>

            <div class="elementiDole">
                <p>DVG Company d.o.o. je trgovinsko preduzeće osnovano 2008. godine u Subotici.
                    Prvenstvena delatnost kompanije je veleprodaja kozmetike i kućne hemije.
                    U potpunosti je u privatnom vlasništvu, sa sedištem u Subotici.
                    Tu se nalazi distrubutivni centar i poslovne prostorije, sa ukupno 3000m2
                    magacinskog prostora koji zadovoljava sve segmente u pogledu smeštaja,
                    čuvanja i plasiranja robe.
                </p>

                <button class="btnOnama">Saznajte više o nama</button>
            </div>
        </div>
    </div>
  )
}

export default AboutUsComponent