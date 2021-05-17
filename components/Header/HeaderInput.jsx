import { Field } from 'formik';
import styled from 'styled-components';

const Box = styled.div`
    background-color: rgba(0, 0, 0, 0.89);
    border-radius: 3px;
    font-family: 'SFUIDisplayLight';
    margin-top: 40px;
    @media (max-width: 991px) {
        margin-top: 20px;
    }
`;

const InputСontainer = styled.div`
    position: relative;
    margin-bottom: 25px;
    padding-top: 40px;
    :before {
        content: '';
        background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%);
        height: 20px;
        position: absolute;
        left: 0;
        bottom: 00px;
        width: 300px;
        z-index: 2;
    };
    :after {
        content: '';
        background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 1) 100%);
        height: 20px;
        position: absolute;
        right: 0;
        bottom: 00px;
        width: 300px;
        z-index: 2;
    };
    @media (max-width: 991px) {
        padding-top: 0px;
    }
`;

const InputLabel = styled.label`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 72px;
    color: #fff;
    pointer-event: none;
    transition: all 0.5s ease-in-out;
    @media (max-width: 991px) {
        font-size: 36px;
    }
`;

const StyledField = styled(Field)`
    border: 0;
    border-bottom: 1px solid #555;
    background: #000;
    width: 100%;
    padding: 8px 0 5px 0;
    font-size: 30px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    :focus {
        border: none;
        outline: none;
        border-bottom: 1px solid #e74c3c;
        background: #000;
        ~${InputLabel} {
            top: -12px;
            font-size: 48px;
            opacity: 0;
        }
    };
    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px #000 inset !important;
    };
    :-webkit-autofill {
        -webkit-text-fill-color: #fff !important;
    }
`;

export default function HeaderInput(props) {
  const { name } = props;
  return (
    <Box>
      <InputСontainer>
        <StyledField type="text" required="" id="searchInput" name={name} autoComplete="off" />
        <InputLabel htmlFor="searchInput">Поиск</InputLabel>
      </InputСontainer>
    </Box>
  );
}
