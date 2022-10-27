
import { StyledModal, Overlay } from "./ModalStyled";
import PropTypes from 'prop-types';
import React from "react";
import { createPortal } from "react-dom";
import { useEffect } from "react";




const modalRoot = document.querySelector('#modal-root');

export const Modal=({onCloseModal,children})=> {
 useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
 }); 
  
   const handleKeyDown = (e) => {
        if(e.code === 'Escape'){
            onCloseModal();
        }
  };
  
   const handleBackdropClick = (e) => {
        if(e.currentTarget === e.target) {
            onCloseModal();
        }
    };


   return createPortal(
      <Overlay onClick={handleBackdropClick}>
        <StyledModal>
          {children}
        </StyledModal>
      </Overlay>,
        modalRoot,
  
    
    );
}
  Modal.propTypes = {
    onCloseModal: PropTypes.func.isRequired,
};
 

