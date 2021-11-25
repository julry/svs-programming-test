import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';

export const Question2 = (props) => {

    return (
        <QuestionWrapper
            question={getQuestionById('2')}
            {...props}
        />
    );
};