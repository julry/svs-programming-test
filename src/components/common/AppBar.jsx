import React from 'react';
import styled from 'styled-components';
import { DownMark } from '../svg/DownMark';
import { Text } from './Text';

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled(FlexContainer)`
    height: 40px;
    justify-content: flex-start;
    width: 100%;
    background: #01111D;
    border-bottom: 1px solid #122D42;
    color: #5F7E97;
    
    @media screen and (max-height: 600px){
        height: 32px;
    }
    @media screen and (min-width: 1100px){
       height: 62px;
    } 
`;

const TextStyled = styled(Text)`
    font-family: 'Inter', sans-serif;
`

const Tab = styled(FlexContainer)`
    border-right: 1px solid #272B3B;
    padding: 0 16px;
    height: 100%;
    font-size: 14px;
    
    &:last-child{
        border-width: 2px;
    }
    
    @media screen and (max-width: 340px){
        padding: 0 8px;
    }
`;

const ActiveTab = styled(Tab)`
    color: #CFDBE4;
    padding-right: 30px;
    background-color: #062743;
    
    @media screen and (max-width: 340px){
        padding-right: 15px;
    }
`;

const ButtonsBlock = styled(Tab)`
    padding: 14px;
    
    @media screen and (max-width: 300px){
        padding: 8px;
    }
`;

const Button = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ color }) => color};
    margin-left: 8px;
    
    &:first-child{
        margin-left: 0;
    }
    
    @media screen and (max-width: 300px){
         width: 10px;
        height: 10px;
    }
`;

const DropDown = styled(FlexContainer)`
      margin: 0 12px 0 auto;
      @media screen and (max-width: 300px){
        margin-right: 2px;
      }
`;

const DropIcon = styled(DownMark)`
      width: 10px;
      height: 7px;
      margin-left: 5px;
`
export const AppBar = () => {
    return (
        <Wrapper>
            <ButtonsBlock>
                <Button color={'#FF4A4A'}/>
                <Button color={'#FFB83D'}/>
                <Button color={'#00C543'}/>
            </ButtonsBlock>
            <ActiveTab>
                <TextStyled>about.css</TextStyled>
            </ActiveTab>
            <Tab>
                <TextStyled>bio.md</TextStyled>
            </Tab>
            <DropDown>
                <TextStyled>Theme</TextStyled>
                <DropIcon />
            </DropDown>
        </Wrapper>
    )
}