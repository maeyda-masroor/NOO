
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function CompanyLogo() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div style={{padding:'50px'}}>
    <Slider {...settings}>
      <div style={{width:'100%',height:'10px',backgroundColor:'#FF0000'}}>
        <h3 style={{backgroundColor:'green',color:'white'}}>name:ABC<br/>designation:designation<br/>testinomials:testinomials</h3>
      </div>
      <div style={{width:'100%',height:'10px',backgroundColor:'#FF0000'}}>
        <h3 style={{backgroundColor:'green',color:'white'}}>name:ABC<br/>designation:designation<br/>testinomials:testinomials</h3>
      </div>
      <div style={{width:'100%',height:'10px',backgroundColor:'#FF0000'}}>
        <h3 style={{backgroundColor:'green',color:'white'}}>name:ABC<br/>designation:designation<br/>testinomials:testinomials</h3>
      </div>
      <div style={{width:'100%',height:'10px',backgroundColor:'#FF0000'}}>
        <h3 style={{backgroundColor:'green',color:'white'}}>name:ABC<br/>designation:designation<br/>testinomials:testinomials</h3>
      </div>
      <div style={{width:'100%',height:'10px',backgroundColor:'#FF0000'}}>
        <h3 style={{backgroundColor:'green',color:'white'}}>name:ABC<br/>designation:designation<br/>testinomials:testinomials</h3>
      </div>
      <div style={{width:'100%',height:'10px',backgroundColor:'#FF0000'}}>
        <h3 style={{backgroundColor:'green',color:'white'}}>name:ABC<br/>designation:designation<br/>testinomials:testinomials</h3>
      </div>
      <div style={{width:'100%',height:'10px',backgroundColor:'#FF0000'}}>
        <h3 style={{backgroundColor:'green',color:'white'}}>name:ABC<br/>designation:designation<br/>testinomials:testinomials</h3>
      </div>
    </Slider>
    </div>
  );
}