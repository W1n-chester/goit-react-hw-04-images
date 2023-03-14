import { Gallary } from './ImageGallery.styled';

export const ImageGallery = props => {
  return (
    <>
      <Gallary>{props.children}</Gallary>
    </>
  );
};
