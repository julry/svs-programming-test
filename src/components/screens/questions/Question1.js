import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';

export const Question1 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionById('1')}
            {...props}
        />
    );
};