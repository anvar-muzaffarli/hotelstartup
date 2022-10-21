import React from 'react'
import playBtn from '../assets/svgs/playBtn.svg'
import rightImg from '../assets/svgs/rightImg.svg'

import MovingComponent from 'react-moving-text'
const Introsection = () => {
  return (
    <div className='introsection row '>
        <div className="introsection-left col-12 col-md-6 col-lg-6">

        <MovingComponent
  type="fadeInFromTop"
  duration="1000ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="1"
  fillMode="none">
<h1 className='mb-5'>Simple online hotel management system</h1>

</MovingComponent>

<MovingComponent
  type="fadeInFromBottom"
  duration="1000ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="1"
  fillMode="none">
              <p>Maecenas sed ligula ut dui pharetra aliquet. Vestibulum eget orci libero. Sed est sem, mollis nec lectus nec, varius suscipit ligula. </p>

</MovingComponent>


            <div className="button-groups mt-5">
                <button className="about-us">About us</button>
                <button className=''><img src={playBtn} alt="" /></button>
                <span>Watch Video</span>
            </div>
        </div>

        <div className="introsection-right col-12 col-md-6 col-lg-6">
            <img src={rightImg} alt="" />
        </div>
    </div>
  )
}

export default Introsection