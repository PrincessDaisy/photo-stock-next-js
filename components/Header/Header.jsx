import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Container, Flex } from '../ComponentsLibrary';
import HeaderLinkItem from './HeaderLinkItem';
import linksDataArr from './HeaderData';
import HeaderSearch from './HeaderSearch';
import HeaderTopicItem from './HeaderTopicItem';

const HeaderWrap = styled.div`
    background-color: #000;
    color: #fff;
    padding: 25px 0 28px 0;
    font-size: 20px;
`;

const TopicWrapper = styled(Flex)`
    @media (max-width: 991px) {
      justify-content: left;
    }
`;

const Shadow = styled.div`
  position: relative;
  overflow-x: hidden;
  :after {
    content: '';
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 40%, rgba(0, 0, 0, 1) 80%);
    height: 100%;
    position: absolute;
    right: 0px;
    bottom: 0;
    width: 50%;
    z-index: 10;
  }
`;

export default function Header({ topicsListData, setSearchValue }) {
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
          <HeaderSearch setSearchValue={setSearchValue} />
        </>
        )}
        <Shadow>
          <TopicWrapper justify="center" width="1400px">
            {!!topicsListData
          && topicsListData.map((item) => <HeaderTopicItem title={item.title} key={item.id} />)}
          </TopicWrapper>
        </Shadow>
      </Container>
    </HeaderWrap>
  );
}
