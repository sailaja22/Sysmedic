import React from 'react'
import { FiSearch } from 'react-icons/fi';
import "./Features.css";
import img1 from '../Assests/image/img1(1).png'
import img2 from '../Assests/image/img2(1).png'
import img3 from '../Assests/image/img3(1).png'

const Features = () => {
  return (
    <div className='features'>
        <div className='Features-top'>
            <input placeholder='Available Features' />
            <FiSearch />
        </div>
        <div className='Features-bottom'>
            <div className='Features-card'>
                <h1>Disease identification</h1>
                <img src={img1} alt="" />
            </div>
            <div className='Features-card'>
                <h1>Doctor Consultancy</h1>
                <img src={img2} alt="" />
            </div>
            <div className='Features-card'>
                <h1>Digitalized Prescription</h1>
                <img src={img3} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Features