import React from 'react';
import styled from 'styled-components';
import { LeftArrow } from '../svg/LeftArrow';

const BtnStyled = styled.button`
    outline: none;
    border: none;
    background: #FF0000;
    padding: 10px 15px;
    height: 40px;
    display: flex;
    align-items: center;
    font-size: 18px;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    @media screen and (min-width: 1100px){
      height: 48px;
      padding: 15px 20px;
    }
`;

const LeftArrowStyled = styled(LeftArrow)`
    width: 21px;
    height: 19px;
`;

export const Button = (props) => {
    const {isShort, children, ...restProps} = props;
    return (
        <BtnStyled {...restProps}>
            {isShort ? <LeftArrowStyled />
                : children}
        </BtnStyled>
    );
}