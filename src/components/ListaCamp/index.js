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

const ListaCamp = () => (
  <Cardbody>
    <ImagemTitle src={imageCard} />

    <BodyInformation>
      <CampoInfo>
        <section>
          <h2><i class="fa fa-home" aria-hidden="true"></i> &nbsp; Grande partes </h2>

          <p>
            <i class="fa fa-file-text" aria-hidden="true"></i> &nbsp;
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing .
          </p>

          <h4><i class="fa fa-map-marker" aria-hidden="true"></i> &nbsp; Rua Domingos de amoráis, nº334 Cep: 23434-544</h4>
        </section>
      </CampoInfo>

      <CampoLocal>
        <h4> <i class="fa fa-map" aria-hidden="true"></i> &nbsp; São Paulo </h4>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <h4> <i class="fa fa-map" aria-hidden="true"></i> &nbsp; Juquitiba </h4>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <h4> <i class="fa fa-picture-o" aria-hidden="true"></i> &nbsp; Fotos </h4>
      </CampoLocal>
    </BodyInformation>

  </Cardbody>
);

export default ListaCamp;
