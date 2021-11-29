import React from 'react';
import { BlueText, RedText, Text } from './components/common/Text';
import {
    CPlusGif, CPlusVK,
    CSharpGif, CSharpVK,
    JavaGif, JavaVK,
    PythonGif,
    PythonVK,
} from './constants/images';

export const AnswerType = {
    Python: 'Python',
    Java: 'Java',
    CPlus: 'C++',
    CSharp: 'C#',
};

export const answerTypes = {
    [AnswerType.CPlus]: {
        type: AnswerType.CPlus,
        title: 'Остроумный и компанейский – наладите контакт даже с пришельцами',
        addTitle: 'Вы пользуетесь популярностью среди\nдрузей, но у вас непростой характер.',
        description: () => <Text>
            <BlueText>Ходят легенды,</BlueText> что у вас 27 часов
            в сутках. Как иначе объяснить вашу <RedText>{'<'}</RedText>продуктивность<RedText>{'>'}</RedText> и ответственный {'{\n'}
            <BlueText>подход к проектам и задачам?</BlueText>
            {'\n}\n\n'}
            Вы не беретесь за всё сразу,{'\n'}
            а выбираете <RedText>конкретную цель</RedText>{'\n'}
            и работаете на ее достижение.
        </Text>,
        image: CPlusGif,
        shareImage: CPlusVK,
    },
    [AnswerType.CSharp]: {
        type: AnswerType.CSharp,
        title: 'Любитель творчества и развития!\nВам даже море по колено :)',
        addTitle: 'Вы виртуоз плохо закодированного мира, ваши подходы нестандартны, а возможности безграничны.',
        description: () => <Text>
            Вы не ищете легких путей и подходите к решению задач с {'{\n'}
            <BlueText>ответственностью и креативом</BlueText>.{'\n}\n'}
            Обыденность и стагнация — это не про вас, вы всегда за <BlueText>{'<'}</BlueText>
            развитие<BlueText>{'>'}</BlueText> и поиск <RedText>новых возможностей</RedText>.
        </Text>,
        image: CSharpGif,
        shareImage: CSharpVK,
    },
    [AnswerType.Java]: {
        type: AnswerType.Java,
        title: 'Организованный во всем:\nот внешнего вида до гугл-календаря',
        addTitle: 'Вашей ответственности\nпозавидует каждый!',
        description: () => <Text>
            Вы обстоятельный человек, который{'\n'}точно <RedText>доведет дело до конца</RedText> и будет работать, пока не придет к <BlueText>{'<'}</BlueText>идеальному<BlueText>{'>'}</BlueText> результату.{'\n\n'}
            Скорость работы вам не важна,{'\n'}куда больше вы цените <BlueText>качество</BlueText>.
        </Text>,
        image: JavaGif,
        shareImage: JavaVK,
    },
    [AnswerType.Python]: {
        type: AnswerType.Python,
        title: 'Универсальный солдат, который\nперевернет мир программирования',
        addTitle: 'Вы настолько многосторонняя личность, что даже люди, знающие вас много лет, не устают удивляться вашим достижениям.',
        description: () => <Text>
            Вы умеете брать на себя <RedText>много{'\n'}задач</RedText> и легко справляетесь {'\n'}с <BlueText>{'<'}</BlueText>
            любыми проектами<BlueText>{'>'}</BlueText>.{'\n\n'}Вы легкий на подъем и общительный человек, <BlueText>желающий помочь всем</BlueText>.
        </Text>,
        image: PythonGif,
        shareImage: PythonVK
    },
};