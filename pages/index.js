import Header from '../components/Header';
import PhotosAPI from '../api';
import { PhotosList } from '../components/PhotosList';

export async function getStaticProps() {
  const { data: topicsListData } = await PhotosAPI.getTopicList();
  const { data: { results: photosListData } } = await PhotosAPI.getPhotosList('random', 1);

  return {
    props: {
      topicsListData,
      photosListData,
    },
  };
}

export default function Home({ topicsListData, photosListData }) {
  console.log(photosListData);
  return (
    <>
      <Header topicsListData={topicsListData} />
      <PhotosList photosListData={photosListData} />
    </>
  );
}
