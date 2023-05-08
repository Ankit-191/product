import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import heroshose from '../assets/images/hero-shoes.png'
import black from '../assets/images/black-shoes.png'
import red from '../assets/images/red-sgoes.png'
import gray from '../assets/images/gray-shoes.png'
import redblack from '../assets/images/redblack.png'

const Premium = () => {
     const [first, setfirst] = useState(1) 
    function increase(){
      setfirst(first + 1)
    }
    function decrease(){
      if(first==1){
        setfirst(first)
      }else{
        setfirst(first - 1)
      }
    }
  return (
    <>
        <Container className='pt-3 pb-2'>
            <Row className='py-5 my-4 gap-5'>

                <Col>
                    <img src={heroshose} alt="shoes" className='w-100'/>
                    <Row className='justify-content-between pt_30'>
                        <Col>
                            <img src={black} alt="black" className='w-100' />
                        </Col>
                        <Col>
                            <img src={red} alt="red" className='w-100' />
                        </Col>
                        <Col>
                            <img src={gray} alt="gray" className='w-100' />
                        </Col>
                        <Col>
                            <img src={redblack} alt="redblack" className='w-100' />
                        </Col>
                    </Row>
                </Col>
                <Col xl={6}> 
                    <p className='ff_poppins fw_600 fs_30 clr_black pt-4'>PREMIUM MENS SPORTS LATHER KEDS</p>
                    <div className='d-flex gap-1 align-items-center'>
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3859 6.33831L12.6901 5.51709L10.1439 0.396152C10.0743 0.255944 9.95993 0.142442 9.8186 0.0734507C9.46415 -0.100141 9.03343 0.0445188 8.85621 0.396152L6.31002 5.51709L0.614191 6.33831C0.457157 6.36057 0.313583 6.43401 0.20366 6.54529C0.0707685 6.68079 -0.00246073 6.86309 6.31408e-05 7.05213C0.00258702 7.24117 0.0806575 7.42149 0.21712 7.55345L4.33813 11.5394L3.36452 17.1677C3.34169 17.2987 3.35629 17.4333 3.40668 17.5564C3.45706 17.6795 3.54121 17.7862 3.64958 17.8643C3.75795 17.9424 3.8862 17.9887 4.0198 17.9982C4.1534 18.0077 4.28699 17.9798 4.40543 17.9177L9.50004 15.2605L14.5947 17.9177C14.7337 17.9912 14.8953 18.0157 15.0501 17.989C15.4404 17.9222 15.7029 17.555 15.6356 17.1677L14.662 11.5394L18.783 7.55345C18.8951 7.4444 18.9692 7.30197 18.9916 7.14618C19.0522 6.75671 18.7785 6.39618 18.3859 6.33831Z" fill="#FBB03B"/>
</svg>
<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3859 6.33831L12.6901 5.51709L10.1439 0.396152C10.0743 0.255944 9.95993 0.142442 9.8186 0.0734507C9.46415 -0.100141 9.03343 0.0445188 8.85621 0.396152L6.31002 5.51709L0.614191 6.33831C0.457157 6.36057 0.313583 6.43401 0.20366 6.54529C0.0707685 6.68079 -0.00246073 6.86309 6.31408e-05 7.05213C0.00258702 7.24117 0.0806575 7.42149 0.21712 7.55345L4.33813 11.5394L3.36452 17.1677C3.34169 17.2987 3.35629 17.4333 3.40668 17.5564C3.45706 17.6795 3.54121 17.7862 3.64958 17.8643C3.75795 17.9424 3.8862 17.9887 4.0198 17.9982C4.1534 18.0077 4.28699 17.9798 4.40543 17.9177L9.50004 15.2605L14.5947 17.9177C14.7337 17.9912 14.8953 18.0157 15.0501 17.989C15.4404 17.9222 15.7029 17.555 15.6356 17.1677L14.662 11.5394L18.783 7.55345C18.8951 7.4444 18.9692 7.30197 18.9916 7.14618C19.0522 6.75671 18.7785 6.39618 18.3859 6.33831Z" fill="#FBB03B"/>
</svg>
<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3859 6.33831L12.6901 5.51709L10.1439 0.396152C10.0743 0.255944 9.95993 0.142442 9.8186 0.0734507C9.46415 -0.100141 9.03343 0.0445188 8.85621 0.396152L6.31002 5.51709L0.614191 6.33831C0.457157 6.36057 0.313583 6.43401 0.20366 6.54529C0.0707685 6.68079 -0.00246073 6.86309 6.31408e-05 7.05213C0.00258702 7.24117 0.0806575 7.42149 0.21712 7.55345L4.33813 11.5394L3.36452 17.1677C3.34169 17.2987 3.35629 17.4333 3.40668 17.5564C3.45706 17.6795 3.54121 17.7862 3.64958 17.8643C3.75795 17.9424 3.8862 17.9887 4.0198 17.9982C4.1534 18.0077 4.28699 17.9798 4.40543 17.9177L9.50004 15.2605L14.5947 17.9177C14.7337 17.9912 14.8953 18.0157 15.0501 17.989C15.4404 17.9222 15.7029 17.555 15.6356 17.1677L14.662 11.5394L18.783 7.55345C18.8951 7.4444 18.9692 7.30197 18.9916 7.14618C19.0522 6.75671 18.7785 6.39618 18.3859 6.33831Z" fill="#FBB03B"/>
</svg>
<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3859 6.33831L12.6901 5.51709L10.1439 0.396152C10.0743 0.255944 9.95993 0.142442 9.8186 0.0734507C9.46415 -0.100141 9.03343 0.0445188 8.85621 0.396152L6.31002 5.51709L0.614191 6.33831C0.457157 6.36057 0.313583 6.43401 0.20366 6.54529C0.0707685 6.68079 -0.00246073 6.86309 6.31408e-05 7.05213C0.00258702 7.24117 0.0806575 7.42149 0.21712 7.55345L4.33813 11.5394L3.36452 17.1677C3.34169 17.2987 3.35629 17.4333 3.40668 17.5564C3.45706 17.6795 3.54121 17.7862 3.64958 17.8643C3.75795 17.9424 3.8862 17.9887 4.0198 17.9982C4.1534 18.0077 4.28699 17.9798 4.40543 17.9177L9.50004 15.2605L14.5947 17.9177C14.7337 17.9912 14.8953 18.0157 15.0501 17.989C15.4404 17.9222 15.7029 17.555 15.6356 17.1677L14.662 11.5394L18.783 7.55345C18.8951 7.4444 18.9692 7.30197 18.9916 7.14618C19.0522 6.75671 18.7785 6.39618 18.3859 6.33831Z" fill="#FBB03B"/>
</svg>
<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3859 6.33831L12.6901 5.51709L10.1439 0.396152C10.0743 0.255944 9.95993 0.142442 9.8186 0.0734507C9.46415 -0.100141 9.03343 0.0445188 8.85621 0.396152L6.31002 5.51709L0.614191 6.33831C0.457157 6.36057 0.313583 6.43401 0.20366 6.54529C0.0707685 6.68079 -0.00246073 6.86309 6.31408e-05 7.05213C0.00258702 7.24117 0.0806575 7.42149 0.21712 7.55345L4.33813 11.5394L3.36452 17.1677C3.34169 17.2987 3.35629 17.4333 3.40668 17.5564C3.45706 17.6795 3.54121 17.7862 3.64958 17.8643C3.75795 17.9424 3.8862 17.9887 4.0198 17.9982C4.1534 18.0077 4.28699 17.9798 4.40543 17.9177L9.50004 15.2605L14.5947 17.9177C14.7337 17.9912 14.8953 18.0157 15.0501 17.989C15.4404 17.9222 15.7029 17.555 15.6356 17.1677L14.662 11.5394L18.783 7.55345C18.8951 7.4444 18.9692 7.30197 18.9916 7.14618C19.0522 6.75671 18.7785 6.39618 18.3859 6.33831Z" fill="#FBB03B"/>
</svg>
                        <p className='m-0 ff_poppins fw_400 fs_20 clr_black opacity_7 ps-2'>( 5 Customer Review )</p>
                    </div>
                    <p className='m -0 py-4 mt-1 ff_poppins fw_400 fs_20 clr_black opacity_6'>Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla in leo ullamcorper, in finibus elit porta. Sed eget congue neque, mattis finibus neque. In vel dolor ac augue pretium </p>
                    <div className='d-flex align-items-center pt-sm-5 mt-3'>
                        <p className='ff_poppins fw_500 fs_20 m-0'>Qty: </p>
                        <div className='qty d-flex align-items-center gap-2 ff_josefin fw_400 fs_20 clr_555555'><p className='m-0'  onClick={decrease}>-</p> <p className='mb-0 pt-1'>{first}</p> <p className='m-0' onClick={increase}>+</p> </div>
                        <button className='btn_addchart ff_poppins fw_500 fs_20 clr_white'>Add to Cart</button>
                    </div>
                    <div className='d-flex align-items-center pt-3 mt-1'>
                        <p className='ff_poppins fw_500 fs_20 m-0'>Size: </p>
                        <div className='ms-3 size_border'>
                            <select className='custom_select border-0'>
                                <option value="0" className='ff_josefin fw_400 fs_20 clr_gray'>S</option>
                                <option value="1" className='ff_josefin fw_400 fs_20 clr_gray'>6</option>
                                <option value="2" className='ff_josefin fw_400 fs_20 clr_gray'>7</option>
                                <option value="3" className='ff_josefin fw_400 fs_20 clr_gray'>8</option>
                                <option value="4" className='ff_josefin fw_400 fs_20 clr_gray'>9</option>
                                <option value="5" className='ff_josefin fw_400 fs_20 clr_gray'>10</option>
                            </select>
                        </div>
                    </div>
                    <div className='d-flex pt-3 mt-1 align-items-center'>
                        <p className='ff_poppins fw_500 fs_20 m-0'>Color: </p>
                        <div className='d-flex gap-2 ps-4'>
                            <div className='color_box bg_CC111C'> </div>
                            <div className='color_box bg_AA9E78'> </div>
                            <div className='color_box bg_black'> </div>
                            <div className='color_box bg_808082'> </div>
                        </div>
                    </div>
                    <div className='d-flex gap_31 pt-4 mt-1'>
                        <p className='ff_poppins fw_300 fs_16 clr_222222'> <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.6" d="M4.00977 0C2.07977 0 0.509766 1.57 0.509766 3.5C0.509766 5.08 1.56977 6.403 3.00977 6.837V13.997C3.00877 14.176 3.03677 15.778 4.18377 16.928C4.89177 17.64 5.83977 18 6.99977 18V20L10.9998 17L6.99977 14V16C5.17677 16 5.01577 14.466 5.00977 14V6.837C6.44977 6.403 7.50977 5.08 7.50977 3.5C7.50977 1.57 5.93877 0 4.00977 0ZM4.00977 5C3.18277 5 2.50977 4.327 2.50977 3.5C2.50977 2.673 3.18277 2 4.00977 2C4.83677 2 5.50977 2.673 5.50977 3.5C5.50977 4.327 4.83677 5 4.00977 5ZM17.0098 13.163V5.997C17.0048 4.391 15.9328 2 12.9998 2V0L8.99977 3L12.9998 6V4C14.8288 4 15.0008 5.539 15.0098 6V13.163C13.5698 13.597 12.5098 14.92 12.5098 16.5C12.5098 18.43 14.0798 20 16.0098 20C17.9398 20 19.5098 18.43 19.5098 16.5C19.5098 14.92 18.4498 13.597 17.0098 13.163ZM16.0098 18C15.1828 18 14.5098 17.327 14.5098 16.5C14.5098 15.673 15.1828 15 16.0098 15C16.8368 15 17.5098 15.673 17.5098 16.5C17.5098 17.327 16.8368 18 16.0098 18Z" fill="black"/>
</svg>
</span> Compare</p>
                        <p className='ff_poppins fw_300 fs_16 clr_222222'> <span><svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.6" d="M10.5006 18.0258L10.1526 17.7358C2.67062 11.6458 0.640625 9.4998 0.640625 6.0198C0.640625 3.1198 2.96062 0.799805 5.86062 0.799805C8.23862 0.799805 9.57263 2.1338 10.5006 3.1778C11.4286 2.1338 12.7626 0.799805 15.1406 0.799805C18.0406 0.799805 20.3606 3.1198 20.3606 6.0198C20.3606 9.4998 18.3306 11.6458 10.8486 17.7358L10.5006 18.0258ZM5.86062 1.9598C3.59862 1.9598 1.80062 3.7578 1.80062 6.0198C1.80062 8.9778 3.65662 10.9498 10.5006 16.5178C17.3446 10.9498 19.2006 8.9778 19.2006 6.0198C19.2006 3.7578 17.4026 1.9598 15.1406 1.9598C13.1106 1.9598 12.0086 3.1778 11.1386 4.1638L10.5006 4.9178L9.86262 4.1638C8.99262 3.1778 7.89062 1.9598 5.86062 1.9598Z" fill="black"/>
</svg>
</span> Wishlist</p>
                    </div>
                    <div className='line_gray'></div>
                    <div className='d-flex pt-3 mt-1 gap-4 premium_icon'>
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.04231 12.7499C4.84408 12.7475 5.61551 12.4431 6.20289 11.8974L11.9412 15.1763C11.749 15.9276 11.8337 16.723 12.18 17.417C12.5262 18.1109 13.1109 18.6569 13.8268 18.955C14.5427 19.2531 15.342 19.2834 16.0785 19.0404C16.8149 18.7973 17.4392 18.2971 17.837 17.6314C18.2348 16.9657 18.3795 16.179 18.2447 15.4153C18.1098 14.6516 17.7045 13.962 17.1027 13.4727C16.501 12.9835 15.7432 12.7273 14.9681 12.7511C14.1929 12.7749 13.4523 13.0771 12.8817 13.6024L7.14339 10.3235C7.20389 10.0943 7.23689 9.85691 7.24239 9.61949L12.8799 6.39741C13.4227 6.89128 14.1189 7.18345 14.8516 7.2249C15.5843 7.26634 16.309 7.05454 16.904 6.62503C17.4991 6.19552 17.9283 5.57442 18.1198 4.86595C18.3112 4.15748 18.2531 3.40472 17.9553 2.73398C17.6575 2.06323 17.1381 1.51531 16.4842 1.18212C15.8304 0.848932 15.0818 0.750756 14.3641 0.904063C13.6464 1.05737 13.0033 1.45283 12.5426 2.0241C12.0819 2.59537 11.8317 3.3077 11.834 4.04157C11.8376 4.30557 11.8734 4.56866 11.9412 4.82349L6.73089 7.79991C6.42874 7.33246 6.01018 6.95167 5.51633 6.69493C5.02248 6.4382 4.47033 6.31436 3.91414 6.33558C3.35795 6.3568 2.81684 6.52235 2.34399 6.81597C1.87114 7.10959 1.48281 7.52117 1.21715 8.01028C0.95149 8.49938 0.817646 9.04919 0.828765 9.60567C0.839885 10.1622 0.995586 10.7062 1.28057 11.1843C1.56556 11.6624 1.97002 12.0581 2.45422 12.3326C2.93843 12.6071 3.48571 12.7509 4.04231 12.7499Z" fill="black"/>
</svg>
<svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_776_648)">
<path d="M21.4958 23.7477C22.1892 23.7477 22.7515 23.1855 22.7515 22.492V2.25178C22.7515 1.55822 22.1892 0.996094 21.4958 0.996094H1.25569C0.562034 0.996094 0 1.55822 0 2.25178V22.492C0 23.1855 0.562034 23.7477 1.25569 23.7477H21.4958Z" fill="#395185"/>
<path d="M15.6983 23.7479V14.9373H18.6557L19.0985 11.5037H15.6983V9.3114C15.6983 8.31726 15.9744 7.63978 17.4 7.63978L19.2183 7.63898V4.56797C18.9036 4.52611 17.8244 4.43262 16.5688 4.43262C13.9472 4.43262 12.1525 6.03278 12.1525 8.97146V11.5037H9.1875V14.9373H12.1525V23.7479H15.6983Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_776_648">
<rect width="22.7515" height="22.7515" fill="white" transform="translate(0 0.996094)"/>
</clipPath>
</defs>
</svg>
<svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_776_651)">
<path d="M23.5035 2.6541C22.6663 3.02532 21.7667 3.27621 20.8225 3.38908C21.7864 2.8114 22.5264 1.89663 22.8749 0.806694C21.9586 1.35041 20.9562 1.73349 19.9109 1.93938C19.0594 1.03225 17.8463 0.465332 16.5037 0.465332C13.9259 0.465332 11.8359 2.55527 11.8359 5.13295C11.8359 5.49884 11.8772 5.85504 11.9567 6.19676C8.07741 6.00204 4.63802 4.14379 2.33576 1.31976C1.93405 2.00915 1.70387 2.81105 1.70387 3.66636C1.70387 5.28581 2.52799 6.71444 3.78039 7.55154C3.03915 7.52833 2.31421 7.32812 1.6661 6.96764C1.66584 6.9872 1.66584 7.00675 1.66584 7.02639C1.66584 9.28794 3.27479 11.1745 5.41006 11.6034C4.7227 11.7903 4.00171 11.8176 3.30217 11.6833C3.89611 13.5378 5.61998 14.8872 7.66246 14.925C6.06497 16.1769 4.05226 16.9231 1.86544 16.9231C1.48862 16.9231 1.11713 16.901 0.751953 16.8579C2.81763 18.1823 5.27115 18.955 7.90713 18.955C16.4929 18.955 21.1878 11.8424 21.1878 5.67427C21.1878 5.47182 21.1833 5.27052 21.1743 5.07038C22.0881 4.40977 22.8768 3.59155 23.5035 2.6541" fill="#55ACEE"/>
</g>
<defs>
<clipPath id="clip0_776_651">
<rect width="22.7515" height="18.5745" fill="white" transform="translate(0.751953 0.392578)"/>
</clipPath>
</defs>
</svg>
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_776_653)">
<path d="M0.503906 12.372C0.503906 17.0302 3.30501 21.032 7.31328 22.7914C7.28128 21.9971 7.30759 21.0435 7.51128 20.1792C7.73 19.2557 8.97503 13.9805 8.97503 13.9805C8.97503 13.9805 8.61162 13.2541 8.61162 12.1806C8.61162 10.4948 9.58869 9.2357 10.8055 9.2357C11.8403 9.2357 12.3402 10.0129 12.3402 10.9436C12.3402 11.9837 11.6768 13.5396 11.3356 14.9807C11.0506 16.1874 11.9406 17.1717 13.1311 17.1717C15.2864 17.1717 16.7381 14.4034 16.7381 11.1235C16.7381 8.63021 15.0588 6.76405 12.0045 6.76405C8.55377 6.76405 6.40402 9.33746 6.40402 12.212C6.40402 13.2031 6.69623 13.902 7.15393 14.4432C7.36438 14.6918 7.39362 14.7918 7.31745 15.0772C7.26288 15.2865 7.13757 15.7904 7.08567 15.9901C7.00995 16.2783 6.77648 16.3813 6.51608 16.2749C4.92668 15.626 4.18645 13.8854 4.18645 11.9288C4.18645 8.6973 6.91184 4.82244 12.3167 4.82244C16.66 4.82244 19.5186 7.96535 19.5186 11.3391C19.5186 15.8016 17.0376 19.1355 13.3805 19.1355C12.1523 19.1355 10.9971 18.4717 10.6013 17.7176C10.6013 17.7176 9.9409 20.3386 9.80101 20.8447C9.55981 21.7218 9.08772 22.5985 8.65606 23.2817C9.70277 23.5912 10.7886 23.7483 11.8801 23.7482C18.162 23.7482 23.2555 18.655 23.2555 12.372C23.2555 6.08932 18.162 0.996094 11.8801 0.996094C5.59758 0.996094 0.503906 6.08932 0.503906 12.372Z" fill="#CB1F27"/>
</g>
<defs>
<clipPath id="clip0_776_653">
<rect width="22.7515" height="22.7515" fill="white" transform="translate(0.503906 0.996094)"/>
</clipPath>
</defs>
</svg>
<svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.3856 12.034H25.4202V11.9843H14.6345V16.7779H21.4073C20.4193 19.5684 17.7642 21.5716 14.6345 21.5716C10.6636 21.5716 7.44404 18.352 7.44404 14.3811C7.44404 10.4102 10.6636 7.19062 14.6345 7.19062C16.4675 7.19062 18.1351 7.88211 19.4048 9.01161L22.7945 5.6219C20.6541 3.62714 17.7911 2.39697 14.6345 2.39697C8.01628 2.39697 2.65039 7.76287 2.65039 14.3811C2.65039 20.9993 8.01628 26.3652 14.6345 26.3652C21.2528 26.3652 26.6186 20.9993 26.6186 14.3811C26.6186 13.5776 26.536 12.7932 26.3856 12.034Z" fill="#FFC107"/>
<path d="M4.0332 8.80309L7.97059 11.6907C9.03598 9.05296 11.6162 7.19062 14.6356 7.19062C16.4685 7.19062 18.1361 7.88211 19.4058 9.01161L22.7956 5.6219C20.6552 3.62714 17.7922 2.39697 14.6356 2.39697C10.0325 2.39697 6.04054 4.99573 4.0332 8.80309Z" fill="#FF3D00"/>
<path d="M14.6357 26.365C17.7312 26.365 20.5438 25.1804 22.6704 23.2539L18.9613 20.1153C17.7177 21.0611 16.1981 21.5726 14.6357 21.5714C11.5186 21.5714 8.8719 19.5838 7.87482 16.8101L3.9668 19.8211C5.95017 23.7021 9.97803 26.365 14.6357 26.365Z" fill="#4CAF50"/>
<path d="M26.3858 12.0341H25.4205V11.9844H14.6348V16.778H21.4076C20.9349 18.1061 20.0836 19.2666 18.9586 20.1162L18.9604 20.115L22.6695 23.2536C22.4071 23.4921 26.6189 20.3733 26.6189 14.3812C26.6189 13.5777 26.5362 12.7933 26.3858 12.0341Z" fill="#1976D2"/>
</svg>

                    </div>
                </Col>
            </Row>
        </Container>   
    </>
  )
}

export default Premium