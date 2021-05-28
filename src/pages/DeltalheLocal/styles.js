import styled from 'styled-components';

export const CampoImagem = styled.section`
  width: 100%;
  height: 60%;

  img {
    width: 100%;

  }
`;
export const Detalhes = styled.section`
  display: flex;
  flex-direction: row;
  height: 600px;


`;

export const CamposDetalhe = styled.div`
  width: 50%;
  padding: 10px;

  h3 {
    text-align: justify;
  }

  ul li {
    list-style: none;
  }

  .leaflet-container {
    width: 100%;
    height: 100%;
  }
`
