import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AcampamentoCreators } from '../../store/duck/acampamento';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { CampoImagem, Detalhes, CamposDetalhe } from './styles';

// components
import SliderComponent from '../../components/SliderComponent'

// Imagens
import camping_exemple1 from '../../assets/images/camping_exemple1.jpg'
import camping_exemple2 from '../../assets/images/camping_exemple2.jpg'
import camping_exemple3 from '../../assets/images/camping_exemple3.jpg'

class DetalheLocal extends Component {

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    this.props.acampamentoRequest(this.props.match.params.id);
  }

  state = {
    local: {
      imagem: 'https://cdnstatic8.com/festivalando.com.br/wp-content/uploads/2018/08/shutterstock_197684711-e1534359318455.jpg',
        nome: 'Chacara Bom Viver',
        estado: 'São Paulo',
        cidade: 'Juquitiba',
        logradouro: 'Rua são silvestres',
        numero: '234',
        complemento: 'rua de cima Sitio muito bom para acampamento, tem area rústica e muito lugar pata todos bruncarem, tem piscina e lagos naturais, possui cachoeiras e trilha de 10km, possui barcos para brincadeiras'
    }
  }

  render() {

    const position = this.props.acampamento.enderecos.latitude? [this.props.acampamento.enderecos.latitude, this.props.acampamento.enderecos.longitude] : null;

    const imagens_exemplo = [
      camping_exemple1,
      camping_exemple2,
      camping_exemple3,
      camping_exemple3,
      camping_exemple3,
    ]

    // const imagens_exemplo = this.props.acampamento.anexos.map(anexo => `${imagemPath}${anexo.arquivo}`)

    const settings = {

      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };

    console.tron.log(this.props)

    return (
      <Fragment>
        <div className="container">

          <Detalhes>

            <CamposDetalhe>
              <ul>
                <li> <h3> <i className="fa fa-home" aria-hidden="true"></i> &nbsp; {this.props.acampamento.nome_local} </h3></li>
                <li> <h3> <i className="fa fa-map-marker" aria-hidden="true"></i> &nbsp; {this.props.acampamento.enderecos.logradouro}, nº{this.props.acampamento.enderecos.numero} Cep: {this.props.acampamento.enderecos.cep}  </h3></li>
                <li> <h3> <i className="fa fa-map" aria-hidden="true"></i> &nbsp; {this.props.acampamento.enderecos.estado} </h3></li>
                <li> <h3> <i className="fa fa-map" aria-hidden="true"></i> &nbsp; {this.props.acampamento.enderecos.cidade} </h3></li>


                <li> <h3> <i className="fa fa-file-text" aria-hidden="true"></i> &nbsp; {this.props.acampamento.descricao} </h3></li>
              </ul>
            </CamposDetalhe>

            <CamposDetalhe>
                {
                  position?
                    <MapContainer center={position} zoom={16} scrollWheelZoom={true}>
                        <TileLayer
                          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                          <Popup>
                            O lugar é aqui
                          </Popup>
                        </Marker>
                    </MapContainer>
                  :
                  ''
                }


            </CamposDetalhe>
          </Detalhes>

        </div>

        <SliderComponent settings={settings} imagens={imagens_exemplo} />

      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  acampamento: state.acampamento
})

const mapDispatchToProps = dispatch => bindActionCreators(AcampamentoCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DetalheLocal);
