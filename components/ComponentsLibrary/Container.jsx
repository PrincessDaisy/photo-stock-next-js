import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    @media (min-width: 320px) {
      padding: 0 15px 0 15px;
    };
    @media (min-width: 768px) {
      max-width: 720px;
    }; 
    @media (min-width: 992px) {
      max-width: 960px;
    };
    @media (min-width: 1200px) {
      max-width: 1140px;
    };
    @media (min-width: 1600px) {
      max-width: 1440px;
    };
`;

export default Container;
