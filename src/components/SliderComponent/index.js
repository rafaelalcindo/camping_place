import React,{ Component } from 'react'
import Slider from "react-slick";

import { SliderDiv } from './styles'

export default class SliderComponent extends Component {


  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
        {this.props.imagens.map(imagem => (
          <SliderDiv>
            <img src={imagem} />
        </SliderDiv>
        ))}
      </Slider>
    );
  }
}
