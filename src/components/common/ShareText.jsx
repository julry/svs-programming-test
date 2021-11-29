import React from 'react';
import styled from 'styled-components';
import { BlueText, SmallText } from './Text';

const ShareTextStyled = styled(SmallText)`
    
    @media screen and (min-width: 900px) and (orientation: landscape){
      max-width: 400px;
    }
  
    @media screen and (min-width: 1100px){
        max-width: 520px;
    }
`;


export const ShareText = (props) =>{
    const {children, ...lastProps} = props;
    return (
        <ShareTextStyled {...lastProps}>
            {children}
        </ShareTextStyled>
    )
}