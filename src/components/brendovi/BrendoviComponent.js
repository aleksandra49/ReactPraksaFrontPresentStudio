import React, { useState, useEffect }  from 'react'
import './BrendoviComponent.css';
import LoadDataService from '../../services/LoadDataService';
//import brendoviData from './brendoviData.json'; 

const BrendoviComponent = () => {

    const [brendovi, setBrendovi] = useState([]);


    useEffect(() => {
      loadDataFromJSON();
    }, [])

    const loadDataFromJSON = () =>{
        LoadDataService.loadData().then(response =>{
            setBrendovi(response);
          }).catch((error) =>{
            console.log("error ", error );
          })
    }

  return (
    <div class="zadnjiDivSaBrendovima">
        <p class="tekstiznadBrendova">Istaknuti brendovi za koje radimo distribuciju</p>

        <div class="brendoviSlike">

        {
            brendovi.map(
                brend =>
                <div class="brend" key={brend.id}>
                    <img src={brend.imageSrc} alt=""/>
                    {/* <img src={require(`${brend.imageSrc}`)} alt=""/> */}
                    <p>{brend.naziv}</p>
                </div>
                
            )
        }
{/* 
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
            </div> */}
        </div>

        <button class="btn">
            <p>Svi brendovi u našem portfoliju</p>
        </button>
    </div>
  )
}

export default BrendoviComponent