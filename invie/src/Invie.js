import React, { Component } from 'react';
// import logo from './logo.svg';
import './css/invie.css';
import Portada from './components/Portada.jsx'
import Guitarras from './components/Guitarras.jsx'
import Footer from './components/Footer.jsx'

import logoPortada from './images/invie.png'
import acustica from './images/invie-acustica.png';
import classic from './images/invie-classic.png';

const data = {
  menu: [
    {
        href: 'index.html',
        title: 'Home',
    },
    {
        href: '#guitarras',
        title: 'Guitarras',
    },
    {
        href: 'precios.html',
        title: 'Precios',
    },
  ],
  logoPortada: logoPortada,

  guitarras: [
    {
        image: acustica,
        alt: 'Guitarra Invie Acustica',
        name: 'Invie Acustica',
        features: [
            'Estilo vintage',
            'Madera pura',
            'Incluye estuche invisible de aluminio',
        ]
    },
    {
      image: classic,
      alt: 'Guitarra Invie Classic',
      name: 'Invie Classic',
      features: [
          'Estilo vintage',
          'Liviana',
          'Empieza tu camino como rockstar',
      ]
  }
]

}

class App extends Component {
  render() {
    return (
      <section className="Invie">
        <Portada menu={data.menu} logo={data.logoPortada}/>
        <Guitarras guitarras={data.guitarras}/>
        <Footer />
        {/*Portada*/}
        {/* <Guitarras /> */}
        {/*Guitarras*/}
        {/*Footer*/}
        {/* <h1>Hola Mundo!</h1> */}
      </section>
    );
  }
}

export default App;
