// SlideSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import styles from './slidesection.module.css';
import slide1 from './imgs/OurPrin.jpg';
import slide2 from './imgs/Our2.jpg';
import slide3 from './imgs/Our4.jpg';
import { Link } from 'react-router-dom';

const SildeSection = () => {
    const carouselRef = useRef(null);
    const sliderRef = useRef(null);
    const thumbnailBorderRef = useRef(null);
  
    useEffect(() => {
      const timeRunning = 0; // Durée de la transition en millisecondes
  
      const showSlider = (type) => {
        const SliderItemsDom = sliderRef.current.querySelectorAll(`.${styles.item}`);
        const thumbnailItemsDom = thumbnailBorderRef.current.querySelectorAll(`.${styles.item}`);
  
        // Ajouter les classes pour la transition
        if (type === 'next') {
          sliderRef.current.appendChild(SliderItemsDom[0]);
          thumbnailBorderRef.current.appendChild(thumbnailItemsDom[0]);
          carouselRef.current.classList.add(styles.next);
        } else {
          sliderRef.current.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
          thumbnailBorderRef.current.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
          carouselRef.current.classList.add(styles.prev);
        }
  
        // Retirer les classes de transition après la durée spécifiée
        setTimeout(() => {
          carouselRef.current.classList.remove(styles.next);
          carouselRef.current.classList.remove(styles.prev);
        }, timeRunning);
      };
  
      const nextClick = () => {
        showSlider('next');
      };
  
      const prevClick = () => {
        showSlider('prev');
      };
  
      // Gestion des événements de clic sur les boutons next et prev
      const nextDom = document.getElementById('next');
      const prevDom = document.getElementById('prev');
  
      nextDom.addEventListener('click', nextClick);
      prevDom.addEventListener('click', prevClick);
  
      // Nettoyage des écouteurs d'événements lors du démontage du composant
      return () => {
        nextDom.removeEventListener('click', nextClick);
        prevDom.removeEventListener('click', prevClick);
      };
    }, []); 
    
  return (
    <div className={styles.slide}>
    <div className={styles.carousel} ref={carouselRef}>
      <div className={styles.list} ref={sliderRef}>
        <div className={styles.item}>
          <img src={slide1} alt="img1" className={styles.Image} />
          <div className={styles.content}>
            <div className={styles.author}>Nouveau !</div>
            <div className={styles.title}> Tente familiale</div>
            <div className={styles.topic}>Skandika</div>
            <div className={styles.des}>
            est une tente familiale spacieuse conçue pour accueillir jusqu'à cinq personnes. Elle se distingue par sa hauteur de 220 cm, offrant un espace confortable pour se tenir debout, et son toit panoramique en maille filet qui permet une vue imprenable sur le ciel, idéale pour les nuits étoilées , Antibactérien, auto-nettoyant .        </div>
            <div className={styles.buttons}>
            <button>
              <Link to="/skandika">
              Acheter
              </Link>
              </button>
              <button>
              Découvrir
              </button>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <img src={slide2} alt="img1" className={styles.Image} />
          <div className={styles.content}>
            <div className={styles.author}>Nouveau !</div>
            <div className={styles.title}> Tente familiale</div>
            <div className={styles.topic}>Skandika</div>
            <div className={styles.des}>
            est une tente familiale spacieuse conçue pour accueillir jusqu'à cinq personnes. Elle se distingue par sa hauteur de 220 cm, offrant un espace confortable pour se tenir debout, et son toit panoramique en maille filet qui permet une vue imprenable sur le ciel, idéale pour les nuits étoilées , Antibactérien, auto-nettoyant . 
         </div>
            <div className={styles.buttons}>
            <button>
              <Link to="/skandika">
              Acheter
              </Link>
              </button>
              <button>
              Découvrir
              </button>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <img src={slide3} alt="img1" className={styles.Image} />
          <div className={styles.content}>
            <div className={styles.author}>Nouveau !</div>
            <div className={styles.title}> Tente familiale</div>
            <div className={styles.topic}>Skandika</div>
            <div className={styles.des}>
            est une tente familiale spacieuse conçue pour accueillir jusqu'à cinq personnes. Elle se distingue par sa hauteur de 220 cm, offrant un espace confortable pour se tenir debout, et son toit panoramique en maille filet qui permet une vue imprenable sur le ciel, idéale pour les nuits étoilées , Antibactérien, auto-nettoyant . 
         </div>

            <div className={styles.buttons}>
              <button>
              <Link to="/skandika">
              Acheter
              </Link>
              </button>
              <button>
              Découvrir
              </button>
            </div>

          </div>
        </div>
      </div>
      <div className={styles.thumbnail} ref={thumbnailBorderRef} hidden>
        <div className={styles.item}>
          <img src={slide1} alt="thumbnail1" />
          <div className={styles.content}>
            <div className={styles.title}>Design Slider</div>
            <div className={styles.description}>Description</div>
          </div>
        </div>
        <div className={styles.item}>
          <img src={slide2} alt="thumbnail2" />
          <div className={styles.content}>
            <div className={styles.title}>Creative Slider</div>
            <div className={styles.description}>Description</div>
          </div>
        </div>
        <div className={styles.item}>
          <img src={slide3} alt="thumbnail3" />
          <div className={styles.content}>
            <div className={styles.title}>Innovative Slider</div>
            <div className={styles.description}>Description</div>
          </div>
        </div>
        {/* Repeat for other thumbnails */}
      </div>
      <div className={styles.arrows}>
        <button id="prev">&lt;</button>
        <button id="next">&gt;</button>
      </div>
      <div className={styles.time}></div>
    </div>
    </div>
  );
};

export default SildeSection;
