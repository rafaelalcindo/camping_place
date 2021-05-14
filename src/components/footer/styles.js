import styled from 'styled-components';

export const FooterPage = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  padding: 2% 10%;
  background-color: rgb(57, 31, 20);
  height: 300px;
  color: #fff;
`;

export const SectionFooter = styled.section`
  order: ${ props => props.order };
  width: ${ props => props.width };



  ul li {
    list-style: none;
    font-weight: 600;
    margin: 30px 0px;

    &:hover {
      color: #FD8F5F !important;
    }

  }

`
