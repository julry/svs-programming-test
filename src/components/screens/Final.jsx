import React from 'react';
import styled from 'styled-components';
import { useResult } from '../../hocs/useResult';
import { BlueText, SmallText, Text } from '../common/Text';
import { TopLine } from '../common/TopLine';
import { FlexWrapper } from '../common/FlexWrapper';
import { VKIcon } from '../svg/VKIcon';
import { ImageWrapper } from '../common/ImageWrapper';
import { getShareParams } from '../../utils/getShareParams';
import { ShareText } from '../common/ShareText';
import { SEVERSTAL_TAG } from '../../constants/hashtag';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';

const Wrapper = styled.div`
    display: flex;
    flex-grow: 1;
    padding: 0 19px 20px 25px;  
    flex-direction: column;
    height: 100%;
    
    @media screen and (min-width: 640px){
      padding: 0 10.8vw 7.2vh;
    }
    
    @media screen and (min-width: 900px) and (orientation: landscape){
      display: grid;
      padding: 0 5.4vw 16.1vh 6.9vw;
      grid-template-columns: 41vw auto;
      grid-template-rows: minmax(120px, 20.77vh) 1fr;
      grid-auto-flow: column;
      grid-column-gap: 2.7vw;
    }
    
    @media screen and (min-width: 1100px){
      grid-template-rows: minmax(150px, 23.77vh) 1fr;
      grid-column-gap: 2.7vw;
    }
    
    @media screen and (min-width: 1100px) and (max-height: 785px){
      padding-bottom: 5vh;
    }
`;

const TypeWrapper = styled(FlexWrapper)`
    height: 37px;
    width: fit-content;
    padding: 0 10px;
    justify-content: center;
    background: #FF0000;
    border-radius: 4px;
    font-size: 18px;
    margin-right: 12px;
    
    @media screen and (max-width: 330px){
        height: 30px;
        padding: 0 7px;
        font-size: 16px;
    }
    
    @media screen and (min-width: 640px){
        padding: 0 15px;
        font-size: 24px;
        height: 48px;
    }
    
    @media screen and (min-width: 1100px){
        margin-right: 39px;
    }
`;

const ResultTitleWrapper = styled(FlexWrapper)`
    margin: 20px -10px 20px 0;
    
    @media screen and (max-height: 650px){
         margin: 15px -10px 15px 0;
    } 
    
    @media screen and (min-width: 640px){
         margin: 6.34vh -10px 6.34vh 0;
         max-width: 500px;
    }
    
    @media screen and (min-width: 900px) and (orientation: landscape){
      max-width: none;
      grid-row: 1/1;
      grid-column: 1/2;
      margin: 7.6vh -10px 7.6vh 0;
    }
`;

const ResultImageWrapper = styled.div`
    position: relative;
    margin-bottom: 3.2vh;
    
    @media screen and (min-width: 640px){
        width: 410px;
        margin-bottom: 5.1vh;
    } 
    @media screen and (min-width: 900px) and (orientation: landscape){
        width: 100%;
        max-width: 560px;
        margin-bottom: 0;
        grid-column: 1/1;
        grid-row: 2/2;
        margin-top: auto;
    }
    
    @media screen and (min-width: 1100px){
        width: 100%;
        max-width: 560px;
        margin-bottom: 0;
        grid-column: 1/1;
        grid-row: 2/2;
        margin-top: auto;
        height: 100%;
    }
`;

const ImageWrapperStyled = styled(ImageWrapper)`
    @media screen and (min-width: 1100px){
        height: calc(100% - 60px);
        max-height: none;
    }
`
const AddTitleWrapper = styled.div`
  background: #062743;
  z-index: 0;
  margin-top: -34px;
  padding: 51px 17px 17px;
  border-radius: 4px;
  
  @media screen and (max-width: 330px){
        padding: 47px 10px 13px;
  } 
  
  @media screen and (min-width: 640px){
        width: 497px;
        border-radius: 16px;
        margin-top: -44px;
        padding: 57px 23px 26px;
  }
  
  @media screen and (min-width: 900px) and (orientation: landscape){
        width: 100%;
  }
`;



const DescriptionWrapper = styled.div`
  max-width: 340px;
  margin-bottom: 10px;
  
  @media screen and (max-width: 320px){
    & ${Text}{
      font-size: 11px;
    }
  }
  
  @media screen and (min-width: 900px) and (orientation: landscape){
      max-width: 400px;
      grid-row: 2/2;
      grid-column: 2/2;
  }
  
  @media screen and (min-width: 1100px){
      max-width: 455px;
  }
`;

const ShareBtn = styled(FlexWrapper)`
    justify-content: center;
    border-radius: 18px;
    height: 32px;
    padding: 0 10px;
    width: fit-content;
    background: #FF0000;
    cursor: pointer;
    margin-bottom: 10px;
    
    @media screen and (min-width: 640px){
      height: 45px;
      border-radius: 20px;
    }
`;

const VKIconStyled = styled(VKIcon)`
    width: 20px;
    height: 20px;
    margin-right: 15px;
    
    @media screen and (min-width: 640px){
      height: 35px;
      width: 35px;
    }
`;

const ShareWrapper = styled.div`
    margin-top: auto;
    
    @media screen and (min-width: 900px) and (orientation: landscape){
      grid-row: 2/2;
      grid-column: 2/2;
    }
`;

const ShareTextStyled = styled(ShareText)`
    max-width: 455px;
    @media screen and (min-width:110px){
      max-width: 550px;
    }
`;

export const Final = () => {
    const result = useResult();

    const onShare = () => {
        reachMetrikaGoal('social');
        window.open(getShareParams(result), '_blank');
    }

    return (
        <Wrapper>
            <TopLine />
            <ResultTitleWrapper>
                <TypeWrapper>
                    {result.type}
                </TypeWrapper>
                <SmallText>{result.title}</SmallText>
            </ResultTitleWrapper>
            <ResultImageWrapper>
                <ImageWrapperStyled image={result.image}/>
                <AddTitleWrapper>
                    <SmallText>{result.addTitle}</SmallText>
                </AddTitleWrapper>
            </ResultImageWrapper>
            <DescriptionWrapper>
                {result.description()}
            </DescriptionWrapper>
            <ShareWrapper>
                <ShareBtn onClick={onShare}>
                    <VKIconStyled/>
                    <Text>???????????????????? ?? ???????????????? ????????</Text>
                </ShareBtn>
                <ShareTextStyled>
                    ???????????????? ??????????????????
                    ?? ???????????????? <BlueText>{SEVERSTAL_TAG} </BlueText>
                    ???????? ???? ?????????? VK ?? ????????????????
                    ???? ???????????????? Sony WH-1000XM4!
                    {'\n'}?????????????????????? ?????????????? ?????????????????????????? 23.12.21.
                </ShareTextStyled>
            </ShareWrapper>
        </Wrapper>
    )
}