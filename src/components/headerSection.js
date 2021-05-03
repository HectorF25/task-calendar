import React from 'react';
import '../App.css';
import { Button } from './Button';
import './headerSection.css';


function headerSection() {
    return (
        <div className='header-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADMINISTRA DE FORMA INTERACTIVA TUS TAREAS</h1>
      <p>What are you waiting for?</p>
      <div className='header-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TUTORIAL <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
    );
}

export default headerSection
