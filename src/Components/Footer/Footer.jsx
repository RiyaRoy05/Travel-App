import React, {useEffect} from 'react'
import video2 from '../../Assets/video2.mp4'
import { MdTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FaTripadvisor } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import './Footer.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(() =>{
    Aos.init({duration: 2000})
  }, [])
  return (
    <section className="footer">
      <div className="videoDiv">
        <video className="video-footer" src={video2} loop autoPlay muted type="video/mp4"> </video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
            <button data-aos="fade-up" className="btn flex" type='submit'>SEND<FiSend className='icon-send'/>
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
              <MdTravelExplore className="icon" />Travel.
              </a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ex maiores porro suscipit non velit, itaque accusamus laboriosam eum a necessitatibus laborum ea repudiandae? Adipisci nam optio voluptatibus mollitia maiores!
            </div>
            <div data-aos="fade-up" className="footerSocials flex">
            <FaTwitter className='icon-twitter'/>
            <FaYoutube className='icon-youtube'/>
            <BiLogoInstagramAlt className='icon-instagram'/>
            <FaTripadvisor className='icon-tripping'/>
            </div>
          </div>
          <div className="footerLinks grid">
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex">
              <FiChevronRight className='icon-right'/>
              Services
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon-right'/>
              Insurance
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon-right'/>
              Agency
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon-right'/>
              Tourism
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon-right'/>
              Payment
              </li>
            </div>
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">PARTNERS</span>
              <li className="footerList flex">
              <FiChevronRight className='icon-right'/>
              Bookings
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon-right'/>
              RentCars
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon-right'/>
              HostelWorld
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon-right'/>
              Trivago
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon-right'/>
              TripAdvisor
              </li>
            </div>
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>
              <li className="footerList flex">
              <FiChevronRight className='icon-right'/>
              London
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon-right'/>
              California
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon-right'/>
              Indonesia
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon-right'/>
              Europe
              </li>
              <li className="footerList flex">
              <FiChevronRight className='icon-right'/>
              Austraila
              </li>
            </div>
          </div>
          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - ISRATECH 2024</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer