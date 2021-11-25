import React from 'react';
import { QuestionWrapper } from '../../QuestionWrapper';
import { getQuestionById } from '../../../utils/getQuestionById';

export const Question4 = (props) => {

    return (
        <QuestionWrapper
            question={getQuestionById('4')}
            {...props}
        />
    );
};