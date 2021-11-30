import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { questions } from '../questions.config';
import { screens } from '../screens.config';
import { preloadImage } from '../utils/preloadImage';
import { ProgressProvider } from '../contexts/ProgressContext';
import { AppBar } from './common/AppBar';

const ScreenWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-x: hidden;
  color: white;
  height: ${({ height }) => height};
  white-space: pre-wrap;
`;

const DEFAULT_ANSWERS = questions.reduce((res, question) => ({ ...res, [question.id]: null }), {});

export function ScreenWrapper() {
    const [height, setHeight] = useState('100vh');

    useEffect(() => {
        function handleResize() {
            const viewportHeight = document.documentElement.clientHeight;
            setHeight(viewportHeight + 'px');
        }
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [currentScreenIndex, setCurrentScreenIndex] = useState( 0);
    const [screenDelta, setScreenDelta] = useState(0);
    const [answers, setAnswers] = useState(DEFAULT_ANSWERS);

    const setPrev = () => {
        const canSet = currentScreenIndex > 0;
        if (canSet) {
            setCurrentScreenIndex(currentScreenIndex - 1);
            setScreenDelta(screenDelta - 1);
        }
    };

    const setNext = () => {
        const canSet = currentScreenIndex < screens.length - 1;
        if (canSet) {
            setCurrentScreenIndex(currentScreenIndex + 1);
            setScreenDelta(screenDelta === 0 ? screenDelta : screenDelta + 1);
        }
    };

    const setAnswer = (questionId, answerId) => {
        setAnswers(answers => ({ ...answers, [questionId]: answerId }));
    };

    const { component, preloadImages, ...screen } = screens[currentScreenIndex] || {};
    const Component = component || (() => null);

    useEffect(() => {
        const clears = preloadImages && preloadImages.map(img => preloadImage(img));
        return () => clears && clears.forEach(clear => clear());
    }, [preloadImages]);

    const progressProviderValue = {
        screen,
        answers,
        screenDelta,
        setAnswer,
        setNext,
        setPrev,
    };

    return (
        <ScreenWrapperStyled height={height}>
            <ProgressProvider value={progressProviderValue}>
                <AppBar />
                <Component />
            </ProgressProvider>
        </ScreenWrapperStyled>
    );
}
