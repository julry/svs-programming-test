import React from 'react';
import styled from 'styled-components';
import { lineGif } from '../../constants/images';

const ImgStyled = styled.img`
    width: calc(100% + 50px);
    margin-left: -25px;
    height: 13px;
    
    @media screen and (min-width: 640px){
      width: calc(100% + 21.6vw);
      margin-left: -10.8vw;
    }
    @media screen and (min-width: 900px) and (orientation: landscape){
      grid-column: 1/3;
      grid-row: 1/1;
      width: calc(100vw + 12.3vw);
      margin-left: -6.9vw;
    }
`;

export const TopLine = (props) => {
    return <ImgStyled {...props} src={lineGif} alt={''}/>
}