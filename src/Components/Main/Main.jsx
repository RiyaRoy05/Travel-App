import React, { useEffect } from 'react';
import './Main.css';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsClipboard2Check } from "react-icons/bs";
import img1 from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import img6 from '../../Assets/img6.jpg';
import img7 from '../../Assets/img7.jpg';
import img8 from '../../Assets/img8.jpg';
import img9 from '../../Assets/img9.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Data = [
  {
    "id": 1,
    "imgSrc": img8,
    "destTitle": "Cape Town",
    "location": "South Africa",
    "grade": "NATURE URBAN",
    "fees": "$400",
    "description": "Cape Town, South Africa, combines natural beauty with urban culture. Known for Table Mountain and vibrant city life, it attracts both nature enthusiasts and urban adventurers."
  },
  {
    "id": 2,
    "imgSrc": img2,
    "destTitle": "Santorini",
    "location": "Greece",
    "grade": "HISTORIC CHARM",
    "fees": "$500",
    "description": "Santorini, Greece, is famed for its whitewashed buildings, stunning sunsets, and crystal-clear waters. Perfect for romantic getaways and history lovers, it offers breathtaking views and rich cultural heritage."
  },
  {
    "id": 3,
    "imgSrc": img3,
    "destTitle": "Kyoto",
    "location": "Japan",
    "grade": "CULTURAL HERITAGE",
    "fees": "$300",
    "description": "Kyoto, Japan, is a city of temples, gardens, and traditional tea houses. Known for its cultural heritage and serene beauty, it's a haven for history buffs and nature enthusiasts."
  },
  {
    "id": 4,
    "imgSrc": img4,
    "destTitle": "Maui",
    "location": "Hawaii, USA",
    "grade": "ADVENTURE NATURE",
    "fees": "$600",
    "description": "Maui, Hawaii, offers diverse landscapes from beaches to volcanoes. Ideal for adventurers and nature lovers, it features hiking, snorkeling, and the scenic Hana Highway."
  },
  {
    "id": 5,
    "imgSrc": img5,
    "destTitle": "Paris",
    "location": "France",
    "grade": "URBAN EXPLORER",
    "fees": "$800",
    "description": "Paris, France, is renowned for its art, fashion, and gastronomy. A dream for urban explorers, it offers iconic landmarks like the Eiffel Tower and Louvre Museum."
  },
  {
    "id": 6,
    "imgSrc": img6,
    "destTitle": "Queenstown",
    "location": "New Zealand",
    "grade": "ADVENTURE THRILL",
    "fees": "$450",
    "description": "Queenstown, New Zealand, is an adventure hub known for skiing, bungee jumping, and stunning lakeside scenery. Perfect for thrill-seekers and nature lovers alike."
  },
  {
    "id": 7,
    "imgSrc": img7,
    "destTitle": "Venice",
    "location": "Italy",
    "grade": "ROMANTIC ESCAPE",
    "fees": "$550",
    "description": "Venice, Italy, is a romantic city with canals, gondolas, and historic architecture. Ideal for couples, it offers a unique charm and beautiful, scenic waterways."
  },
  
  {
    "id": 9,
    "imgSrc": img9,
    "destTitle": "Banff",
    "location": "Canada",
    "grade": "NATURE RETREAT",
    "fees": "$350",
    "description": "Banff, Canada, is a nature lover's paradise with stunning mountains, lakes, and wildlife. Perfect for outdoor enthusiasts, it offers hiking, skiing, and breathtaking scenery."
  }
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most Visited Destinations</h3>
      </div>
      <div className="secContent flex-container">
        <div className='row'>
        {Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => (
          <div className='column'>
            <div className="card" data-aos="fade-up">
            <div key={id}  className="singleDestination">
              
              <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} />
              </div>
              
              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className='icon-loc' />
                  <span className="name">{location}</span>
                </span>
                <div className="fees flex">
                  <div className="grade">
                    <span>{grade}<small>+1</small></span>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>
                <div className="desc">
                  <p className='text-justify'>{description}</p>
                </div>
                <button className="btn flex">
                  DETAILS <BsClipboard2Check className='icon-checkboard' />
                </button>
              </div>
            </div>
          </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}

export default Main;
