import React,{ Component } from 'react'
import Slider from "react-slick";

import { SliderDiv } from './styles'

export default class SliderComponent extends Component {


  render() {

    return (
      <Slider {...this.props.settings}>
        {this.props.imagens.map((imagem, index) => (
          <SliderDiv key={index} >
            <img src={imagem} />
        </SliderDiv>
        ))}
      </Slider>
    );
  }
}
