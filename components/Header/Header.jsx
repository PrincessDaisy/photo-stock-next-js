import styled from 'styled-components';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { useRouter } from 'next/router';
import { Container, Flex } from '../ComponentsLibrary';
import HeaderLinkItem from './HeaderLinkItem';
import linksDataArr from './HeaderData';
import HeaderSearch from './HeaderSearch';
import PhotosAPI from '../../api';
import HeaderTopicItem from './HeaderTopicItem';

const HeaderWrap = styled.div`
    background-color: #000;
    color: #fff;
    padding: 25px 0 28px 0;
    font-size: 20px;
`;

const fetchTopics = async () => {
  const { data } = await PhotosAPI.getTopicList();
  return data;
};

export async function getStaticProps() {
  const topics = await fetchTopics();

  return {
    props: {
      topics,
    },
  };
}

export default function Header(props) {
  const { setSearchVal, topics } = props;

  const router = useRouter();

  const { data: topicsListData, isSuccess: isSuccessTopicsListFetch } = useQuery('topicsList', fetchTopics, { initialData: topics });

  return (
    <HeaderWrap>
      <Container>
        <Flex>
          {linksDataArr.map((item) => <HeaderLinkItem data={item} key={item.key} />)}
        </Flex>
        {router.pathname === '/'
        && (
        <>
          <HeaderSearch setSearchVal={setSearchVal} />
          {!!isSuccessTopicsListFetch
              && topicsListData.map((item) => <HeaderTopicItem title={item.title} key={item.id} />)}
        </>
        )}
      </Container>
    </HeaderWrap>
  );
}
