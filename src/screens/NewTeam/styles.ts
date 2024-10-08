import styled from "styled-components/native";



export const Container = styled.View`

flex: 1;
background-color: ${({theme})=> theme.COLORS.GRAY_100} ;


`;


export const HeaderContainer = styled.View`
    background-color:${({theme})=> theme.COLORS.PURPLE_500} ;
    width: 100%;
    padding-top: 54px;
    padding-bottom: 24px;

`;

export const Content = styled.View`
    padding: 24px;
    justify-content: space-between;
    flex: 1;
`;