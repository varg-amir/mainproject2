import React from "react";
import NavBar from "../../components/NavBar";
import MainSlider from "../../components/MainSlider";
import TopCategories from "../../components/TopCategories";
import WomensSlider from "../../components/WomensSlider";
import CountdownSec from "../../components/CountdownSec";
import MensSlider from "../../components/MensSlider";
import Features from "../../components/Features";
import Footer from '../../components/Footer'

function home() {
  return (
    <div>
    
    <MainSlider/>
    <TopCategories/>
    <WomensSlider/>
    <CountdownSec/>
    <MensSlider/>
    <Features/>
    
    </div>
  );
}

export default home;
