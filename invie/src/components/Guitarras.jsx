import React, {Component} from 'react';
import acustica from '../images/invie-acustica.png';
import classic from '../images/invie-classic.png';

class Guitarras extends Component{
    render(){
        return(
            <section id="guitarras" className="guitarras contenedor"> 
                <h2>Nuestra guitarras</h2>
                <div classNameName="video-demo-contenedor">
                <div classNameName="video-demo">
                    <div className="video-responsive-contenedor">
                    <iframe className="video-responsive-src" width="560" height="315" src="https://www.youtube.com/embed/R1dW8M4EqYY" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
                </div>
                
                <article className="guitarra"> 
                <img className="derecha" src={acustica}  alt="Guitarra Invie Acustica" width="350"/>
                <div className="contenedor-guitarra-a">
                    <h3 className="title-b">Invie Acustica</h3>
                    <ol>
                    <li>Estilo vintage</li>
                    <li>Madera pura</li>
                    <li>Incluye estuche invisible de aluminio</li>
                    </ol>
                </div>
                </article>
                <article className="guitarra b"> 
                <img className="izquierda" src={classic} alt="Guitarra Invie classNameic" width="350"/>
                <div className="contenedor-guitarra-b">
                    <h3 className="title-b">Invie classic</h3>
                    <ol>
                    <li>Estilo vintage</li>
                    <li>Liviana</li>
                    <li>Inicia tu camino como Rockstar</li>
                    </ol>
                </div>
                </article>
          </section>
        )
    }
}
export default Guitarras;