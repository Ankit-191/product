import React from 'react'
import { Container } from 'react-bootstrap'
import logo from '../assets/images/snkrplts_logo.png'
import shop from '../assets/images/shop.png'

const Header = () => {
  return (
    <>
        <Container>
            <div className='d-flex justify-content-between ptb_19_15'>
                <img src={logo} alt="logo" className='d-none d-lg-block logohover'/>
                <img src={shop} alt="adds" className='w_100'/>
            </div>
        </Container>   
    </>
  )
}

export default Header