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

        <div className='photo-details-hero_body'>

          <div className='photo-details-hero_wrapper'>
            <PhotoFavButton favourites={favourites} toggleFavourite={toggleFavourite} id={selectedPhoto.id} />
            <img className='photo-details-hero_image' src={selectedPhoto.urls.regular} />
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
              toggleModalDisplay={toggleModalDisplay}
              handleSelectedPhoto={handleSelectedPhoto}
            />
          </div>
        </div>
      </div > : null
  )
};

export default PhotoDetailsModal;
