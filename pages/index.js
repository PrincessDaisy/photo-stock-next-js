import React from 'react';
import { useQuery } from 'react-query';
import Header from '../components/Header';
import PhotosAPI from '../api';
import { PhotosList } from '../components/PhotosList';

const fetchPhoto = async (value = 'random', page = 1) => {
  const { data } = await PhotosAPI.getPhotosList(value, page);
  return data;
};

export async function getStaticProps() {
  const { data: topicsListData } = await PhotosAPI.getTopicList();
  const { data: photoListData } = await PhotosAPI.getPhotosList('random', 1);

  return {
    props: {
      topicsListData,
      photoListData,
    },
  };
}

export default function Home({ topicsListData, photoListData }) {
  const [searchValue, setSearchValue] = React.useState('random');
  const [initialData, setInitialData] = React.useState(photoListData);

  React.useEffect(() => {
    setInitialData(undefined);
  }, []);

  const { data, status } = useQuery(['photo', searchValue], () => fetchPhoto(searchValue), { initialData });
  return (
    <>
      <Header topicsListData={topicsListData} setSearchValue={setSearchValue} />
      {status === 'loading' && <h2>Loading Data</h2> }
      {status === 'error' && <h2>Something went wrong</h2> }
      {status === 'success' && <PhotosList photosListData={data.results} />}
    </>
  );
}
