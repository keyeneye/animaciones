import React, { Component } from 'react';
// import logo from './logo.svg';
import './css/invie.css';
// import './images';
import Portada from './components/Portada.jsx'
import Guitarras from './components/Guitarras.jsx'
import Footer from './components/Footer.jsx'

class App extends Component {
  render() {
    return (
      <section className="Invie">
        <Portada />
        <Guitarras />
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
