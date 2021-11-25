import React from 'react';
import { AnswerType } from './answerTypes.config';
import { firstQGif, forthGif, secondQGif, thirdGif } from './constants/images';
import { BlueText, RedText, Title } from './components/common/Text';

export const questions = [
    {
        id: '1',
        text: () => <Title>
            Ты приходишь <BlueText>{'<'}</BlueText>
            на стажировку<BlueText>{'>'}</BlueText> в новую компанию.
            {'\n\n'}Твой первый <RedText>день</RedText> – {'{\n'}<BlueText>чем займешься сегодня?</BlueText>{'\n}'}
        </Title>,
        image: firstQGif,
        answers: [
            {
                id: '1',
                text: 'Найду тимлида и попрошу добавить меня во всевозможные чатики',
                type: AnswerType.CPlus,
            },
            {
                id: '2',
                text: 'Постараюсь запомнить кто есть кто',
                type: AnswerType.Python,
            },
            {
                id: '3',
                text: 'Где тут код писать? Я на работе уже 30 секунд',
                type: AnswerType.CSharp,
            },
            {
                id: '4',
                text: 'Заведу отдельный файл, куда буду записывать все услышанные баги, пригодится',
                type: AnswerType.Java,
            },
        ],
    },
    {
        id: '2',
        text: () => <Title>
            Твой новый {'<'}<RedText>рабочий стол</RedText>{'>'} {'\n\nкаким он будет {\n'}
            <BlueText>через месяц работы?</BlueText>{'\n}'}
        </Title>,
        image: secondQGif,
        answers: [
            {
                id: '1',
                text: 'Хаос. С трудом нахожу мышку',
                type: AnswerType.CSharp,
            },
            {
                id: '2',
                text: 'Стерильный порядок. Я даже кофе на него не ставлю – мало ли что случится с компьютером',
                type: AnswerType.Python,
            },
            {
                id: '3',
                text: 'Хорошие отношения с компилятором важнее уборки',
                type: AnswerType.CPlus,
            },
            {
                id: '4',
                text: 'Я доверяю уборку на столе ИИ',
                type: AnswerType.Java,
            },
        ],
    },
    {
        id: '3',
        text: () => <Title><BlueText>Что</BlueText> смотришь на{'{\n'}
            <RedText>YouTube?</RedText>{'\n}'}
        </Title>,
        image: thirdGif,
        answers: [
            {
                id: '1',
                text: 'Смотрю только презентации от технологических гигантов. Про Мету слышали?',
                type: AnswerType.CPlus,
            },
            {
                id: '2',
                text: 'Остина Эванса – обо всем, от ПК до смартфонов и тем, что между',
                type: AnswerType.Python,
            },
            {
                id: '3',
                text: 'Роботы Boston Dynamics – моя любимая компания на вечер',
                type: AnswerType.CSharp,
            },
            {
                id: '4',
                text: 'Смотрю анпакинги новых продуктов',
                type: AnswerType.Java,
            },
        ],
    },
    {
        id: '4',
        text: ()=> <Title><RedText>Как</RedText> бы ты описал(-а){'\n'}свой {'<'}<BlueText>стиль одежды?</BlueText>{'>'}</Title>,
        image: forthGif,
        answers: [
            {
                id: '1',
                text: 'Кроссовки, джинсы, черная водолазка. Ну вы поняли',
                type: AnswerType.CPlus,
            },
            {
                id: '2',
                text: 'Толстовка с карманом для ноута и поддерживающая шею подушка для работы',
                type: AnswerType.Python,
            },
            {
                id: '3',
                text: 'Джинсы и футболка с “Eat. Code. Sleep. Repeat”',
                type: AnswerType.CSharp,
            },
            {
                id: '4',
                text: 'Ношу толстовки с кейс-чемпионатов, летом – футболки с кейс-чемпионатов',
                type: AnswerType.Java,
            },
        ],
    },
    {
        id: '5',
        text: () => <Title>
            <RedText>Какую подпись</RedText>
            {'\n'}ты бы поставил(-а) в {'{\n'}<BlueText>электронную почту?</BlueText>{'\n}'}
        </Title>,
        image: forthGif,
        answers: [
            {
                id: '1',
                text: 'Нет проблем, есть только решения!',
                type: AnswerType.CSharp,
            },
            {
                id: '2',
                text: 'Долгой жизни и процветания',
                type: AnswerType.Python,
            },
            {
                id: '3',
                text: 'С наилучшими пожеланиями',
                type: AnswerType.Java,
            },
            {
                id: '4',
                text: 'Спасибо, что прочитали мое письмо. Вот изображение котенка',
                type: AnswerType.CPlus,
            },
        ],
    },
    {
        id: '6',
        text: () => <Title><BlueText>Чем</BlueText> займемся {'{\n'}<RedText>после работы?</RedText>{'\n}'}</Title>,
        image: forthGif,
        answers: [
            {
                id: '1',
                text: 'Я же уже говорил. Ком-пи-ля-тор',
                type: AnswerType.CPlus,
            },
            {
                id: '2',
                text: 'Пойду к друзьям обсуждать идеи для стартапов',
                type: AnswerType.Python,
            },
            {
                id: '3',
                text: 'Буду проходить курсы по machine learning',
                type: AnswerType.CSharp,
            },
            {
                id: '4',
                text: 'Домой, там вместо ИИ мама убралась',
                type: AnswerType.Java,
            },
        ],
    },
    {
        id: '7',
        text: () => <Title>
            И <RedText>последний</RedText> вопрос:{'\n'}какие твои любимые {'{\n'}<BlueText>рабочие задачи?</BlueText>{'\n}'}
        </Title>,
        image: forthGif,
        answers: [
            {
                id: '1',
                text: 'Брифинги команды перед новыми проектами',
                type: AnswerType.CPlus,
            },
            {
                id: '2',
                text: 'Что угодно. Могу данные проанализировать, могу машину обучить или игрушку написать',
                type: AnswerType.Python,
            },
            {
                id: '3',
                text: 'Собирать сайты. Это я люблю!',
                type: AnswerType.CSharp,
            },
            {
                id: '4',
                text: 'Приложения, желательно на Android',
                type: AnswerType.Java,
            },
        ],
    },
];