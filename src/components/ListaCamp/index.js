import React from 'react';
import { Link } from 'react-router-dom';
import { imagemPath } from '../../services/imagemPath';

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

const ListaCamp = (props) => {
  console.tron.log(props);
  return(

    <div>
      {
        props.locais ?

        props.locais.map(local => (

          <Cardbody key={local.id} >
            <ImagemTitle src={`${imagemPath}${local.foto_principal}`} />

            <BodyInformation>
              <CampoInfo>
                <section>
                  <h2><i className="fa fa-home" aria-hidden="true"></i> &nbsp; <Link to={`/detalhe/${local.id}`} >{local.nome_local}</Link>  </h2>

                  <p>
                    <i className="fa fa-file-text" aria-hidden="true"></i> &nbsp;
                    { local.descricao }
                  </p>

                  <h4><i className="fa fa-map-marker" aria-hidden="true"></i> &nbsp; {local.enderecos.logradouro}, nº{local.enderecos.numero} Cep: 23434-544</h4>
                </section>
              </CampoInfo>

              <CampoLocal>
                <h4> <i className="fa fa-map" aria-hidden="true"></i> &nbsp; {local.enderecos.estado} </h4>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <h4> <i className="fa fa-map" aria-hidden="true"></i> &nbsp; {local.enderecos.cidade} </h4>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <h4> <i className="fa fa-picture-o" aria-hidden="true"></i> &nbsp; <a onClick={() => props.abrirModal(local.anexos)} > Fotos </a> </h4>
              </CampoLocal>
            </BodyInformation>

          </Cardbody>

        ))
        :
        <h2>Sem registros</h2>
    }
    </div>


  );
}

export default ListaCamp;
