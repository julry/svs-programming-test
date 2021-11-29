import React, { useContext, useCallback } from 'react';
import styled from 'styled-components';
import { questions } from '../questions.config';
import { ProgressContext } from '../contexts/ProgressContext';
import { ImageWrapper } from './common/ImageWrapper';
import { Button } from './common/Button';
import { TopLine } from './common/TopLine';
import { Text } from './common/Text';
import { FlexWrapper } from './common/FlexWrapper';

const Wrapper = styled.div`
    display: flex;
    flex-grow: 1;
    padding: 0 19px 20px 25px;  
    flex-direction: column;
    height: 100%;
    
    @media screen and (min-height: 700px){
        padding-bottom: 7vh;
    }
    
    @media screen and (min-width: 640px){
      padding: 0 10.8vw 7.2vh;
    }
    
    @media screen and (min-width: 900px) and (orientation: landscape){
      display: grid;
      padding: 0 5.4vw 12.1vh 6.9vw;
      grid-template-columns: 41vw auto;
      grid-template-rows: 1fr;
      grid-auto-flow: column;
      grid-gap: 2.7vw;
    } 
`;

const ContentWrapper = styled.div`
    padding: 15px 0;
    
    @media screen and (min-height: 700px){
        padding-top: 5vh;
    }
    
    @media screen and (min-width: 640px){
      padding: 7.3vh 0 0;
      max-width: 550px;
    }
    
    @media screen and (min-width: 900px) and (orientation: landscape){
      max-width: none;
      padding: 7.8vh 0 0;
      grid-column: 1/2;
      grid-row: 1/1;
      display: flex;
      flex-direction: column;
    }
    
    @media screen and (min-width: 1100px){
      padding: 12.8vh 0 0;
    }
`;

const AnswersBoxStyled = styled.div`
    margin-top: 15px;
    
    @media screen and (min-width: 640px){
      margin-top: 3.4vh;
    }
    
    @media screen and (min-width: 900px) and (orientation: landscape){
      margin-top: auto;
    }
`;

const AnswerWrapper = styled.div`
    background: ${ ({isSelected}) => isSelected ? '#FF0000' : '#062743'};
    padding: 8px 10px;
    cursor: pointer;
    width: 100%;
    border-radius: 4px;
    
    &:hover {
            background: ${ ({isSelected}) => isSelected ? '#FF0000' : 'rgba(255, 0, 0, 0.7)'};
    }
    & + & {
      margin-top: 5px;
    }
    
    @media screen and (min-width: 640px){
        padding: 10px 15px;
        & + & {
          margin-top: 10px;
        }
    }
    
    @media screen and (min-width: 1100px){
      padding: 12px 18px;
      
      & + & {
        margin-top: 15px;
      }
    }
`;

const  NumberWrapper = styled(FlexWrapper)`
    background: #000000;
    color: white;
    margin-left: -10px;
    padding:  0 9px 0 22px;
    height: 40px;
    border-radius: 4px;
    
    @media screen and (min-width: 1100px){
      height: 48px;
      padding-right: 13px;
    }
`;

const ImageWrapperStyled = styled(ImageWrapper)`
    margin-top: auto;
`;

const ButtonStyled = styled(Button)`
    z-index: 4;
`;

export const QuestionWrapper = props => {
    const { question } = props;
    const { answers, setAnswer, setPrev, setNext } = useContext(ProgressContext);

    const questionAnswers = question.answers;

    const handleAnswerChange = useCallback((answerId) => {
        setAnswer(question.id, answerId);
        setTimeout(setNext, 1000);
    }, [question, setAnswer, setNext]);

    const renderAnswerWrapper = (answer) => {
        return (
            <AnswerWrapper
                key={answer.id}
                isSelected={answers[question.id] && answers[question.id] === answer.id}
                onClick={() => handleAnswerChange(answer.id)}
            >
                <Text>{answer.text}</Text>
            </AnswerWrapper>
        )
    }

    return (
        <Wrapper>
            <TopLine />
            <ContentWrapper>
                {question.text()}
                <AnswersBoxStyled>
                    {questionAnswers.map(answer => (
                        renderAnswerWrapper(answer)
                    ))}
                </AnswersBoxStyled>
            </ContentWrapper>
            <ImageWrapperStyled image={question.image}>
                <FlexWrapper>
                    <ButtonStyled onClick={setPrev} isShort={true}/>
                    <NumberWrapper>
                        <Text>{question.id}/{questions.length}</Text>
                    </NumberWrapper>
                </FlexWrapper>
            </ImageWrapperStyled>
        </Wrapper>
    );
};