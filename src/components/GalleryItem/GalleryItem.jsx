import { Item } from './GalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
export const GalleryItem = ({ url, largeImageURL }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Item onClick={toggleModal}>
        <img src={url} alt="" />
      </Item>
      {showModal && (
        <Modal onToggleModal={toggleModal}>
          <img src={largeImageURL} alt="" />
        </Modal>
      )}
    </>
  );
};
