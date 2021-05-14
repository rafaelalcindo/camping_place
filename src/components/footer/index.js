import React, { Component } from 'react'

import { FooterPage, SectionFooter } from './styles'

class Footer extends Component {
  render() {
    return (
      <FooterPage>

        <SectionFooter order={1} width={'33.3%'} >
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </SectionFooter>

        <SectionFooter order={2} width={'33.3%'} >
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </SectionFooter>

        <SectionFooter order={3} width={'33.3%'} >
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </SectionFooter>

      </FooterPage>
    )
  }
}

export default Footer;
