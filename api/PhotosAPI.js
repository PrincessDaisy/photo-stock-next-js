import instanceAPI from './api';

const PhotosAPI = {
  getPhotosList(query, page) {
    return instanceAPI.get('search/photos', { params: { query, page, per_page: 21 } });
  },
  getTopicList() {
    return instanceAPI.get('topics');
  },
  getPhoto(photoId) {
    return instanceAPI.get(`photos/${photoId}`);
  },
  getCollections(collectionId) {
    return instanceAPI.get(`collections/${collectionId}/photos`);
  },
};

export default PhotosAPI;
