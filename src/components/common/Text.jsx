import styled from 'styled-components';

export const Text = styled.p`
    font-size: 14px;
    line-height: 105.7%;
    font-weight: 500;
    
    @media screen and (max-width: 330px){
        font-size: 12px;
    }
    
    @media screen  and (min-width: 640px){
        font-size: 16px;
    }
    
    @media screen  and (max-height: 600px){
        font-size: 12px;
    }
    
    @media screen and (min-width: 1100px){
        font-size: 22px;
    }
`;

export const Title = styled(Text)`
    font-size: 18px;
    
    @media screen and (max-width: 330px){
        font-size: 16px;
    }
    
    @media screen  and (min-width: 640px){
        font-size: 28px;
    }
    
     @media screen  and (max-height: 600px){
        font-size: 16px;
    }
    
    @media screen and (min-width: 1100px){
        font-size: 30px;
    }
`;

export const BlueText = styled.span`
    color: #006AF4;
`;

export const RedText = styled.span`
    color: #FF0000;
`;


export const SmallText = styled(Text)`
    font-size: 12px;
    @media screen and (max-width: 330px){
        font-size: 10px;
    }
    
    @media screen and (min-width: 640px){
        font-size: 16px;
    }
    
    @media screen and (min-width: 1100px){
        font-size: 20px;
    }
`;