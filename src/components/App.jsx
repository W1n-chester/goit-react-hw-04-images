import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { GalleryItem } from './GalleryItem/GalleryItem';
import { fetchGalleryImages } from 'services/requestAPI';
import { LoadMoreBtn } from './Button/Button';
import { Loader } from './Loader/Loader';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
export const App = () => {
  const [status, setStatus] = useState(Status.IDLE);
  const [request, setRequest] = useState('');
  const [imagesData, setImagesData] = useState([]);
  const [page, setPage] = useState(1);
  // const [error, setError] = useState(null);

  useEffect(() => {
    if (request === '') {
      return;
    }
    setStatus(Status.PENDING);
    fetchGalleryImages(page, request)
      .then(data => {
        setImagesData([...imagesData, ...data.hits]);
        setStatus(Status.RESOLVED);
      })
      .catch(
        setStatus(Status.REJECTED)
        
      );
  }, [request, page]);

  const AddRequest = request => {
    setImagesData([]);
    setPage(1);
    setRequest(request);
  };

  const loadMoreBtnClick = () => {
    setPage(page => page + 1);
  };

  return (
    <>
      <Searchbar onAddRequest={AddRequest} />
      <div>
        <ImageGallery>
          {imagesData.map(({ id, webformatURL, largeImageURL }) => {
            return (
              <GalleryItem
                key={id}
                url={webformatURL}
                largeImageURL={largeImageURL}
              />
            );
          })}
        </ImageGallery>
        {status === 'resolved' && (
          <LoadMoreBtn onLoadMoreBtnClick={loadMoreBtnClick} />
        )}
        {status === 'pending' && <Loader />}
      </div>
    </>
  );
};
