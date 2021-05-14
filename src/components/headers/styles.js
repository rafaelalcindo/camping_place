import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  padding: 0 30px;
  background-color: rgb(57, 31, 20);
  height: 80px;
  color: #ffff;

  .logo_space {
    flex: 0 0 50%;
    max-width: 50%;
    /* background-color: black; */
    height: 40px;
  }

  .lista_menu {
    float: right;
    display: block;
    margin-right: 30px;
  }

  .menus {
    flex: 0 0 50%;
    max-width: 50%;

    justify-content: flex-end;
  }

  .navigate {
    display: flex;
    align-items: center;
  }

  .navigate > li {
    list-style: none;
    display: inline-block;
    position: relative;
    z-index: 1;
    padding: 0px 10px;
  }

  a {
    color: #ffff;
    font-weight:  700;
    padding: 10px 4px;
    display: block;
    font-size: 22px;
    transition: .3s;
    text-transform: capitalize;
    position: relative;
    text-decoration: none;

    &:hover {
      color: #FD8F5F !important;
    }

  }

  .DropDown {
    &:hover .DropDownContent {

      display: block;
      opacity: 1;
    }
  }

  .DropDownContent {
    position: absolute;
    background-color: #404040;
    min-width: 150px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 7;
    display: none;
    opacity: 0;
    transition: 0.4s;
  }
`
