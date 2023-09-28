import React from 'react'
import './NasiProizvodiComponent.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { IconName } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const NasiProizvodiComponent = () => {


    const initSlider = () => {
        const imageList = document.querySelector(".slider-wrapper .image-list");
        const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
        const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
        const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
        const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
        
        // Handle scrollbar thumb drag
        scrollbarThumb.addEventListener("mousedown", (e) => {
            const startX = e.clientX;
            const thumbPosition = scrollbarThumb.offsetLeft;
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
            
            // Update thumb position on mouse move
            const handleMouseMove = (e) => {
                const deltaX = e.clientX - startX;
                const newThumbPosition = thumbPosition + deltaX;
    
                // Ensure the scrollbar thumb stays within bounds
                const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
                const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
                
                scrollbarThumb.style.left = `${boundedPosition}px`;
                imageList.scrollLeft = scrollPosition;
            }
    
            // Remove event listeners on mouse up
            const handleMouseUp = () => {
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
            }
    
            // Add event listeners for drag interaction
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        });
    
        // Slide images according to the slide button clicks
        slideButtons.forEach(button => {
            button.addEventListener("click", () => {
                const direction = button.id === "prev-slide" ? -1 : 1;
                const scrollAmount = imageList.clientWidth * direction;
                imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
            });
        });
    
         // Show or hide slide buttons based on scroll position
        const handleSlideButtons = () => {
            slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
            slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
        }
    
        // Update scrollbar thumb position based on image scroll
        const updateScrollThumbPosition = () => {
            const scrollPosition = imageList.scrollLeft;
            const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
            scrollbarThumb.style.left = `${thumbPosition}px`;
        }
    
        // Call these two functions when image list scrolls
        imageList.addEventListener("scroll", () => {
            updateScrollThumbPosition();
            handleSlideButtons();
        });
    }
    
    window.addEventListener("resize", initSlider);
    window.addEventListener("load", initSlider);
    
    
    




  return (
    <div class="tekstIProizvodi">
        <div class="textNasiProizvodi">
            <p>Naši proizvodi</p>
        </div>

        <div class="textOkvalitetu">
            <p>Naše proizvode DVG Cosmetics odlikuje visok kvalitet kojim se dobija kompletna nega lica I tela.
                Uspeli smo da uskladimo kvalitet i cenu, što su prepoznali i našI kupci.
            </p>
        </div>
       

        <div class="container">
            <div class="slider-wrapper">
                <button id="prev-slide" class="slide-button material-symbols-rounded">
                &#xf104;
                     </button>
                        <ul class="image-list">
                            <li class="image-item">
                                <p class="tekst-kartice">KESE I FOLIJE</p>
                                <img src={require("../../images/Rectangle 136.png")} alt="img-1" />
                            </li>
                            <li class="image-item">
                                <p class="tekst-kartice">ZA KUHINJU</p>
                                <img src={require("../../images/Rectangle 137.png")} alt="img-2" />
                            </li>
                            <li class="image-item">
                                <p class="tekst-karticeDuze">UBRUSI I TOALET PAPIRI</p>
                                <img src={require("../../images/Rectangle 138.png")} alt="img-3" />
                            </li>
                            <li class="image-item">
                                <p class="tekst-kartice">KOZMETIKA</p>
                                <img src={require("../../images/Rectangle 139.png")} alt="img-4" />
                            </li>
                            <li class="image-item">
                                <p class="tekst-karticeDuze">PLASTIČNE KANTE</p>
                                <img src={require("../../images/Rectangle 141.png")} alt="img-5" />
                            </li>

                        </ul>
                        <button id="next-slide" class="slide-button material-symbols-rounded" >
                        &#xf105;
                        </button>
            </div>
            <div class="slider-scrollbar">
                <div class="scrollbar-track">
                    <div class="scrollbar-thumb"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NasiProizvodiComponent