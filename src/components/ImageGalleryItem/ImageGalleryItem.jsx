import React, { useState } from "react";
import { Modal } from "components/Modal/Modal";
import { ImageGalleryItemImage, ImageGalleryItems } from "./ImageGalleryItemStyled";
import PropTypes from 'prop-types';

export function ImageGalleryItem({image, text, imageLarge}) {
  const [showModal,setShowModal] = useState(false);
 const toggleModal = () => {
        setShowModal (!showModal)
    };


  return (
    <div>
        <ImageGalleryItems>
  <ImageGalleryItemImage src={image}
                            alt={text}
            loading="lazy"
            onClick={toggleModal}
                           />
        </ImageGalleryItems>
    
        {showModal && <Modal onCloseModal={toggleModal }>
          <img src={imageLarge} alt={text}  />
        </Modal>}
           
          
      </div>
  )
}

ImageGalleryItem.propTypes = {
    image: PropTypes.string.isRequired,
    imageLarge: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};