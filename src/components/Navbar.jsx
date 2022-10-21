import React, {useRef} from 'react'
import logo from '../assets/svgs/logo.svg'

import emailjs from '@emailjs/browser';

import {AiOutlineBars} from 'react-icons/ai'

const Navbar = () => {

    const buyNowBtnRef = useRef()
    const overlayRef = useRef()


    const openOverlayMenu = e => {
        const kliklenenElement = e.target

        if(kliklenenElement.classList.contains('buybtn')) {
            overlayRef.current.classList.add('overlay-active')
        }
    }

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hkiaosr', 'template_8ggo4xo', form.current, 'user_XSVgRv73Ciboc6WRBgZW2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      form.current.reset()

      overlayRef.current.classList.remove('overlay-active')


  };




  return (
    <>

    <div className="overlay" ref={overlayRef}>
        <h1>Bizə müraciətini yolla</h1>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Adınız' className='form-control' />
            <input type="text" name='surname' placeholder='Soyadınız' className='form-control' />
            <input type="text" name='email' placeholder='Emailiniz' className='form-control' />
            <input type="text" name='subject' placeholder='Müraciət başlığı' className='form-control' />
            <textarea type="text" name='message' placeholder='Müraciət mətni' className='form-control mt-2'  />
            <button type='submit' className='btn btn-dark mt-4'>Göndər</button>
        </form>
    </div>

    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
    <button  type="button navbtn" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <AiOutlineBars />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Market</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Reserved Management</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=''>Fast report</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=''>Feedback</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=''>Download</a>
        </li>

        <button className="buybtn" ref={buyNowBtnRef} onClick={openOverlayMenu}>Buy Now</button>
      </ul>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar