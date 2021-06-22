import styled from 'styled-components';

export const Cardbody = styled.section`
  display: flex;
  flex-direction: row;
  height: 300px;
  /* border: 1px solid gray; */

  -webkit-box-shadow: 1px 2px 15px 5px rgba(0,0,0,0.18);
  box-shadow: 1px 2px 15px 5px rgba(0,0,0,0.18);

  margin-bottom: 40px;

  @media (max-width: 448px) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const ImagemTitle = styled.img`
  height: 100%;
  width: 35%;

  @media (max-width: 448px) {
    height: 40%;
    width: 100%;
  }
`;

export const BodyInformation = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 65%;

  @media (max-width: 448px) {
    width: 100%;
  }
`;

export const CampoInfo = styled.section`
  height: 80%;

  padding-left: 30px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.40);

  a {
    text-decoration: none;
  }
`;

export const CampoLocal = styled.section`
  display: flex;
  flex-direction: row;
  height:20%;
  padding-left: 30px;

  a {
    cursor: pointer;
  }
`;


