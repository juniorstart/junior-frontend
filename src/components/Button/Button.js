import styled, {css} from 'styled-components';

const Button = styled.button`
    padding: 0;
    background-color: #2FBFA2;
    width: ${({width}) => width || "220px"};
    height: 47px;
    border: none;
    border-radius: 50px;
    font-weight: 500;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;

    ${({secondary}) => (
        secondary && `
        background-color: #B6BFC8;
        width: 105px;
        height: 30px;
        font-size: 10px;
        `
    )}
`;

export default Button;