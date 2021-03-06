import React from 'react';
import './Body.css';
import MainImage from './images/Main.jpg';
import AppStore from './images/app-store.svg';

function Body() {
  return (
    <div className="main">
      <div className="main__container">
        <img
          className="main__image"
          src={ MainImage } 
        />
        <div className="dark__mode">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4.41l-16.586 16.59-1.414-1.417 3.583-3.583h-3.776c-.995-.229-1.807-1.443-1.807-2.915 0-1.527.849-2.864 1.807-3.085h9.777l7.001-7 1.415 1.41zm-9.529 11.59h3.35c.775 0 1.541.149 2.235.497 3.448 1.752 4.944 2.503 4.944 2.503v-12l-3.06 1.53-7.469 7.47zm11.529-9v12h2v-12h-2z"/>
          <a href=""></a>
          </svg>
        </div>
        <div className="main__title">SCORE<br/>KEEPER</div>
        <img className="app__logo" src={ AppStore }>
        </img>
      </div>
    </div>
  )
}

export default Body
