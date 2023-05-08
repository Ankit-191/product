import React from 'react'
import { Container, Nav } from 'react-bootstrap'

const Navbar = () => {
  return (
    <>
        <Nav className='nav_shadow pt-4 pb-3'>
            <Container>
                <ul className='d-flex justify-content-end gap-3'>
                    <li><a href="#" className='ff_roboto fw_400 fs_18 clr_black'>HOME</a></li>
                    <li><a href="#" className='ff_roboto fw_400 fs_18 clr_black'>SNEAKERS KOPEN</a></li>
                    <li><a href="#" className='ff_roboto fw_400 fs_18 clr_black'>INTERVIEWS</a></li>
                    <li><a href="#" className='ff_roboto fw_400 fs_18 clr_black'>SALE</a></li>
                    <li><a href="#" className='ff_roboto fw_400 fs_18 clr_black'>SNEAKER VAN DE DAG</a></li>
                    <li><a href="#" className='ff_roboto fw_400 fs_18 clr_black'>SNEAKER FORUM</a></li>
                    <li><a href="#" className='ff_roboto fw_400 fs_18 clr_black'>BLOG</a></li>
                </ul>
            </Container>   
        </Nav>
    </>
  )
}

export default Navbar