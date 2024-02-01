import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { isOpen, toggleClose, selectedPhoto, toggleModalDisplay, handleSelectedPhoto, favourites, toggleFavourite } = props;

  const similarPhotosArray = Object.values(selectedPhoto.similar_photos);

  return (
    isOpen ?
      <div className="photo-details-modal">

        <div className='photo-details-modal__top-bar'>
          < button className="photo-details-modal__close-button" onClick={toggleClose}>
            <img src={closeSymbol} alt="close symbol" />
          </button >
        </div>

        <div className='photo-details-modal__images'>
          <PhotoFavButton favourites={favourites} toggleFavourite={toggleFavourite} id={selectedPhoto.id} />
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

        <br></br>

        <div className='photo-details-modal__images'>
          <strong>Similar Photos</strong>
          <div>
            <PhotoList
              photos={similarPhotosArray}
              favourites={favourites}
              toggleFavourite={toggleFavourite}
              toggleModalDisplay={toggleModalDisplay}
              handleSelectedPhoto={handleSelectedPhoto}
            />
          </div>
        </div>
      </div > : null
  )
};

export default PhotoDetailsModal;
