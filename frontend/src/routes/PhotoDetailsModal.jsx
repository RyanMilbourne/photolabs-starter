import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = (props) => {
  const { isOpen, toggleClose, photos, selectedPhoto } = props;


  return (
    isOpen ?
      <div className="photo-details-modal">

        <div className='photo-details-modal__top-bar'>
          < button className="photo-details-modal__close-button" onClick={toggleClose}>
            <img src={closeSymbol} alt="close symbol" />
          </button >
        </div>

        <div className='photo-details-modal__images'>
          <img className='photo-details-modal__image' src={selectedPhoto.urls.regular} />
          <div className='photo-details-modal__photographer-details'>
            <img className='photo-details-modal__photographer-profile' src={selectedPhoto.user.profile} />
            <div className='photo-details-modal__photographer-info'>
              <span>{selectedPhoto.user.name}</span>
              <div className="photo-details-modal__photographer-location">
                <span>{selectedPhoto.location.city}, {selectedPhoto.location.country}</span>
              </div>
            </div>
          </div>
        </div>

        <div>

        </div>
      </div > : null
  )
};

export default PhotoDetailsModal;
