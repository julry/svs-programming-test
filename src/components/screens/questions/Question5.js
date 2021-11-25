import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';

export const Question5 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionById('5')}
            {...props}
        />
    );
};