/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const HeaderLink = styled.div`
    margin-left: 40px;
    font-family: 'SFUIDisplayLight';
    font-size: 24px;
    &:nth-child(1) {
        font-family: 'SFUIDisplayBold';
        margin-left: 0;
    };
    &:nth-child(2) {
        margin-left: auto;
    };
    @media (max-width: 991px) {
      margin-left: 22px;
    }
`;
const LinkText = styled.span`
    margin-left: 12px;
    @media (max-width: 991px) {
      display: none;
    }
`;

export default function HeaderLinkItem(props) {
  const { data: { link, imgSrc, text } } = props;
  return (
    <HeaderLink>
      <Link href={link}>
        <a>
          <span>
            <Image src={imgSrc} width="23" height="23" />
          </span>
          <LinkText>
            {text}
          </LinkText>
        </a>
      </Link>
    </HeaderLink>
  );
}
