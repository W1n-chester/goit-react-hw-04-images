import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Content, Backdrop } from './Modal.styled';
const modalRoot = document.querySelector('#modal-root');
export const Modal = ({ onToggleModal, children }) => {
  useEffect(() => {
    
    window.addEventListener('keydown', closeModal);
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  },[]);

  const closeModal = e => {
    if (e.code === 'Escape') {
      onToggleModal();
    }
  };
  const closeModalBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onToggleModal();
    }
  };

  return createPortal(
    <Backdrop onClick={closeModalBackdropClick}>
      <Content>{children}</Content>
    </Backdrop>,
    modalRoot
  );
};
