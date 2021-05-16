import styled from 'styled-components';
import { Container, Flex } from '../ComponentsLibrary';
import HeaderLinkItem from './HeaderLinkItem';
import linksDataArr from './HeaderData';

const HeaderWrap = styled.div`
    background-color: #000;
    color: #fff;
    padding: 25px 0 28px 0;
    font-size: 20px;
`;

export default function Header() {
    return (
        <HeaderWrap>
            <Container>
                <Flex>
                    {linksDataArr.map((item) => <HeaderLinkItem data={item} key={item.key} />)}
                </Flex>
            </Container>
        </HeaderWrap>
    )
}