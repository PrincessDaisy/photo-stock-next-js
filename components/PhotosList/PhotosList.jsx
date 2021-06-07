import styled from 'styled-components';
import { Container, Flex } from '../ComponentsLibrary';
import Photo from './Photo';

const DirControl = styled(Flex)`
    margin: 75px 0;
    @media (max-width: 991px) { 
        display: none;
    }
    button {
        transition: .7s;
        cursor: pointer;
        :hover {
            rect {
                fill: #000;
            }
            transform: scale(1.2);
        }
        :first-child {
            margin-right: 20px;   
        }
    }
`;

const FlexChild = styled.div`
  flex-basis: 33.33333%; 
  padding: 0 5px 0 5px;
`;

export default function PhotosList({ photosListData }) {
  return (
    <Container>
      <DirControl justify="center">
        <button type="button">
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="23" height="10" fill="#BDBDBD" />
            <rect y="13" width="23" height="10" fill="#BDBDBD" />
          </svg>
        </button>
        <button type="button">
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="10" height="10" fill="#BDBDBD" />
            <rect y="13" width="10" height="10" fill="#BDBDBD" />
            <rect x="13" width="10" height="10" fill="#BDBDBD" />
            <rect x="13" y="13" width="10" height="10" fill="#BDBDBD" />
          </svg>
        </button>
      </DirControl>
      <Flex>
        <FlexChild>
          {!!photosListData
              && photosListData.map((item, index) => {
                if (index % 3 === 1 || index === 1) {
                  return <Photo item={item} key={item.id} />;
                }
                return '';
              })}
        </FlexChild>
        <FlexChild>
          {!!photosListData
            && photosListData.map((item, index) => {
              if (index % 3 === 2 || index === 2) {
                return <Photo item={item} key={item.id} />;
              }
              return '';
            })}
        </FlexChild>
        <FlexChild>
          {!!photosListData
            && photosListData.map((item, index) => {
              if (index % 3 === 0) {
                return <Photo item={item} className="mr-0" key={item.id} />;
              }
              return '';
            })}
        </FlexChild>
      </Flex>
    </Container>
  );
}
