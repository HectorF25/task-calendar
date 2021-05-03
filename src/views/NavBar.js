import React from 'react';
import imagenes from '../../assets/js/images';

const Home = () => {

    return ( 
        <header>
        <nav>
            <div class="row">
                <img src={imagenes[0].img} class="logo"/>
                <img src={imagenes[0].img} class="logo-black" />
                <ul class="main-nav js--main-nav">
                    <li><a href="#contact">Contactanos</a></li>
                    <li><a href="#works">Pedidos</a></li>
                    <li><a href="#cities">Areas</a></li>
                    <li><a href="login.html">Iniciar sesión</a></li>
                </ul>
                <a class="mobile-nav-icon js--nav-icon"><i class="ion-navicon-round"></i></a>
            </div>
        </nav>
        <div class="hero-text-box">
            <h1>Bienvenido a iMake!<br />Como estas hoy?</h1>
            <a class="btn btn-full js--scroll-to-plans" href="#" title="Order Now!">Estoy hambriento</a>
        <a class="btn btn-ghost js--scroll-to-start" href="#">Leer más</a>
        </div>
    </header>
    )
};

export default Home;