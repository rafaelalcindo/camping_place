import React, { Component, Fragment } from 'react';

import { MainLista, CampoPesquisa, Form, CompoListagem } from './styles'

// Components
import ListaCamp from '../../components/ListaCamp'

class ListaLocais extends Component {

  state = {
    locaisDisponiveis: [
      {
        id: 1,
        imagem: 'https://cdnstatic8.com/festivalando.com.br/wp-content/uploads/2018/08/shutterstock_197684711-e1534359318455.jpg',
        nome: 'Chacara Bom Viver',
        estado: 'São Paulo',
        cidade: 'Juquitiba',
        logradouro: 'Rua são silvestres',
        numero: '234',
        complemento: 'rua de cima Sitio muito bom para acampamento, tem area rústica e muito lugar pata todos bruncarem, tem piscina e lagos naturais, possui cachoeiras e trilha de 10km, possui barcos para brincadeiras'
      },
      {
        id: 2,
        imagem: 'https://cdnstatic8.com/festivalando.com.br/wp-content/uploads/2018/08/shutterstock_197684711-e1534359318455.jpg',
        nome: 'Chacara Bom Viver',
        estado: 'São Paulo',
        cidade: 'Juquitiba',
        logradouro: 'Rua são silvestres',
        numero: '234',
        complemento: 'rua de cima Sitio muito bom para acampamento, tem area rústica e muito lugar pata todos bruncarem, tem piscina e lagos naturais, possui cachoeiras e trilha de 10km, possui barcos para brincadeiras'
      },
      {
        id: 3,
        imagem: 'https://cdnstatic8.com/festivalando.com.br/wp-content/uploads/2018/08/shutterstock_197684711-e1534359318455.jpg',
        nome: 'Chacara Bom Viver',
        estado: 'São Paulo',
        cidade: 'Juquitiba',
        logradouro: 'Rua são silvestres',
        numero: '234',
        complemento: 'rua de cima Sitio muito bom para acampamento, tem area rústica e muito lugar pata todos bruncarem, tem piscina e lagos naturais, possui cachoeiras e trilha de 10km, possui barcos para brincadeiras'
      }
    ]
  }

  render() {
    return (
      <Fragment>
        <MainLista>
          <div className="container">
              <CampoPesquisa>
                <h3>Campo de campo pesquisa</h3>
                <Form>
                  <section>
                    <input type="text" />
                    <button type="submit" >Buscar</button>
                  </section>


                  <section className="alinhar_linha">

                    <div className="campoField" >
                      <select>
                        <option>São Paulo</option>
                        <option>Rio de Janeiro</option>
                        <option>Minas Gerais</option>
                      </select>
                    </div>
                    &nbsp;&nbsp;&nbsp;
                    <div className="campoField" >
                      <select>
                        <option>São Paulo</option>
                        <option>Itapecerica</option>
                        <option>Juquitiba</option>
                      </select>
                    </div>

                  </section>
                </Form>
              </CampoPesquisa>

              <hr/>

              <CompoListagem>
                <ListaCamp  />
                <ListaCamp  />
                <ListaCamp  />
              </CompoListagem>



          </div>
        </MainLista>
      </Fragment>
    )
  }
}

export default ListaLocais;
