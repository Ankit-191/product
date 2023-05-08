import React from 'react'
import { Container } from 'react-bootstrap'


const Footerlooker = (props) => {
  return (
    <>
    <Container>
        <div className='footlooker_box'>
            <div className='footlooker_border height_203 d-flex justify-content-center align-items-center '>
                <div className='w_224 h_149'>
                    <img src={props.footimage} alt=""  className='w-100'/>
               </div>
            </div>
            <div className='px-3 mx-1'>
                <div className='d-flex justify-content-between pt-4 mt-1'>
                <div className='d-flex gap-2 align-items-center'>
                    <p className='ff_poppins fw_400 fs_16 clr_black opacity_8 m-0'>Price:</p> 
                    <p className='ff_poppins fw_600 fs_20 clr_black m-0'>€179,99</p> 
                </div>
                <button className='bestprice_btn ff_poppins fw_400 fs_12 clr_white'>Best Price</button>
            </div>
            <p className='ff_poppins fw_400 fs_16 clr_black opacity_8 pt-3 pb-2 m-0'>Size:</p>
            <div className='d-flex gap-2 pt-1'>
                <p className='ff_poppins fw_500 fs_16 clr_181818 size_number'>41</p>
                <p className='ff_poppins fw_500 fs_16 clr_181818 size_number'>42</p>
                <p className='ff_poppins fw_500 fs_16 clr_181818 size_number'>43</p>
            </div>
            <div className='d-flex gap-2'>
                <p className='ff_poppins fw_500 fs_16 clr_181818 size_number'>44</p>
                <p className='ff_poppins fw_500 fs_16 clr_181818 size_number'>45</p>
                <p className='ff_poppins fw_500 fs_16 clr_181818 size_number'>46</p>
            </div>
            <p className='ff_poppins fw_600 fs_16 clr_454729 mb-2'>View this product as:</p>
            <p className='ff_poppins fw_600 fs_16 clr_007BFF mb-4 pb-2'>Foot Locker NL</p>
            </div>
        </div>
        </Container>
    </>
  )
}

export default Footerlooker