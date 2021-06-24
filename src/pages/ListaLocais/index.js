import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AcampamentosCreators } from '../../store/duck/acampamentos';

// components
import { MainLista, CampoPesquisa, Form, CompoListagem, SliderDiv } from './styles'

// Components
import ListaCamp from '../../components/ListaCamp'
import ModalComponent from '../../components/ModalComponent'
import SliderComponent from '../../components/SliderComponent'

// Imagens
import camping_exemple1 from '../../assets/images/camping_exemple1.jpg'
import camping_exemple2 from '../../assets/images/camping_exemple2.jpg'
import camping_exemple3 from '../../assets/images/camping_exemple3.jpg'

// service
import { imagemPath } from '../../services/imagemPath';

class ListaLocais extends Component {

  constructor(props) {
      super(props);

  }

  async componentDidMount() {
    this.props.acampamentosRequest(1)
  }

  state = {
    openModal: false,
    imagensModal: [
      camping_exemple1,
      camping_exemple2,
      camping_exemple3
    ]
  }

  openModal = async () => {
    this.setState({openModal: !this.state.openModal})
  }

  imagemAnexos = async (anexos) => {
    let imagens = anexos.map((anexo) => `${imagemPath}${anexo.arquivo}`)
    this.setState({ imagensModal: imagens });
    this.openModal();
  }

  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Fragment>
        <ModalComponent statuModal={this.state.openModal} funcOpen={() => this.openModal} >
          <SliderComponent settings={settings} imagens={this.state.imagensModal} />
        </ModalComponent>

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
                <ListaCamp locais={this.props.acampamentos} abrirModal={this.imagemAnexos} />
              </CompoListagem>

          </div>
        </MainLista>


      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  acampamentos: state.acampamentos.acampamentos,

  current_page: state.acampamentos.current_page,
  first_page_url: state.acampamentos.first_page_url,
  from: state.acampamentos.from,
  last_page: state.acampamentos.last_page,
  last_page_url: state.acampamentos.last_page_url,
  next_page_url: state.acampamentos.next_page_url,
  path: state.acampamentos.path,
  per_page: state.acampamentos.per_page,
  prev_page_url: state.acampamentos.prev_page_url,
  to: state.acampamentos.to,
  total: state.acampamentos.total
})

const mapDispatchToProps = dispatch => bindActionCreators(AcampamentosCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListaLocais);

