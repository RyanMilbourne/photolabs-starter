import React, { useEffect, useState, useRef } from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import photos from 'mocks/photos';

const PhotoDetailsModal = (props) => {
  const { isOpen, toggleClose, selectedPhoto, toggleModal, handleSelectedPhoto, favourites, toggleFavourite, photos } = props;

  // define the selected photos "similar photos"
  const similarPhotos = selectedPhoto.similar_photos;

  // filter the "similar photos" against the "photos" array
  const matchSimilarPhotos = (photoId) => {
    return similarPhotos.filter((photo) => photo.id === photoId);
  };

  // create a new array object (including all properties of photo)
  const similarPhotosArray = photos.map((photo) => ({
    ...photo,
    similarPhotos: matchSimilarPhotos(photo.id),
  })).filter((photo) => photo.similarPhotos.length > 0);

  // allow user to click image to view full-resolution image
  const openImageNewTab = (url) => {
    window.open(url, '_blank')
  }

  // set reference to DOM element for later use
  const modalRef = useRef(null);

  // Scroll to the top of Modal when similar photo is selected
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  return (
    isOpen ?
      <div className='modal_wrapper'>

        <div className="photo-details-modal" ref={modalRef}>

          < button className="photo-details-modal__close-button" onClick={toggleClose}>
            <img src={closeSymbol} className="exit_icon" alt="close symbol" />
          </button >

          <div className='photo-details-hero_body'>

            <div className='photo-details-hero_wrapper'>
              <PhotoFavButton favourites={favourites} toggleFavourite={toggleFavourite} id={selectedPhoto.id} />
              <div className="hero-image_wrapper">
                <img className='photo-details-hero_image' src={selectedPhoto.urls.full} onClick={() => openImageNewTab(selectedPhoto.urls.full)} />
              </div>
            </div>


            <div className='photo-details-hero_footer'>
              <img className='photo-details-modal__photographer-profile' src={selectedPhoto.user.profile} />
              <div className='photo-details-modal__photographer-info'>
                <span>{selectedPhoto.user.name}</span>
                <div className="photo-details-modal__photographer-location">
                  <span>{selectedPhoto.location.city}, {selectedPhoto.location.country}</span>
                </div>
              </div>
            </div>

          </div>


          <div className='photo-details-similar_photos_wrapper'>
            Similar Photos
            <div>
              <PhotoList
                photos={similarPhotosArray}
                favourites={favourites}
                toggleFavourite={toggleFavourite}
                toggleModal={toggleModal}
                handleSelectedPhoto={handleSelectedPhoto}
              />
            </div>
          </div>

        </div >

      </div>
      : null
  )
};

export default PhotoDetailsModal;
