import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';

export const Question6 = (props) => {
    return (
        <QuestionWrapper
            question={getQuestionById('6')}
            {...props}
        />
    );
};