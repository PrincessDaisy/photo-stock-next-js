import styled from 'styled-components';

const TopicItem = styled.div`
    margin-right: 30px;
    font-size: 18px;
    font-family: 'SFUIDisplayLight';
    margin-bottom: 10px;
    @media (max-width: 991px) {
        margin-bottom: 8px;
    }
`;

export default function HeaderTopicItem(props) {
  const { title } = props;
  return (
    <>
      <TopicItem>{title}</TopicItem>
    </>
  );
}
