import React, { Component, Fragment } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { CampoImagem, Detalhes, CamposDetalhe } from './styles';

class DetalheLocal extends Component {
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

    const position = [-23.664187857779496, -46.77861255444456];

    return (
      <Fragment>
        <div className="container">
          {/* <CampoImagem>
            <img src={this.state.local.imagem} />
          </CampoImagem> */}
          <Detalhes>

            <CamposDetalhe>
              <ul>
                <li> <h3> <i className="fa fa-home" aria-hidden="true"></i> &nbsp; {this.state.local.nome} </h3></li>
                <li> <h3> <i className="fa fa-map-marker" aria-hidden="true"></i> &nbsp; {this.state.local.logradouro}, nº{this.state.local.numero} Cep: 23434-544 </h3></li>
                <li> <h3> <i className="fa fa-map" aria-hidden="true"></i> &nbsp; {this.state.local.estado} </h3></li>
                <li> <h3> <i className="fa fa-map" aria-hidden="true"></i> &nbsp; {this.state.local.cidade} </h3></li>


                <li> <h3> <i className="fa fa-file-text" aria-hidden="true"></i> &nbsp; {this.state.local.complemento} </h3></li>
              </ul>
            </CamposDetalhe>

            <CamposDetalhe>
                <MapContainer center={position} zoom={20} scrollWheelZoom={true}>
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

            </CamposDetalhe>
          </Detalhes>


        </div>

      </Fragment>
    )
  }

}

export default DetalheLocal;
