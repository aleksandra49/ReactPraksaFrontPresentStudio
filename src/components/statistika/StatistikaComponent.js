import React from 'react'
import './StatistikaComponent.css';

const StatistikaComponent = () => {
  return (
    <div class="naslovDVG">
        <p class="dvg">DVG Company</p>

        <p class="brojke">u brojkama</p>

        <div class="statistikaBrojke">
            <ul>
                <li>
                    <p class="broj">3.000 m2</p>
                    <p>Magacionskog prostora</p>
                </li>
                <li>
                    <p class="broj">20</p>
                    <p>Vozila </p>
                </li>
                <li>
                    <p class="broj">8</p>
                    <p>Komercijalista </p>
                </li>
                <li>
                    <p class="broj">170</p>
                    <p>Brendova</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default StatistikaComponent