import React, {Component} from 'react';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';

function mapStateToProps(state){
    return{
        guitarras: state.guitarras,
    }
}


class Guitarras extends Component{
    render(){
      
        return(
            <section id="guitarras" className="guitarras contenedor"> 
                <h2>Nuestra guitarras</h2>
                  <div class="video-demo-contenedor">
                    <div class="video-demo">
                        <div class="video-responsive-contenedor">
                            <iframe class="video-responsive-src" width="620" height="315" src="https://www.youtube.com/embed/R1dW8M4EqYY" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                {
                   this.props.guitarras.map((guitarra, index)=>{
                        return(
                            <article className="guitarra" key={index}> 
                                <CSSTransitionGroup
                                transitionName = ""
                                >
                                    <img className="guitarra-image" 
                                    key={guitarra.image}
                                    src={guitarra.image}  
                                    alt={guitarra.alt}  
                                    width="350"
                                    />
                                </CSSTransitionGroup>
                                <div className="contenedor-guitarra">
                                    <h3 className="guitarra-name">{guitarra.name}</h3>
                                    <ol>
                                        {guitarra.features.map((feature, index) => {
                                            return(
                                                <li key={index}>{feature}</li>
                                            )
                                        })}
                                    </ol>
                                </div>
                            </article>                           
                        )
                    })
                }
            </section>
        )
    }
}
export default connect(mapStateToProps)(Guitarras);