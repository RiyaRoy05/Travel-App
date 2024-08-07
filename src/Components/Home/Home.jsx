import React, {useEffect} from 'react'
import './Home.css'
import video from '../../Assets/video.mp4'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { BsListUl } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(() =>{
    Aos.init({duration: 2000})
  }, [])
  
  return (
    <section className="home">
      <div className="overlay"></div>
        <video className="video-bg" src={video} muted autoPlay loop type="video/mp4"></video>
        <div className="homeContent container">
          <div className="textDiv">
            <span data-aos="fade-up" className="smallText">Our Packages</span>
            <h1 data-aos="fade-up" className="homeTitle">Search your Holiday</h1>
          </div>
          <div data-aos="fade-up" className="CardDiv grid">
            <div className="destinationInput">
              <label htmlFor="city">Search your destination:</label>
              <div className="input flex">
                <input type="text" placeholder='Enter name here...' />
                <GrLocation className='icon-location'/>
              </div>
            </div>
            <div className="dateInput">
              <label htmlFor="date">Search your date:</label>
              <div className="input flex">
                <input type="date" />
              </div>
            </div>
            <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor="price">Max Price:</label>
                <h3 className="total">$5000</h3>
              </div>
              <div className="input flex">
                <input type="range" max="5000" min="1000"/>
              </div>
            </div>
            <div className="searchOptions flex">
            <HiFilter className='icon-filter' />
            <span>MORE FILTERS</span>
            </div>
          </div>
          <div data-aos="fade-up" className="homeFooterIcons flex">
            <div className="rightIcons">
              <FiFacebook className='icon-fb'/>
              <FaInstagram className='icon-insta'/>
              <FaTripadvisor className='icon-trip'/>
            </div>
            <div className="leftIcons">
            <BsListUl className='icon-list'/>
            <TbApps className='icon-app'/>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Home