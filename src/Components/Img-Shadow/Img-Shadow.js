import { useState } from 'react';
import { Link } from 'react-router-dom';
// Components
import Modal from '../Modal/Modal';
// Css
import './Img-Shadow.css';

function ImgShadow(props) {
    const {image,alt,link,title,categories} = props;

    const [show , setShow] = useState();

    const clickHandler = () => {
        show ? setShow(false) : setShow(true);
    };

    return (
        <>
            <div className='parent-img-shadow' data-target={categories[0]}>
                <img src={image} alt={alt}/>

          
            </div>
            {/* modal */}
            {/* {show && <Modal event={clickHandler} image={image} alt={alt}/>} */}
        </>
    );
}

export default ImgShadow;