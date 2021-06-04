import styled from 'styled-components'

export const TelaAmostragem = styled.section`
  min-height: 570px;
  width: 100%;
  background: #391F14;
  display: flex;
  flex-direction: row;

  @media (max-width: 448px) {
    min-height: 200px;
  }
`
export const EspacoAmostragem = styled.div`
  order: ${ props => props.order };
  width: ${ props => props.width };
  height: ${ props => props.height };
  /* border: 1px solid black; */

  img {
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .backgroundTransparente {
    background: rgba(57, 31, 20, 0.5);
    position: absolute;
    width: 69.9%;
    height: 570px;
    z-index: 0;

  }

  h1 {
    color: white;
    font-size: 60px;
    position: absolute;
    margin-left: 16%;
    margin-top: 9%;
    width: 40%;
    z-index: 3;


  }

  p {
    color: white;
  }

  .p_titulo {
    color: #A85432;
    text-align: center !important;
  }

  @media (max-width: 448px) {
    height: 200px;

    h1 {
      font-size: 18px;
    }

    .backgroundTransparente {
      width: 70%;
      height: 200px;
    }

  }

`

export const CorpoMain = styled.section`

  .container h2 {
    text-align: center;
    color: #A85432;
  }

  .container p {
    text-align: center;
  }

`

export const FaixaCor = styled.section`
  width: 100%;
  height: ${ props => props.height };
  background: ${ props => props.backgroundColor };


  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;

    ${ props => props.center && `
      justify-content: center;
    `}
  }

  .container p {
    font-size: 30px;
    text-align: left;
    margin-left: 10px;
  }

  @media (max-width: 448px) {
    height: 200px;

    .container p {
      font-size: 25px;
    }

  }

`

export const Form = styled.form`
  margin-top: 60px;
  width: 100%;
  max-width: 400px;
  margin-left: -15%;
  display: flex;


  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    border: 1px solid gray;
    font-size: 38px;
    color: #444;
    border-radius: 3px;
    outline: 0;


    @media (max-width: 785px) {
      width: 220px;
    }
  }

  button {
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #A85432;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 0px;
    cursor: pointer;

    &:hover {
      background: #ca714e;
    }
  }

  @media (max-width: 448px) {
    margin-top: -90px;
    margin-left: 0px;
  }
`

