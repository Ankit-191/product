import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import logo from '../assets/images/snkrplts_logo.png'
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from 'react';

const Navbar = () => {
    const [first, setfirst] = useState(true);
  function showUl() {
    setfirst(!first);
  }
  if (!first) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
        <Nav className='nav_shadow pt-lg-4 pb-lg-3 pb-2 pt-2'>
            <Container>
              <div className='d-flex align-items-center justify-content-between'>
                <img src={logo} alt="logo" className='d-lg-none d-block w_42 logohover'/>
                 <div onClick={showUl} className="z_51">
              <h3 className="d-block d-lg-none ">
                <RiMenu3Fill />
              </h3>
            </div>
                <div  className={
                first
                  ? "d-flex align-items-center justify-content-lg-end w-100 mobile_screen"
                  : "d-flex align-items-center  w-100  mobile_screen naV_0"
              }>
                  <ul className='d-flex gap-3 flex-column flex-lg-row nav_hover'>
                    <li><a href="#" className='ff_roboto fw_400 fs_18 clr_black'>HOME</a></li>
                    <li><a href="#" className='ff_roboto fw_400 fs_18 clr_black'>SNEAKERS KOPEN</a></li>
                    <li><a href="#" className='ff_roboto fw_400 fs_18 clr_black'>INTERVIEWS</a></li>
                    <li><a href="#" className='ff_roboto fw_400 fs_18 clr_black'>SALE</a></li>
                    <li><a href="#" className='ff_roboto fw_400 fs_18 clr_black'>SNEAKER VAN DE DAG</a></li>
                    <li><a href="#" className='ff_roboto fw_400 fs_18 clr_black'>SNEAKER FORUM</a></li>
                    <li><a href="#" className='ff_roboto fw_400 fs_18 clr_black'>BLOG</a></li>
                  </ul>
                </div>
              </div>
                
            </Container>   
        </Nav>
    </>
  )
}

export default Navbar