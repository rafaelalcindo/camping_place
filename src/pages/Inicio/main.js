import React, { Component, Fragment } from 'react';

import { TelaAmostragem, EspacoAmostragem, CorpoMain, FaixaCor, Form } from './styles'

//Imagens
import camping1 from '../../assets/images/camping1.jpg'
import camping2 from '../../assets/images/camping2.jpg'
import fogo_conselho from '../../assets/images/fogo_conselho.jpeg'

class Main extends Component {
  render() {
    return (
      <Fragment>
        <TelaAmostragem>

          <EspacoAmostragem order={1} width={'30%'} height={'570px'}>
            <h1>Aqui é o lugar de achar o seu local de acampamento</h1>
          </EspacoAmostragem>


          <EspacoAmostragem order={2} width={'70%'} height={'570px'}>
            <div className="backgroundTransparente" ></div>
            <img src={camping2}   />
          </EspacoAmostragem>

        </TelaAmostragem>

        <CorpoMain>
          <div className="container" >

            <h2>Aqui é o lugar onde você pode achar o local de acampamento que você precisa</h2>

            <p>apenas pesquise e vejas as áreas de acampamento que mais atende você</p>
          </div>

          <FaixaCor height={'280px'} backgroundColor={'#391F14'}  >
            <div className="container" >

              <EspacoAmostragem order={1} width={'40%'} height={'280px'} >
                <img src={fogo_conselho} />
              </EspacoAmostragem>

              <EspacoAmostragem order={2} width={'60%'} height={'280px'} >
                <p>Passe os momentos inesquecíveis com os seus amigos</p>
              </EspacoAmostragem>
            </div>

          </FaixaCor>

          <FaixaCor height={'280px'} backgroundColor={'white'} center >
            <div className="container" >

              <EspacoAmostragem order={1} width={'100%'} height={'50px'} >
                <p className="p_titulo" >Para começar basta digitar onde você gostaria de acampar</p>
              </EspacoAmostragem>

              <Form>
                <input type="text" placeholder="Local" />
                <button type="submit" >Buscar</button>
              </Form>

            </div>

          </FaixaCor>



        </CorpoMain>




      </Fragment>
    )
  }
}

export default Main;
