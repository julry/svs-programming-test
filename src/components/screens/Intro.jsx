import React, { useContext } from 'react';
import styled from 'styled-components';
import {ProgressContext} from "../../contexts/ProgressContext";
import { BlueText, RedText, Text, Title } from '../common/Text';
import { Logo } from '../svg/Logo';
import { TopLine } from '../common/TopLine';
import { ImageWrapper } from '../common/ImageWrapper';
import { introGif } from "../../constants/images";
import { AnswerType } from '../../answerTypes.config';
import { Button } from '../common/Button';
import { LeftArrow } from '../svg/LeftArrow';
import { FlexWrapper } from '../common/FlexWrapper';
import { ShareText } from '../common/ShareText';

const Wrapper = styled.div`
    padding: 1.2vh 25px;
    height: 100%;
    
    @media screen and (max-width: 300px){
        padding: 1.2vh 10px;
    }
    
    @media screen and (min-width: 640px){
      padding: 3.3vh 10.8vw 7.2vh;
    }
    
    @media screen and (min-width: 640px) and (max-height: 850px){
      padding: 2vh 10.8vw 1.2vh;
    }
    
    @media screen and (min-width: 900px) and (orientation: landscape){
      display: grid;
      padding: 1.5vh 5.4vw 7.1vh 6.9vw;
      grid-template-columns: 41vw auto;
      grid-template-rows: 11.5vh 1fr;
      grid-auto-flow: column;
      grid-row-gap: 1vh;
      grid-column-gap: 6.3vw;
    }
    
    @media screen and (min-width: 1100px){
      grid-template-rows: 21.5vh 1fr;
      grid-row-gap: 1.5vh;
    }
`;

const LogoWrapper = styled.div`
    @media screen and (min-width: 900px) and (orientation: landscape){
      grid-row: 1/1;
      grid-column: 1/1;
    }
`;

const LogoStyled = styled(Logo)`
    width: 146px;
    height: 62px;
    margin-left: -13px;
    
    @media screen and (min-width: 640px){
      width: 180px;
      height: 80px;
      margin-bottom: 1.6vh;
    }
    
    @media screen and (max-height: 600px){
      width: 105px;
      height: 45px;
    }
    
    @media screen and (min-width: 1100px){
      width: 293px;
      margin-bottom: 0;
      height: 125px;
      margin-left: -1.6vw;
    } 
    
    @media screen and (max-height: 630px) and (min-width: 1100px){
        width: 211px;
        height: 90px;
    }
`;

const ImageWrapperStyled = styled(ImageWrapper)`
    @media screen and (min-width: 900px) and (orientation: landscape){
        grid-row: 2/2;
        max-height: 33vh;
    }
`;

const TextWrapper = styled.div`
    margin: 20px 0;
    
    @media screen  and (min-width: 640px){
      margin: 5.9vh 0;
      max-width: 410px;
    }
    
    @media screen and (min-width: 900px) and (orientation: landscape){
      max-width: none;
      grid-row: 2/2;
      grid-column: 1/2;
      margin: auto 0 0;
    } 
`;

const TitleStyled = styled(Title)`
    @media screen and (min-width: 1100px){
        font-size: 46px;
    }
    
    @media screen and (min-width: 1100px) and (max-height: 550px){
        font-size: 32px;
    }
`;

const TextStyled = styled(Text)`
    @media screen and (min-width: 1100px) and (max-height: 550px){
        font-size: 18px;
    }
`;

const AddInfoWrapper = styled.div`
    @media screen  and (min-width: 640px){
        max-width: 410px;
    }
    
    @media screen and (min-width: 900px) and (orientation: landscape){
        min-width: 100%;
        grid-row: 2/2;
        grid-column: 2/2;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
`;

const LanguageWrapper = styled.div`
    padding: 11px 12px;
    color: #D2DEE7;
    background: #072339;
    border-top-right-radius: 4px;
    margin: 20px 4px 5px 0;
    font-family: 'Inter', sans-serif;
    
    @media screen and (max-height: 600px){
            padding: 8px 7px;
            font-size: 14px;
            margin: 10px 4px 5px 0;
    }
`;

const ArrowIcon = styled(LeftArrow)`
    transform: rotate(180deg);
    margin-left: 13px;
    width: 21px;
    height: 19px;
`

export const Intro = () => {
    const { setNext } = useContext(ProgressContext);

    return <Wrapper>
        <LogoWrapper>
            <LogoStyled />
            <TopLine />
        </LogoWrapper>
        <TextWrapper>
            <TitleStyled>
                Какой ты <BlueText>язык</BlueText> {'{\n'}<BlueText>программирования?</BlueText>{'\n}'}
            </TitleStyled>
            <TextStyled>
                {'\n'}Идеальный мир невозможно описать с помощью языков программирования?{'\n'}Неправда — <BlueText>{'<'}</BlueText>сегодня они могут все<BlueText>{'>'}</BlueText>.{'\n\n'}И ты тоже, Нео, ведь <RedText>каждый из нас</RedText> — своего рода язык программирования...
            </TextStyled>
        </TextWrapper>
        <AddInfoWrapper>
            <ImageWrapperStyled image={introGif} >
                <FlexWrapper>
                    <Button onClick={setNext} isShort={false}>Играть</Button>
                    <ArrowIcon />
                </FlexWrapper>
            </ImageWrapperStyled>
            <FlexWrapper>
                {Object.values(AnswerType).map(type => (
                    <LanguageWrapper key={type}>{type}</LanguageWrapper>
                ))}
            </FlexWrapper>
            <ShareText />
        </AddInfoWrapper>


    </Wrapper>
}