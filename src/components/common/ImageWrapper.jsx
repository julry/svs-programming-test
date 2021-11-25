import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    height: 24.5vh;
    z-index: 2;
    @media screen and (max-height: 640px) and (orientation: landscape){
      min-height: 170px;
    }
    
    @media screen and (min-width: 640px){
      max-width: 550px;
    }
    
    @media screen and (min-width: 900px) and (orientation: landscape){
        grid-row: 1/1;
        grid-column: 2/2;
        height: auto;
        max-height: 363px;
        max-width: 45vw;
    }
    
    @media screen and (min-width: 1100px){
        grid-row: 1/1;
        grid-column: 2/2;
        height: 100%;
        max-height: 363px;
    }
`;

const ImageWrapperStyled = styled.div`
    overflow: hidden;
    border-radius: 25px;
    height: 100%;
`;

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    
    @media screen and (min-width: 1100px){
        height: 100%;
    }
    
    @media screen and (max-width: 300px){
        height: 100%;
    }
`;

const ButtonWrapper = styled.div`
    position: absolute;
    left: 0;
    bottom: -1px;
`;

export const ImageWrapper = (props) => {
    const { image, children, ...restProps } = props;
    return (
        <Wrapper {...restProps}>
            <ImageWrapperStyled>
                <Image src={image} alt={''} />
            </ImageWrapperStyled>
            <ButtonWrapper>{children}</ButtonWrapper>
        </Wrapper>
    )
}