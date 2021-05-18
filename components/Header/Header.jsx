import styled from 'styled-components';
import { useQuery } from 'react-query';
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

export async function getStaticProps() {
  const fetchTopics = async () => {
    const { data } = await PhotosAPI.getTopicList();
    return data;
  };
  const { data: topicsListData } = useQuery('topicsList', () => fetchTopics());

  console.log(topicsListData);

  return {
    props: {
      topicsListData,
    },
  };
}

export default function Header({ topicsListData }) {
  // const { setSearchVal, topicsListData } = props;
  console.log(topicsListData);
  const router = useRouter();

  return (
    <HeaderWrap>
      <Container>
        <Flex>
          {linksDataArr.map((item) => <HeaderLinkItem data={item} key={item.key} />)}
        </Flex>
        {router.pathname === '/'
        && (
        <>
          <HeaderSearch setSearchVal="2" />
          {!!topicsListData
          && topicsListData.map((item) => <HeaderTopicItem title={item.title} key={item.id} />)}
        </>
        )}
      </Container>
    </HeaderWrap>
  );
}
