import { createGlobalStyle } from  'styled-components';

const GlobalStyle = createGlobalStyle`
  .container {
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 768px) {
    .container {
      width: 750px;

    }
  }

  @media (max-width: 766px) {
    .container {
      width: 100%;
      padding-left: 0px;
      padding-right: 0px;
    }
  }

  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
`

export default GlobalStyle;
