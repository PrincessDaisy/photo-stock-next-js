/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Flex } from '../ComponentsLibrary';

const PhotoImage = styled.img`
    width: 100%;
    transition: .5s;
    vertical-align: bottom;
`;

const InfoWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    transition: .5s;
`;

const UserProfile = styled.div`
    margin: -50px auto 100px;
    transition: .8s;
`;

const ImageWrapper = styled.div`
    margin-bottom: 10px;
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    :hover {
        ${PhotoImage} {
            filter: blur(4px);
        }
        ${InfoWrapper} {
            opacity: 1;
            background-color: rgba(0, 0, 0, .5);
        }
        ${UserProfile} {
            margin: 0 auto;
        }
    }
`;

const UserPhoto = styled.div`
    border: 1px solid #fff;
    overflow: hidden;
    border-radius: 8px;
    display: inline-block;
    margin: 0px auto;
`;

const HoveringIcon = styled.div`
  transition: .8s;
  &:hover {
    transform: scale(1.2);
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
`;

export default function Photo({ item }) {
  const [inFavList, setInFavList] = useState(false);

  const toFavotiresFunc = (id) => {
    let FavArr;
    if (localStorage.getItem('Favorites')) {
      FavArr = JSON.parse(localStorage.getItem('Favorites'));
      if (FavArr.includes(id)) {
        FavArr = FavArr.filter((val) => val !== id);
        localStorage.setItem('Favorites', JSON.stringify(FavArr));
        setInFavList(false);
      } else {
        FavArr = [...FavArr, id];
        localStorage.setItem('Favorites', JSON.stringify(FavArr));
        setInFavList(true);
      }
    } else {
      localStorage.setItem('Favorites', JSON.stringify([id]));
    }
  };

  useEffect(() => {
    if (localStorage.getItem('Favorites')) {
      const checkFav = (id) => {
        const FavArr = JSON.parse(localStorage.getItem('Favorites'));
        return setInFavList(FavArr.includes(id));
      };
      checkFav(item.id);
    }
  }, [inFavList]);
  return (
    <ImageWrapper key={item.id}>
      <PhotoImage
        src={item.urls.small}
        alt={item.alt_description}
        width="100%"
        height="auto"
      />
      <InfoWrapper>
        <UserProfile>
          <UserPhoto>
            <img src={item.user.profile_image.medium} alt={`${item.user.name}_profile_image`} />
          </UserPhoto>
          <div>
            <div>{item.user.name}</div>
            {!!item.user.instagram_username
                  && (
                  <a
                    href={`https://instagram.com/${item.user.instagram_username}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {`@${item.user.instagram_username}`}
                  </a>
                  )}
          </div>
        </UserProfile>
        <Flex justify="space-between" width="185px" margin="40px auto 0">
          <HoveringIcon>
            <StyledButton type="button" onClick={() => { toFavotiresFunc(item.id); }}>
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9121 28.7685C17.8354 29.746 16.1779 29.7461 15.1013 28.7544L14.9454 28.6127C7.50795 21.8836 2.64878 17.4777 2.83295 11.981C2.91795 9.57272 4.15045 7.26355 6.14795 5.90355C9.88795 3.35355 14.5063 4.54355 16.9996 7.46188C19.4929 4.54355 24.1113 3.33938 27.8513 5.90355C29.8488 7.26355 31.0813 9.57272 31.1663 11.981C31.3646 17.4777 26.4913 21.8835 19.0538 28.641L18.9121 28.7685Z" fill={inFavList ? 'red' : 'white'} />
              </svg>
            </StyledButton>
          </HoveringIcon>
          <HoveringIcon>
            <Link
              href={{
                pathname: `/photo/${item.id}`,
              }}
            >
              <a>
                <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M21.5833 4.5C21.5833 3.67157 22.2736 3 23.125 3H32.375C33.2264 3 33.9167 3.67157 33.9167 4.5V13.5C33.9167 14.3284 33.2264 15 32.375 15C31.5236 15 30.8333 14.3284 30.8333 13.5V6H23.125C22.2736 6 21.5833 5.32843 21.5833 4.5Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.62499 21C5.47643 21 6.16666 21.6716 6.16666 22.5V30H13.875C14.7264 30 15.4167 30.6716 15.4167 31.5C15.4167 32.3284 14.7264 33 13.875 33H4.62499C3.77356 33 3.08333 32.3284 3.08333 31.5V22.5C3.08333 21.6716 3.77356 21 4.62499 21Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M33.4651 3.43934C34.0672 4.02513 34.0672 4.97487 33.4651 5.56066L22.6735 16.0607C22.0714 16.6464 21.0953 16.6464 20.4932 16.0607C19.8912 15.4749 19.8912 14.5251 20.4932 13.9393L31.2849 3.43934C31.8869 2.85355 32.8631 2.85355 33.4651 3.43934Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.5068 19.9393C17.1088 20.5251 17.1088 21.4749 16.5068 22.0607L5.71512 32.5607C5.11306 33.1464 4.13693 33.1464 3.53487 32.5607C2.93281 31.9749 2.93281 31.0251 3.53487 30.4393L14.3265 19.9393C14.9286 19.3536 15.9047 19.3536 16.5068 19.9393Z" fill="white" />
                </svg>
              </a>
            </Link>
          </HoveringIcon>
          <HoveringIcon>
            <a
              href={`${item.links.download}?force=true`}
              rel="noreferrer"
              target="_blank"
              download
            >
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="icon/file/download_24px">
                  <path id="icon/file/download_24px_2" fillRule="evenodd" clipRule="evenodd" d="M21.25 13.4584H23.5025C24.7633 13.4584 25.3867 14.9884 24.4942 15.8809L17.9917 22.3834C17.4392 22.9359 16.5467 22.9359 15.9942 22.3834L9.49168 15.8809C8.59918 14.9884 9.23668 13.4584 10.4975 13.4584H12.75V6.37504C12.75 5.59587 13.3875 4.95837 14.1667 4.95837H19.8333C20.6125 4.95837 21.25 5.59587 21.25 6.37504V13.4584ZM8.50001 29.0417C7.72084 29.0417 7.08334 28.4042 7.08334 27.6251C7.08334 26.8459 7.72084 26.2084 8.50001 26.2084H25.5C26.2792 26.2084 26.9167 26.8459 26.9167 27.6251C26.9167 28.4042 26.2792 29.0417 25.5 29.0417H8.50001Z" fill="white" />
                </g>
              </svg>
            </a>
          </HoveringIcon>
        </Flex>
      </InfoWrapper>
    </ImageWrapper>
  );
}
