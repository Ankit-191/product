import React from 'react'
import { Container } from 'react-bootstrap'


const Footerlooker = (props) => {
  return (
    <>
    <Container>
        <div className='footlooker_box'>
                <div className=''>
                    <img src={props.footimage} alt=""  className='w-100 p-4 border_1'/>
                 </div>
            <div className='px-3 mx-1 pt-4'> 
                <div className='d-flex gap-2 justify-content-between'>
                    <p className='ff_poppins fw_400 fs_16 clr_black opacity_8 m-0'>Price: <span className='fw_600 fs_20'>€179,99</span></p> 
                    <button className='bestprice_btn ff_poppins fw_400 fs_10 clr_white'>Best Price</button>
                </div>    
                <p className='ff_poppins fw_400 fs_16 clr_black opacity_8 pt-3 pb-2 m-0'>Size:</p>
                <div className='d-flex justify-content-between gap-2 pt-1'>
                    <button className='ff_poppins fw_500 fs_16 clr_181818 size_number py-2 w-100'>41</button>
                    <button className='ff_poppins fw_500 fs_16 clr_181818 size_number py-2  w-100'>42</button>
                    <button className='ff_poppins fw_500 fs_16 clr_181818 size_number py-2 w-100'>43</button>
                </div>
                <div className='d-flex justify-content-between gap-2 pt-2 pb-3'>
                     <button className='ff_poppins fw_500 fs_16 clr_181818 size_number py-2 w-100'>41</button>
                    <button className='ff_poppins fw_500 fs_16 clr_181818 size_number py-2  w-100'>42</button>
                    <button className='ff_poppins fw_500 fs_16 clr_181818 size_number py-2 w-100'>43</button>
                </div>
                <p className='ff_poppins fw_600 fs_16 clr_454729 mb-2'>View this product as:</p>
                <p className='ff_poppins fw_600 fs_16 clr_007BFF mb-4 pb-2'><a href="#">Foot Locker NL</a></p>
            </div>
        </div>
        </Container>
    </>
  )
}

export default Footerlooker