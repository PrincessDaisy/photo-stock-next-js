import React from 'react';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import Header from '../components/Header';
import PhotosAPI from '../api';
import { PhotosList } from '../components/PhotosList';

const fetchPhoto = async (value = 'random', page = 1) => {
  const { data } = await PhotosAPI.getPhotosList(value, page);
  return data;
};

export async function getStaticProps() {
  const { data: topicsListData } = await PhotosAPI.getTopicList();
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['photo'], () => fetchPhoto());

  return {
    props: {
      topicsListData,
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home({ topicsListData }) {
  const [searchValue, setSearchValue] = React.useState('random');
  const { data } = useQuery(['photo'], () => fetchPhoto(searchValue));
  return (
    <>
      <Header topicsListData={topicsListData} setSearchValue={setSearchValue} />
      <PhotosList photosListData={data.results} />
    </>
  );
}
