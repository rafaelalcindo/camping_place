import styled from 'styled-components'

export const MainLista = styled.section`



`;

export const CampoPesquisa = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 200px;

  h3 {
    color: #A85432;
  }

`;

export const Form = styled.form`
  width: 100%;
  max-width: 800px;
  max-height: 200px;
  display: flex;
  flex-direction: column;

  section {
    margin-top: 6px;
  }

  input {
    flex: 1;
    height: 33px;
    width: 70%;
    padding: 0 20px;
    background: #fff;
    border: 1px solid gray;
    font-size: 20px;
    color: #444;
    border-radius: 3px;
    outline: 0;

    @media (max-width: 448px) {
      width: 55%;
    }
  }

  button {
    height: 35px;
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

  .alinhar_linha {
    display: flex;
    flex-direction: row;
  }

  select {
    flex: 1;
    height: 33px;
    width: 100%;
    padding: 0 20px;
    background: #fff;
    border: 1px solid gray;
    font-size: 20px;
    color: #444;
    border-radius: 3px;
    outline: 0;
  }
`;

export const CompoListagem = styled.section`
  display: flex;
  flex-direction: column;
  padding: 30px;

`
export const SliderDiv = styled.div`
  img {
    width: 100%;
    height: 550px;
  }
`
