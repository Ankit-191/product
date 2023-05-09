import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../assets/images/snkrplts_footer.png'

const Footer = () => {
  return (
    <>
        <section className='bg_0D0D0D pt-1'>
            <Container className='py-4 pb-5'>
                <img src={logo} alt="logo" className='logohover'/>
                <Row className='pb-2'>
                    <Col lg={4} xl={5}>
                        <p className='ff_poppins fw_400 fs_16 clr_white opacity_6 mw_448'>Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla in leo ullamcorper, in finibus elit porta. </p>
                        <div className='pt-lg-4 mt-3 d-flex gap-4'>
                            <svg className='icon' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.897461 15.4679C0.897461 22.6714 6.12925 28.6614 12.9717 29.8761V19.4113H9.34946V15.387H12.9717V12.1668C12.9717 8.54447 15.3057 6.53289 18.6068 6.53289C19.6524 6.53289 20.7802 6.69348 21.8258 6.85407V10.5573H19.9748C18.2035 10.5573 17.8015 11.4423 17.8015 12.57V15.387H21.6652L21.0217 19.4113H17.8015V29.8761C24.6439 28.6614 29.8757 22.6726 29.8757 15.4679C29.8757 7.45416 23.3556 0.897827 15.3866 0.897827C7.41757 0.897827 0.897461 7.45416 0.897461 15.4679Z" fill="white"/>
</svg>
<svg className='icon' width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1609 2.17334C9.75942 2.17334 2.94727 8.9855 2.94727 17.3869C2.94727 25.7884 9.75942 32.6005 18.1609 32.6005C26.5623 32.6005 33.3745 25.7884 33.3745 17.3869C33.3745 8.9855 26.5623 2.17334 18.1609 2.17334ZM25.4722 13.6413C25.4824 13.8009 25.4824 13.9673 25.4824 14.1303C25.4824 19.1154 21.6858 24.8579 14.748 24.8579C12.6086 24.8579 10.6254 24.2364 8.9546 23.1667C9.26023 23.2007 9.55227 23.2143 9.8647 23.2143C11.6306 23.2143 13.2538 22.6166 14.5476 21.6046C12.8904 21.5707 11.4981 20.484 11.0227 18.9898C11.6034 19.0747 12.1264 19.0747 12.724 18.9219C11.8707 18.7485 11.1038 18.2851 10.5534 17.6103C10.0031 16.9356 9.70335 16.0911 9.70509 15.2204V15.1728C10.2043 15.4547 10.7918 15.6279 11.4064 15.6516C10.8897 15.3073 10.466 14.8407 10.1727 14.2934C9.87952 13.746 9.72588 13.1348 9.72546 12.5138C9.72546 11.8109 9.90884 11.1691 10.2382 10.6121C11.1854 11.7781 12.3672 12.7316 13.707 13.4109C15.0468 14.0902 16.5146 14.4799 18.0148 14.5548C17.4817 11.9909 19.397 9.91597 21.6994 9.91597C22.7861 9.91597 23.7641 10.371 24.4534 11.1045C25.3058 10.9449 26.1208 10.6257 26.8475 10.1978C26.5657 11.0706 25.9748 11.8075 25.1904 12.2727C25.951 12.1912 26.6845 11.9807 27.3637 11.6852C26.8509 12.4391 26.2091 13.1081 25.4722 13.6413Z" fill="white"/>
</svg>
<svg className='icon' width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.9353 0.17334C7.53384 0.17334 0.72168 6.9855 0.72168 15.3869C0.72168 23.7884 7.53384 30.6005 15.9353 30.6005C24.3367 30.6005 31.1489 23.7884 31.1489 15.3869C31.1489 6.9855 24.3367 0.17334 15.9353 0.17334ZM17.1748 19.1496C15.684 21.2482 12.6888 21.8595 10.3524 20.9596C8.00926 20.0665 6.34528 17.5909 6.54563 15.0677C6.59657 11.9809 9.43893 9.27433 12.5258 9.3796C14.0064 9.31168 15.3987 9.95351 16.5329 10.8602C16.0473 11.4103 15.5481 11.9401 15.0116 12.4325C13.6498 11.4918 11.7108 11.2236 10.349 12.3103C8.39979 13.6584 8.3115 16.8404 10.186 18.2904C12.0096 19.9442 15.4565 19.1224 15.9624 16.5891C14.8214 16.5721 13.6736 16.5891 12.5326 16.5517C12.5292 15.8691 12.5258 15.19 12.5292 14.5074C14.4377 14.5006 16.3496 14.4972 18.2615 14.5142C18.3735 16.1204 18.1596 17.8252 17.1748 19.1496ZM25.4098 16.2189C24.8393 16.2257 24.2688 16.2291 23.6983 16.2325C23.6915 16.803 23.6881 17.3735 23.6881 17.944H21.98C21.9732 17.3735 21.9732 16.8064 21.9698 16.2359C21.3993 16.2291 20.8288 16.2257 20.2582 16.2189V14.5176C20.8288 14.5108 21.3993 14.5074 21.9698 14.5074C21.9732 13.9369 21.98 13.3664 21.9834 12.7959H23.6881L23.6983 14.5074C24.2688 14.5142 24.8393 14.5142 25.4098 14.5176V16.2189Z" fill="white"/>
</svg>
                     </div>
                    </Col>
                    <Col lg={8} xl={7}>
                        <Row>
                            <Col xs={6} md={3} className="mt-4 mt-lg-0 d-flex flex-column footertexthover">
                                <p className='ff_poppins fw_600 fs_18 clr_white '>CUSTOM LINKS</p>
                                <a href="#" className='ff_poppins fw_400 fs_18 clr_white opacity_7 pt-lg-2 pb-2 pb-lg-3 '>Lorem ipsum</a>
                                <a href="#" className='ff_poppins fw_400 fs_18 clr_white opacity_7'>Lorem ipsum</a>
                            </Col>
                            <Col xs={6} md={3} className="mt-4 mt-lg-0 d-flex flex-column footertexthover">
                                <p className='ff_poppins fw_600 fs_18 clr_white '>PRODUCTS</p>
                                <a href="#" className='ff_poppins fw_400 fs_18 clr_white opacity_7 pt-lg-2 pb-2 pb-lg-3 '>Lorem ipsum</a>
                                <a href="#" className='ff_poppins fw_400 fs_18 clr_white opacity_7 pb-lg-3 pb-2'>Lorem ipsum</a>
                                <a href="#" className='ff_poppins fw_400 fs_18 clr_white opacity_7'>Lorem ipsum</a>
                            </Col>
                            <Col xs={6} md={3} className="mt-4 mt-lg-0 d-flex flex-column footertexthover">
                                <p className='ff_poppins fw_600 fs_18 clr_white '>OUR COMPANY</p>
                                <a href="#" className='ff_poppins fw_400 fs_18 clr_white opacity_7 pt-lg-2 pb-2 pb-lg-3 '>Lorem ipsum</a>
                                <a href="#" className='ff_poppins fw_400 fs_18 clr_white opacity_7'>Lorem ipsum</a>
                            </Col>
                            <Col xs={6} md={3} className="mt-4 mt-lg-0 d-flex flex-column footertexthover">
                                <p className='ff_poppins fw_600 fs_18 clr_white '>YOUR ACCOUNT</p>
                                <a href="#" className='ff_poppins fw_400 fs_18 clr_white opacity_7 pt-lg-2 pb-2 pb-lg-3 '>Lorem ipsum</a>
                                <a href="#" className='ff_poppins fw_400 fs_18 clr_white opacity_7 '>Lorem ipsum</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className='bg_171717'>
            <Container>
                <p className='text-center py-4 m-0 ff_poppins fw_400 fs_18 clr_white opacity_7'>© Copyright SNKRPLTS 2021. </p>
            </Container>
        </section>
    </>
  )
}

export default Footer