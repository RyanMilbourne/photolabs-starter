import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { isOpen, toggleClose } = props;
  return (
    isOpen ? <div className="photo-details-modal">
      < button className="photo-details-modal__close-button" onClick={toggleClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button >
    </div > : <></>
  )
};

export default PhotoDetailsModal;
