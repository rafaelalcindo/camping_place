import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Header } from './styles';

class Headers extends Component {

  render() {
    return (
      <Header>
        <div className="logo_space" >
          <h3>Logo</h3>
        </div>

        <div className="menus" >

          <div className="lista_menu" >
            <nav>
              <ul className="navigate" >
                <li>
                  <Link to="/" >Home</Link>
                </li>
                <li className="DropDown" >
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
    )
  }
}

export default Headers;
