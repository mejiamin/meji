import React from 'react'
import { PiGithubLogo, PiPhone, PiEnvelopeSimple } from "react-icons/pi";
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact gradient__bg-bottom' id='contact'>

      <div className="container section__margin">

        <h1 className='title gradient__text'>Магомед-Амин Мишиев</h1>

        <ul>
          <li><a href="tel:+79640702455"><PiPhone size={25} /><p>+7 (964) 070-24-55 </p><span>Пожалуйста, звонки не принимаются. <br /> Свяжитесь через SMS или WhatsApp.</span></a></li>
          <li><a href="mailto:mokhmadmishiev@gmail.com"><PiEnvelopeSimple size={25} /><p>mokhmadmishiev@gmail.com</p></a></li>
          <li><a href="https://github.com/mejiamin"><PiGithubLogo size={25} /><p>github.com/mejiamin</p></a></li>
        </ul>

      </div>
    </div>
  )
}

export default Contact
