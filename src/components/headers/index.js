import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Header, SideNav } from './styles';

class Headers extends Component {

  state = {
    sideBarAberto: false
  }

  openSidebar = async () => {
    this.setState({ sideBarAberto: !this.state.sideBarAberto })
  }

  render() {
    return (
      <Fragment>
      <Header>
        <div className="logo_space" >
          <h3>Logo</h3>
        </div>

        <div className="menus" >

          <div className="lista_menu" >
            <nav>
              <ul className="navigate" >
                <li className="menu_baixo_screen" >
                  <a onClick={() => this.openSidebar()} > &#9776; </a>
                </li>
                <li className="menu_alto_screen" >
                  <Link to="/" >Home</Link>
                </li>
                <li  className="DropDown menu_alto_screen" >
                  <a href="#" >Serviços</a>
                  <div className="DropDownContent" >
                      <Link to="/locais" >Locais</Link>
                      <a>Item 2</a>
                      <a>Item 3</a>
                  </div>
                </li>
              </ul>
            </nav>

          </div>

        </div>
      </Header>

      <SideNav open={this.state.sideBarAberto} >
        <a href="javascript:void(0)" className="closebtn" onClick={() => this.openSidebar()}>&times;</a>
        <Link to="/" >Home</Link>
        <Link to="/locais" >Locais</Link>
      </SideNav>

      </Fragment>

    )
  }
}

export default Headers;
