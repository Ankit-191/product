import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Shoesbox from './Shoesbox';
import redshoes from '../assets/images/red-sgoes.png'
import grayshoes from '../assets/images/gray-shoes.png'


const RelatedProduct = () => {
 
  return (
    <>
    <Container className='pt-4 mt-3'>
         <Tabs defaultActiveKey="DESCRIPTION" id="fill-tab-example"  className="" fill>
        <Tab eventKey="DESCRIPTION" title="DESCRIPTION">
                <p  className='ff_poppins fw_400 fs_20 pt-4 mt-1'>
                    Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla in leo ullamcorper, in finibus elit porta. Sed eget congue neque, mattis finibus neque. In vel dolor ac augue pretium suscipit. Ut nec massa in ligula vestibulum mattis. Suspendisse imperdiet lorem eleifend nisi euismod, vel consequat ipsum luctus. Morbi auctor vulputate hendrerit. Etiam vel lectus tortor. Pellentesque non pharetra mi. Cura                 </p>
        </Tab>
        <Tab eventKey="ADDITIONAL INFORMATION" title="ADDITIONAL INFORMATION">
                <p className='ff_poppins fw_400 fs_20 pt-4 mt-1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero omnis beatae alias expedita rem in vitae, repudiandae tenetur qui et laudantium nam vel delectus laborum ipsum voluptate molestias fugiat cum.
                </p>
        </Tab>
        <Tab eventKey="REVIEWS (1)" title="REVIEWS (1)">
                <p className='ff_poppins fw_400 fs_20 pt-4 mt-1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatem sit veniam a eveniet? Commodi veniam porro sequi. Dignissimos fuga est praesentium ratione, sequi eligendi commodi iste? Temporibus, placeat ullam!
                </p>
        </Tab>
      </Tabs>

      <h2 className='ff_poppins fw_600 fs_30 mt-5 pt-5 pb-4'>RELATED PRODUCT</h2>

      <Row className='pt-2'>
        <Col sm={6} lg={3} className='px-0 pb-4 mb-3'>
          <Shoesbox shoes={redshoes}/>
        </Col>
        <Col sm={6} lg={3} className='px-0 pb-4 mb-3'>
          <Shoesbox shoes={grayshoes}/>
        </Col>
        <Col sm={6} lg={3} className='px-0 pb-4 mb-3'>
          <Shoesbox shoes={redshoes}/>
        </Col>
        <Col sm={6} lg={3} className='px-0 pb-4 mb-3'>
          <Shoesbox shoes={grayshoes}/>
        </Col>
        <Col sm={6} lg={3} className='px-0 pb-4 mb-3'>
          <Shoesbox shoes={redshoes}/>
        </Col>
        <Col sm={6} lg={3} className='px-0 pb-4 mb-3'>
          <Shoesbox shoes={grayshoes}/>
        </Col>
        <Col sm={6} lg={3} className='px-0 pb-4 mb-3'>
          <Shoesbox shoes={redshoes}/>
        </Col>
        <Col sm={6} lg={3} className='px-0 pb-4 mb-3'>
          <Shoesbox shoes={grayshoes}/>
        </Col>
      </Row>
      <div className='d-flex gap-2 justify-content-end pt-4 pb-5 mb-5 btnhover'>
        <button className='ff_poppins fw_600 fs_24 clr_white opacity_7 px-4 py-2 border-0 bg_FF4400 btn_page'>1</button>
        <button className='ff_poppins fw_600 fs_24 clr_black opacity_7 px-4 py-2 border-0 bg_white btn_page'>2</button>
        <button className='ff_poppins fw_600 fs_24 clr_black opacity_7 px-4 py-2 border-0 bg_white btn_page'>3</button>
        <button className='ff_poppins fw_600 fs_16 clr_555555 px-4 ms-2 py-2 bg_white btn_next'>Next</button>
      </div>
    </Container>
        
    </>
  )
}

export default RelatedProduct