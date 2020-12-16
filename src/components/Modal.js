import React from 'react';
import { motion } from 'framer-motion';
const Modal = ({selectedImg, setSelectedImg}) => {
    
    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null)
        }
       
    }
    
    return (
        <div className="backdrop" onClick={handleClick}>
            <motion.img src = {selectedImg} alt="enlarged pic" 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1}}
            />
        </div>
    );
};

export default Modal;