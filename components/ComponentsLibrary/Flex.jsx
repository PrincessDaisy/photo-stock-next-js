import styled from 'styled-components';

const Flex = styled.div`
    display: flex;
    justify-content: ${(props) => (props.justify ? props.justify : 'flex-start')};
    align-content: ${(props) => (props.align ? props.align : 'stretch')};
    width: ${(props) => (props.width ? props.width : 'auto')};
`;

export default Flex;
