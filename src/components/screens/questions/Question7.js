import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';

export const Question7 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionById('7')}
            {...props}
        />
    );
};