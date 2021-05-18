import Header from '../components/Header';
import PhotosAPI from '../api';

export async function getStaticProps() {
  const { data: topicsListData } = await PhotosAPI.getTopicList();

  return {
    props: {
      topicsListData,
    },
  };
}

export default function Home({ topicsListData }) {
  return (
    <>
      <Header topicsListData={topicsListData} />
    </>
  );
}
