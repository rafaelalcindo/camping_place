import React from 'react';

// styles
import {
  Cardbody,
  ImagemTitle,
  BodyInformation,
  CampoInfo,
  CampoLocal
} from './styles'

// assets
import imageCard from '../../assets/images/imageCard.jpg'

const ListaCamp = (props) => (
  <div>
    {props.locais.map(local => (

      <Cardbody key={local.id} >
        <ImagemTitle src={local.imagem} />

        <BodyInformation>
          <CampoInfo>
            <section>
              <h2><i className="fa fa-home" aria-hidden="true"></i> &nbsp; {local.nome} </h2>

              <p>
                <i className="fa fa-file-text" aria-hidden="true"></i> &nbsp;
                { local.complemento }
              </p>

              <h4><i className="fa fa-map-marker" aria-hidden="true"></i> &nbsp; {local.logradouro}, nº{local.numero} Cep: 23434-544</h4>
            </section>
          </CampoInfo>

          <CampoLocal>
            <h4> <i className="fa fa-map" aria-hidden="true"></i> &nbsp; {local.estado} </h4>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <h4> <i className="fa fa-map" aria-hidden="true"></i> &nbsp; {local.cidade} </h4>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <h4> <i className="fa fa-picture-o" aria-hidden="true"></i> &nbsp; <a onClick={props.abrirModal()} > Fotos </a> </h4>
          </CampoLocal>
        </BodyInformation>

      </Cardbody>

    ))}
  </div>


);

export default ListaCamp;
